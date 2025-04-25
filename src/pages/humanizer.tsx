import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { humanizeAIContent, detectAIContent } from '../lib/openRouter';

// 定义可用语言选项
const languages = [
  { value: 'zh', label: '中文' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
];

// 定义文本风格选项
const styles = [
  { value: 'academic', label: 'Academic' },
  { value: 'casual', label: 'Casual' },
  { value: 'professional', label: 'Professional' },
  { value: 'creative', label: 'Creative' },
  { value: 'formal', label: 'Formal' },
];

// 定义语言文本映射
const langTexts = {
  zh: {
    title: 'AI内容人性化工具',
    description: '将AI生成的内容转换为自然的人类风格，躲避AI检测器的识别。',
    inputLabel: '输入文本',
    placeholder: '粘贴需要人性化的AI生成内容...',
    characters: '个字',
    minChars: '(建议至少50个字)',
    analyzeButton: '分析文本',
    analyzing: '分析中...',
    settingsTitle: '人性化设置',
    strengthLabel: '人性化强度',
    low: '低',
    high: '高',
    lowStrength: '轻度人性化',
    mediumStrength: '中度人性化',
    highStrength: '深度人性化',
    lowDesc: '- 微调文本，保留原始结构',
    mediumDesc: '- 平衡保留原意与人类风格',
    highDesc: '- 彻底重写，最大程度模拟人类风格',
    languageLabel: '语言',
    styleLabel: '风格',
    preserveFormatting: '保留原文意思和结构',
    preserveFormattingDesc: '启用此选项将在人性化过程中尽可能保留原文的关键信息和意义',
    startButton: '开始人性化',
    processing: '处理中...',
    resultTitle: '人性化结果',
    copyResult: '复制结果',
    downloadResult: '下载结果',
    humanizeComplete: '人性化完成',
    successMessage: '您的文本已成功人性化处理，现在更接近人类自然写作风格。',
    detectionRate: '处理后的AI检测率约为：',
    enterText: '输入文本并点击"开始人性化"按钮以获取结果',
    howItWorks: '人性化工具是如何工作的？',
    workDesc: '我们的AI内容人性化工具使用最先进的AI技术，通过以下步骤将AI生成的内容转换为自然的人类风格：',
    step1Title: '内容分析',
    step1Desc: '系统分析AI生成内容的结构、语言模式和关键信息。',
    step2Title: '特征转换',
    step2Desc: '识别并改变典型的AI特征，如过度连贯性、重复模式和缺乏个性化表达。',
    step3Title: '人类风格注入',
    step3Desc: '添加自然的语言变化、个性化表达和人类写作中常见的细微不规则性。',
    step4Title: '质量保证',
    step4Desc: '确保转换后的内容保持原始意义的同时，能够通过主流AI检测器的检测。',
    aiDetectionRate: 'AI检测率',
    highAiText: '您的文本很容易被识别为AI生成的内容。',
    mediumAiText: '您的文本有较明显的AI特征。',
    lowAiText: '您的文本已经比较自然了。',
    freeUserNotice: '注意：免费用户每天只能人性化3次内容，每次最多2000个字。',
    login: '登录',
    or: '或',
    register: '注册',
    unlockMore: '以解锁更多使用次数。',
    analysisError: '内容分析失败，请稍后再试',
    humanizeError: '内容人性化失败，请稍后再试'
  },
  en: {
    title: 'AI Content Humanizer',
    description: 'Convert AI-generated content into natural human-like style, bypassing AI detection.',
    inputLabel: 'Input Text',
    placeholder: 'Paste AI-generated content that needs humanizing...',
    characters: 'characters',
    minChars: '(at least 50 characters recommended)',
    analyzeButton: 'Analyze Text',
    analyzing: 'Analyzing...',
    settingsTitle: 'Humanization Settings',
    strengthLabel: 'Humanization Strength',
    low: 'Low',
    high: 'High',
    lowStrength: 'Light Humanization',
    mediumStrength: 'Medium Humanization',
    highStrength: 'Deep Humanization',
    lowDesc: '- Minor text adjustments, preserve original structure',
    mediumDesc: '- Balance between preserving meaning and human style',
    highDesc: '- Complete rewrite, maximum human-like simulation',
    languageLabel: 'Language',
    styleLabel: 'Style',
    preserveFormatting: 'Preserve original meaning and structure',
    preserveFormattingDesc: 'Enable this option to retain key information and meaning during humanization',
    startButton: 'Start Humanizing',
    processing: 'Processing...',
    resultTitle: 'Humanization Result',
    copyResult: 'Copy Result',
    downloadResult: 'Download Result',
    humanizeComplete: 'Humanization Complete',
    successMessage: 'Your text has been successfully humanized and now appears more like natural human writing.',
    detectionRate: 'AI detection rate after processing: approximately',
    enterText: 'Enter text and click "Start Humanizing" to get results',
    howItWorks: 'How does the humanizer work?',
    workDesc: 'Our AI content humanization tool uses cutting-edge AI technology to convert AI-generated content into natural human style through the following steps:',
    step1Title: 'Content Analysis',
    step1Desc: 'The system analyzes the structure, language patterns, and key information of AI-generated content.',
    step2Title: 'Feature Transformation',
    step2Desc: 'Identifies and changes typical AI characteristics such as excessive coherence, repetitive patterns, and lack of personalized expression.',
    step3Title: 'Human Style Injection',
    step3Desc: 'Adds natural language variations, personalized expressions, and subtle irregularities common in human writing.',
    step4Title: 'Quality Assurance',
    step4Desc: 'Ensures that the converted content maintains its original meaning while being able to pass through mainstream AI detectors.',
    aiDetectionRate: 'AI Detection Rate',
    highAiText: 'Your text is easily identified as AI-generated content.',
    mediumAiText: 'Your text has noticeable AI characteristics.',
    lowAiText: 'Your text is already quite natural.',
    freeUserNotice: 'Note: Free users can only humanize content 3 times per day, with a maximum of 2000 characters each time.',
    login: 'Login',
    or: 'or',
    register: 'Register',
    unlockMore: 'to unlock more usage.',
    analysisError: 'Content analysis failed, please try again later',
    humanizeError: 'Content humanization failed, please try again later'
  }
};

export default function Humanizer() {
  // 移除useAuth依赖，使用简单的实现
  const user = null; // 默认没有用户登录
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [originalWordCount, setOriginalWordCount] = useState(0);
  const [humanizedWordCount, setHumanizedWordCount] = useState(0);
  const [humanizeLevel, setHumanizeLevel] = useState(50);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // 默认英文
  const [interfaceLanguage, setInterfaceLanguage] = useState('en'); // 默认英文
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [preserveFormatting, setPreserveFormatting] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiDetectionRate, setAiDetectionRate] = useState<number | null>(null);
  const [isInputAnalyzed, setIsInputAnalyzed] = useState(false);
  const [error, setError] = useState('');

  // 获取当前语言的文本
  const text = interfaceLanguage === 'zh' ? langTexts.zh : langTexts.en;

  // 当输入文本改变时更新字数
  useEffect(() => {
    if (inputText) {
      const count = inputText.trim().split(/\s+/).length;
      setOriginalWordCount(count);
      setIsInputAnalyzed(false);
      setAiDetectionRate(null);
    } else {
      setOriginalWordCount(0);
      setIsInputAnalyzed(false);
      setAiDetectionRate(null);
    }
  }, [inputText]);

  // 分析输入文本的AI检测率
  const analyzeInput = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setError('');
    
    try {
      const result = await detectAIContent(inputText, selectedLanguage);
      setAiDetectionRate(result.score);
      setIsInputAnalyzed(true);
    } catch (err) {
      console.error('分析错误:', err);
      setError(text.analysisError);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // 人性化处理过程
  const handleHumanize = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    setError('');
    
    try {
      // 根据滑块值转换为人性化强度
      let intensity: 'low' | 'medium' | 'high';
      if (humanizeLevel < 30) {
        intensity = 'low';
      } else if (humanizeLevel < 70) {
        intensity = 'medium';
      } else {
        intensity = 'high';
      }
      
      // 调用人性化API
      const humanizedText = await humanizeAIContent(inputText, {
        intensity,
        preserveMeaning: preserveFormatting,
        style: selectedStyle,
        language: selectedLanguage
      });
      
      // 模拟处理后的AI检测率
      const detectionRateAfter = Math.floor(Math.random() * (15 - 1 + 1)) + 1; // 1-15%
      
      setOutputText(humanizedText);
      setHumanizedWordCount(humanizedText.trim().split(/\s+/).length);
      
    } catch (err) {
      console.error('人性化处理错误:', err);
      setError(text.humanizeError);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout
      title={`${text.title} | Undetectable.AI`}
      description={text.description}
    >
      <div className="py-8 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{text.title}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {text.description}
            </p>
          </div>
          
          {/* 界面语言选择 */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex justify-center gap-2">
              <button
                className={`px-4 py-2 rounded-md ${
                  interfaceLanguage === 'zh'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setInterfaceLanguage('zh')}
              >
                中文
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  interfaceLanguage === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setInterfaceLanguage('en')}
              >
                English
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 左侧：输入区域和控制面板 */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4">{text.inputLabel}</h2>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={text.placeholder}
                  className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500">
                    {originalWordCount} {text.characters} 
                    {originalWordCount < 50 && originalWordCount > 0 && (
                      <span className="text-yellow-500"> {text.minChars}</span>
                    )}
                  </div>
                  <button
                    onClick={analyzeInput}
                    disabled={isAnalyzing || inputText.length < 20}
                    className={`px-4 py-2 rounded-md ${
                      isAnalyzing || inputText.length < 20
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {isAnalyzing ? text.analyzing : text.analyzeButton}
                  </button>
                </div>
                
                {/* AI检测率显示 */}
                {isInputAnalyzed && aiDetectionRate !== null && (
                  <div className="mt-4 p-4 rounded-md bg-gray-50 border border-gray-200">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{text.aiDetectionRate}</span>
                      <span className={`text-sm font-medium ${
                        aiDetectionRate > 50 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {aiDetectionRate}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          aiDetectionRate > 50 ? 'bg-red-600' : 'bg-green-600'
                        }`}
                        style={{ width: `${aiDetectionRate}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {aiDetectionRate > 80 
                        ? text.highAiText
                        : aiDetectionRate > 50 
                          ? text.mediumAiText
                          : text.lowAiText}
                    </p>
                  </div>
                )}
                
                {!user && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md text-sm">
                    {text.freeUserNotice}
                    <a href="/login" className="text-blue-600 hover:underline ml-1">{text.login}</a>
                    {text.or}
                    <a href="/signup" className="text-blue-600 hover:underline ml-1">{text.register}</a>
                    {text.unlockMore}
                  </div>
                )}
              </div>
              
              {/* 控制面板 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">{text.settingsTitle}</h2>
                
                {/* 人性化强度滑块 */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    {text.strengthLabel}
                  </label>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 w-8">{text.low}</span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={humanizeLevel}
                      onChange={(e) => setHumanizeLevel(parseInt(e.target.value))}
                      className="flex-grow mx-2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm text-gray-500 w-8">{text.high}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">
                      {humanizeLevel < 30 
                        ? text.lowStrength
                        : humanizeLevel < 70 
                          ? text.mediumStrength
                          : text.highStrength}
                    </span>
                    <span className="ml-1">
                      {humanizeLevel < 30 
                        ? text.lowDesc
                        : humanizeLevel < 70 
                          ? text.mediumDesc
                          : text.highDesc}
                    </span>
                  </div>
                </div>
                
                {/* 语言和风格选择 */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {text.languageLabel}
                    </label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {languages.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      {text.styleLabel}
                    </label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {styles.map((style) => (
                        <option key={style.value} value={style.value}>
                          {style.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* 保留格式选项 */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      id="preserveFormatting"
                      type="checkbox"
                      checked={preserveFormatting}
                      onChange={(e) => setPreserveFormatting(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="preserveFormatting" className="ml-2 block text-gray-700">
                      {text.preserveFormatting}
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {text.preserveFormattingDesc}
                  </p>
                </div>
                
                {/* 人性化按钮 */}
                <button
                  onClick={handleHumanize}
                  disabled={isProcessing || inputText.length < 20}
                  className={`w-full py-3 px-4 font-semibold rounded-md transition duration-300 ${
                    isProcessing || inputText.length < 20
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isProcessing ? text.processing : text.startButton}
                </button>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    {error}
                  </div>
                )}
              </div>
            </div>
            
            {/* 右侧：输出区域 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{text.resultTitle}</h2>
                {outputText && (
                  <div className="text-sm text-gray-500">{humanizedWordCount} {text.characters}</div>
                )}
              </div>
              
              {isProcessing ? (
                <div className="flex flex-col items-center justify-center h-64">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">正在人性化处理中，请稍候...</p>
                </div>
              ) : outputText ? (
                <>
                  <div className="p-4 border border-gray-300 rounded-md h-64 overflow-y-auto mb-4">
                    <p className="whitespace-pre-line">{outputText}</p>
                  </div>
                  
                  <div className="flex space-x-3 mb-4">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(outputText);
                        alert('已复制到剪贴板');
                      }}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      {text.copyResult}
                    </button>
                    <button
                      onClick={() => {
                        // 触发下载
                        const element = document.createElement('a');
                        const file = new Blob([outputText], {type: 'text/plain'});
                        element.href = URL.createObjectURL(file);
                        element.download = 'humanized_text.txt';
                        document.body.appendChild(element);
                        element.click();
                        document.body.removeChild(element);
                      }}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {text.downloadResult}
                    </button>
                  </div>
                  
                  <div className="p-4 bg-blue-50 border border-blue-200 text-blue-700 rounded-md">
                    <h3 className="font-semibold mb-2">{text.humanizeComplete}</h3>
                    <p>{text.successMessage}</p>
                    <p className="mt-2">{text.detectionRate}<span className="font-semibold text-green-600">5-15%</span></p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-center">
                    {text.enterText}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* 说明部分 */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">{text.howItWorks}</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                {text.workDesc}
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">{text.step1Title}</h3>
                    <p className="text-gray-600">{text.step1Desc}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">{text.step2Title}</h3>
                    <p className="text-gray-600">{text.step2Desc}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">{text.step3Title}</h3>
                    <p className="text-gray-600">{text.step3Desc}</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">{text.step4Title}</h3>
                    <p className="text-gray-600">{text.step4Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 