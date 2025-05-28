// 添加调试日志
console.log('OpenRouter配置信息:', {
  hasApiKey: !!process.env.OPENROUTER_API_KEY,
  apiKeyLength: process.env.OPENROUTER_API_KEY?.length,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  nodeEnv: process.env.NODE_ENV
});

// 类型定义
interface AIDetectionResult {
  isAI: boolean;
  score: number;
  analysis: string;
}

// 创建缓存Map
const textAnalysisCache = new Map<string, AIDetectionResult>();
const humanizationCache = new Map<string, string>();

// 语言检测函数
const detectLanguage = (text: string): string => {
  // 简单的语言检测逻辑
  const chineseRegex = /[\u4e00-\u9fff]/;
  const hasChineseChars = chineseRegex.test(text);
  
  // 如果包含中文字符，返回中文
  if (hasChineseChars) {
    return 'zh';
  }
  
  // 默认返回英文
  return 'en';
};

// 创建自定义fetch函数
const customFetch = async (endpoint: string, options: any) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('OpenRouter API key is not configured');
  }

  const url = `https://openrouter.ai/api/v1${endpoint}`;
  console.log('Debug - API Request:', {
    url,
    method: options.method,
    hasApiKey: !!apiKey,
    apiKeyLength: apiKey.length,
    body: JSON.parse(options.body)
  });

  try {
    const headers = {
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      'X-Title': 'Undetectable.AI',
      'Authorization': `Bearer ${apiKey}`,
    };

    console.log('Request Headers:', headers);

    const response = await fetch(url, {
      ...options,
      headers,
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorText
      });

      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }

      throw new Error(errorData.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', {
      status: response.status,
      data: data
    });

    return data;
  } catch (error: any) {
    console.error('Fetch Error:', {
      message: error.message,
      url,
      method: options.method,
      stack: error.stack
    });
    throw error;
  }
};

// 多语言系统提示词
const getSystemPromptByLanguage = (language: string = 'zh'): string => {
  const prompts: Record<string, string> = {
    zh: '你是一个专业的AI文本检测专家。请分析以下文本是否由AI生成，并按照以下格式回复：\n1. 评分（0-100）：0表示完全由人类撰写，100表示完全由AI生成\n2. 总体判断\n3. 特征分析（3-5个要点）\n请用中文回复。',
    en: 'You are a professional AI text detection expert. Please analyze whether the following text is AI-generated and respond in this format:\n1. Score (0-100): 0 means completely human-written, 100 means completely AI-generated\n2. Overall judgment\n3. Feature analysis (3-5 points)\nPlease respond in English.'
  };
  
  return prompts[language] || prompts.en;
};

// 多语言用户提示词
const getUserPromptByLanguage = (text: string, language: string = 'zh'): string => {
  const prompts: Record<string, string> = {
    zh: `请分析以下文本是否由AI生成（请用中文回复）：\n\n${text}`,
    en: `Please analyze whether the following text is AI-generated:\n\n${text}`
  };
  
  return prompts[language] || prompts.en;
};

