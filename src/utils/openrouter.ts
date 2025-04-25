import axios from 'axios';

// 定义API响应类型
interface AIDetectionResponse {
  score: number;
  confidence: number;
}

interface HumanizationResponse {
  humanized_text: string;
}

/**
 * 检测文本的AI生成概率
 * @param text 需要检测的文本
 * @returns 包含AI检测分数的Promise
 */
export async function detectAIContent(text: string): Promise<AIDetectionResponse> {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/detect',
      { text },
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('AI检测失败:', error);
    throw new Error('AI检测服务暂时不可用');
  }
}

/**
 * 对AI生成的内容进行人性化处理
 * @param text 需要人性化的文本
 * @param intensity 人性化强度 (0.0 - 1.0)
 * @param language 目标语言 (如 'zh', 'en')
 * @param style 文本风格 (如 'academic', 'casual')
 * @returns 人性化后的文本Promise
 */
export async function humanizeAIContent(
  text: string, 
  intensity: number = 0.7,
  language: string = 'en',
  style: string = 'casual'
): Promise<string> {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/humanize',
      { 
        text,
        intensity,
        language,
        style
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );
    
    const data = response.data as HumanizationResponse;
    return data.humanized_text;
  } catch (error) {
    console.error('内容人性化处理失败:', error);
    throw new Error('内容人性化服务暂时不可用');
  }
} 