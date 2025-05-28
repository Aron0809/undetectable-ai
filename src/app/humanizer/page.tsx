'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Settings, 
  Zap, 
  FileText, 
  Brain, 
  Target, 
  CheckCircle, 
  AlertCircle,
  Copy,
  Download,
  RotateCcw
} from 'lucide-react';

// 定义可用语言选项
const languages = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
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

export default function Humanizer() {
  const user = null; // 默认没有用户登录
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [originalWordCount, setOriginalWordCount] = useState(0);
  const [humanizedWordCount, setHumanizedWordCount] = useState(0);
  const [humanizeLevel, setHumanizeLevel] = useState(50);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [preserveFormatting, setPreserveFormatting] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiDetectionRate, setAiDetectionRate] = useState<number | null>(null);
  const [isInputAnalyzed, setIsInputAnalyzed] = useState(false);
  const [error, setError] = useState('');

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
      const response = await axios.post('/api/content/detect', {
        text: inputText,
        language: selectedLanguage
      });
      
      if (response.data.success && response.data.data) {
        setAiDetectionRate(response.data.data.score);
        setIsInputAnalyzed(true);
      } else {
        throw new Error('Invalid response from API');
      }
    } catch (err) {
      console.error('Analysis error:', err);
      setError('Content analysis failed, please try again later');
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
      const response = await axios.post('/api/content/humanize', {
        text: inputText,
        options: {
          intensity,
          retainMeaning: preserveFormatting,
          style: selectedStyle,
          language: selectedLanguage
        }
      });
      
      if (response.data.success && response.data.data) {
        setOutputText(response.data.data.humanizedText);
        setHumanizedWordCount(response.data.data.humanizedText.trim().split(/\s+/).length);
      } else {
        throw new Error('Invalid response from API');
      }
      
    } catch (err) {
      console.error('Humanization error:', err);
      setError('Content humanization failed, please try again later');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([outputText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'humanized_content.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getHumanizationLabel = () => {
    if (humanizeLevel < 30) return 'Light Humanization';
    if (humanizeLevel < 70) return 'Medium Humanization';
    return 'Deep Humanization';
  };

  const getHumanizationDescription = () => {
    if (humanizeLevel < 30) return 'Minor text adjustments, preserve original structure';
    if (humanizeLevel < 70) return 'Balance between preserving meaning and human style';
    return 'Complete rewrite, maximum human-like simulation';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Content Humanizer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform AI-generated content into natural, human-like text that bypasses detection tools. 
              Customize humanization levels and writing styles for perfect results.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Analysis Section */}
            {isInputAnalyzed && aiDetectionRate !== null && (
              <div className="mb-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Target className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold">Current AI Detection Rate</h3>
                        <p className="text-gray-600">Analysis of your input content</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${
                        aiDetectionRate > 70 ? 'text-red-600' : 
                        aiDetectionRate > 40 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {aiDetectionRate.toFixed(1)}%
                      </div>
                      <p className="text-sm text-gray-500">AI Probability</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          aiDetectionRate > 70 ? 'bg-red-600' : 
                          aiDetectionRate > 40 ? 'bg-yellow-600' : 'bg-green-600'
                        }`}
                        style={{ width: `${aiDetectionRate}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {aiDetectionRate > 80 
                        ? 'Your text is easily identified as AI-generated content.'
                        : aiDetectionRate > 50 
                          ? 'Your text has noticeable AI characteristics.'
                          : 'Your text is already quite natural.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold">Input Content</h2>
                  </div>
                  
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your AI-generated content here for humanization (minimum 50 characters recommended)..."
                    className="w-full h-80 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-gray-500">
                      {originalWordCount} words
                      {originalWordCount < 50 && originalWordCount > 0 && (
                        <span className="text-orange-500 ml-2">
                          (Minimum 50 characters recommended)
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={analyzeInput}
                        disabled={isAnalyzing || inputText.length < 20}
                        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          isAnalyzing || inputText.length < 20
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {isAnalyzing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Analyzing...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Target className="h-4 w-4 mr-2" />
                            Analyze Text
                          </div>
                        )}
                      </button>
                      <button
                        onClick={handleHumanize}
                        disabled={isProcessing || inputText.length < 20}
                        className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          isProcessing || inputText.length < 20
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        }`}
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Processing...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Zap className="h-5 w-5 mr-2" />
                            Humanize Content
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-red-700">{error}</span>
                      </div>
                    </div>
                  )}

                  {!user && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> Free users can humanize content 3 times per day, with a maximum of 2000 characters each time.
                        <a href="/login" className="text-blue-600 hover:text-blue-700 ml-1">Login</a> or 
                        <a href="/signup" className="text-blue-600 hover:text-blue-700 ml-1">register</a> to unlock more usage.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Settings Panel */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-6">
                    <Settings className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-xl font-bold">Humanization Settings</h2>
                  </div>
                  
                  {/* Humanization Strength */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-3">
                      Humanization Strength
                    </label>
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-500 w-12">Low</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={humanizeLevel}
                        onChange={(e) => setHumanizeLevel(parseInt(e.target.value))}
                        className="flex-grow mx-3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm text-gray-500 w-12">High</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="font-medium text-blue-600 mb-1">
                        {getHumanizationLabel()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {getHumanizationDescription()}
                      </div>
                    </div>
                  </div>
                  
                  {/* Language Selection */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Language
                    </label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {languages.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                          {lang.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Style Selection */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Writing Style
                    </label>
                    <select
                      value={selectedStyle}
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {styles.map((style) => (
                        <option key={style.value} value={style.value}>
                          {style.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Preserve Meaning Toggle */}
                  <div className="mb-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preserveFormatting}
                        onChange={(e) => setPreserveFormatting(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer ${
                        preserveFormatting ? 'bg-blue-600' : ''
                      }`}>
                        <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition ${
                          preserveFormatting ? 'translate-x-full border-white' : ''
                        }`}></div>
                      </div>
                      <span className="ml-3 text-gray-700 font-medium">
                        Preserve original meaning and structure
                      </span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      Enable this option to retain key information and meaning during humanization
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Section */}
            {outputText && (
              <div className="mt-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                      <h2 className="text-2xl font-bold">Humanized Content</h2>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={copyToClipboard}
                        className="px-4 py-2 rounded-xl font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-300 flex items-center"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </button>
                      <button
                        onClick={downloadText}
                        className="px-4 py-2 rounded-xl font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-300 flex items-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {outputText}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {humanizedWordCount} words • Content successfully humanized
                    </div>
                    <button
                      onClick={() => {
                        setOutputText('');
                        setInputText('');
                        setAiDetectionRate(null);
                        setIsInputAnalyzed(false);
                      }}
                      className="px-6 py-3 rounded-xl font-medium bg-blue-100 hover:bg-blue-200 text-blue-800 transition-colors duration-300 flex items-center"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Start New Humanization
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How Our Humanizer Works
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Content Analysis</h3>
                <p className="text-gray-600">
                  The system analyzes the structure, language patterns, and key information of AI-generated content.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Feature Transformation</h3>
                <p className="text-gray-600">
                  Identifies and changes typical AI characteristics such as excessive coherence, repetitive patterns, and lack of personalized expression.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Human Style Injection</h3>
                <p className="text-gray-600">
                  Adds natural language variations, personalized expressions, and subtle irregularities common in human writing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Ensures that the converted content maintains its original meaning while being able to pass through mainstream AI detectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 