// AI内容检测服务
export const detectAIContent = async (text: string, language?: string): Promise<AIDetectionResult> => {
  if (typeof window !== 'undefined') {
    throw new Error('API calls are not allowed on the client side');
  }

  // 如果没有指定语言，自动检测
  const detectedLanguage = language || detectLanguage(text);
  
  const cacheKey = `${text.substring(0, 100)}_${detectedLanguage}`;
  if (textAnalysisCache.has(cacheKey)) {
    return textAnalysisCache.get(cacheKey)!;
  }

  let attempts = 0;
  const maxAttempts = 2;

  while (attempts < maxAttempts) {
    try {
      const requestBody = {
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: 'system',
            content: getSystemPromptByLanguage(detectedLanguage)
          },
          {
            role: 'user',
            content: getUserPromptByLanguage(text, detectedLanguage)
          }
        ],
        temperature: 0.3,
        max_tokens: 1000
      };

      console.log('Request Body:', requestBody);

      const response = await customFetch('/chat/completions', {
        method: 'POST',
        body: JSON.stringify(requestBody)
      });

      const content = response.choices[0].message.content || '';
      console.log('API Response Content:', content);
      
      // 提取评分
      const scoreMatch = content.match(/(?:评分|Score|得分).*?(\d+)/i) || content.match(/(\d+)(?:\/100|%)/);
      const score = scoreMatch ? parseInt(scoreMatch[1]) : 50;

      const result = {
        isAI: score > 50,
        score: score,
        analysis: content
      };

      textAnalysisCache.set(cacheKey, result);
      return result;

    } catch (error: any) {
      attempts++;
      console.error(`AI检测尝试${attempts}/${maxAttempts}失败:`, {
        error: error.message,
        attempt: attempts,
        maxAttempts,
        stack: error.stack
      });

      if (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  throw new Error('AI检测服务暂时不可用');
};

// 多语言人性化系统提示词
const getHumanizeSystemPromptByLanguage = (
  options: {
    intensity: 'low' | 'medium' | 'high';
    preserveMeaning?: boolean;
    style?: string;
  },
  language: string = 'zh'
): string => {
  const basePrompts: Record<string, string> = {
    zh: '你是一个专业的AI文本人性化专家，能够将AI生成的文本转换为更像人类撰写的内容。请确保输出内容使用中文。',
    en: 'You are a professional AI text humanization expert who can convert AI-generated text into content that appears more human-written. Please ensure the output content is in English.'
  };
  
  const basePrompt = basePrompts[language] || basePrompts.en;
  let systemPrompt = basePrompt;
  
  // 根据强度设置不同的提示词
  const intensityPrompts: Record<string, Record<'low' | 'medium' | 'high', string>> = {
    zh: {
      low: '请进行轻微的人性化处理，保持原文的结构和风格，只做必要的调整。',
      medium: '请进行中等程度的人性化处理，适当调整句式和表达方式，使其更自然。',
      high: '请进行深度人性化处理，大幅改写句式和表达方式，但保持原意不变。'
    },
    en: {
      low: 'Please perform light humanization, maintaining the original structure and style with only necessary adjustments.',
      medium: 'Please perform moderate humanization, appropriately adjusting sentence patterns and expressions to make them more natural.',
      high: 'Please perform deep humanization, significantly rewriting sentence patterns and expressions while preserving the original meaning.'
    }
  };
  
  systemPrompt += ' ' + (intensityPrompts[language]?.[options.intensity] || intensityPrompts.en[options.intensity]);
  
  if (options.preserveMeaning) {
    const meaningPrompts: Record<string, string> = {
      zh: '请确保保持原文的核心意思和信息不变。',
      en: 'Please ensure that the core meaning and information of the original text remain unchanged.'
    };
    systemPrompt += ' ' + (meaningPrompts[language] || meaningPrompts.en);
  }
  
  if (options.style) {
    const stylePrompts: Record<string, string> = {
      zh: `请采用${options.style}的写作风格。`,
      en: `Please adopt a ${options.style} writing style.`
    };
    systemPrompt += ' ' + (stylePrompts[language] || stylePrompts.en);
  }
  
  // 强调语言一致性
  const languageConsistencyPrompts: Record<string, string> = {
    zh: '重要：请确保输出的文本完全使用中文，不要混合其他语言。',
    en: 'Important: Please ensure the output text is entirely in English, do not mix other languages.'
  };
  systemPrompt += ' ' + (languageConsistencyPrompts[language] || languageConsistencyPrompts.en);
  
  return systemPrompt;
};

// 多语言人性化用户提示词
const getHumanizeUserPromptByLanguage = (text: string, language: string = 'zh'): string => {
  const prompts: Record<string, string> = {
    zh: `请将以下文本进行人性化处理，使其看起来更像人类撰写的内容。请确保输出内容使用中文：\n\n${text}`,
    en: `Please humanize the following text to make it appear more human-written. Please ensure the output content is in English:\n\n${text}`
  };
  
  return prompts[language] || prompts.en;
};

// AI内容人性化服务
export const humanizeAIContent = async (
  text: string,
  options: {
    intensity: 'low' | 'medium' | 'high';
    preserveMeaning?: boolean;
    style?: string;
    language?: string;
  }
): Promise<string> => {
  if (typeof window !== 'undefined') {
    throw new Error('API calls are not allowed on the client side');
  }

  // 如果没有指定语言，自动检测输入文本的语言
  const detectedLanguage = options.language || detectLanguage(text);
  console.log('Detected language for humanization:', detectedLanguage, 'for text:', text.substring(0, 50));
  
  const cacheKey = `${text.substring(0, 100)}_${options.intensity}_${detectedLanguage}`;
  
  if (humanizationCache.has(cacheKey)) {
    return humanizationCache.get(cacheKey)!;
  }

  let attempts = 0;
  const maxAttempts = 2;

  while (attempts < maxAttempts) {
    try {
      const requestBody = {
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: 'system',
            content: getHumanizeSystemPromptByLanguage(options, detectedLanguage)
          },
          {
            role: 'user',
            content: getHumanizeUserPromptByLanguage(text, detectedLanguage)
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      };

      console.log('Humanize Request Body:', requestBody);

      const response = await customFetch('/chat/completions', {
        method: 'POST',
        body: JSON.stringify(requestBody)
      });

      const humanizedText = response.choices[0].message.content || text;
      console.log('Humanize API Response Content:', humanizedText);

      humanizationCache.set(cacheKey, humanizedText);
      return humanizedText;

    } catch (error: any) {
      attempts++;
      console.error(`人性化处理尝试${attempts}/${maxAttempts}失败:`, {
        error: error.message,
        attempt: attempts,
        maxAttempts,
        stack: error.stack
      });

      if (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  throw new Error('人性化处理服务暂时不可用');
}; 