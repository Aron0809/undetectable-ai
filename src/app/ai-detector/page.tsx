'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle, CheckCircle, Zap, Brain, Target, Clock } from 'lucide-react';

// 支持的语言选项
const languages = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
];

export default function AIDetector() {
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [result, setResult] = useState<{
    score: number;
    humanPercent: number;
    aiPercent: number;
    analysis: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  // 处理AI内容检测
  const handleDetection = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setError('');
    
    try {
      const response = await axios.post('/api/content/detect', {
        text: inputText,
        language: selectedLanguage
      });
      
      if (response.data.success && response.data.data) {
        const data = response.data.data;
        setResult({
          score: data.score,
          humanPercent: 100 - data.score,
          aiPercent: data.score,
          analysis: data.analysis
        });
      } else {
        throw new Error('Invalid response from API');
      }
    } catch (err) {
      console.error('Detection error:', err);
      setError('Content detection failed, please try again later.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getResultColor = (score: number) => {
    if (score >= 70) return 'text-red-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getResultMessage = (score: number) => {
    if (score >= 70) return 'This text is likely AI-generated.';
    if (score >= 40) return 'This text may contain some AI-generated content.';
    return 'This text appears to be human-written.';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Content Detector
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detect if your content is AI-generated with our advanced detection technology. 
              Get detailed analysis and confidence scores in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Language Selection */}
            <div className="mb-8 text-center">
              <label className="block text-gray-700 font-semibold mb-4 text-lg">
                Select Language
              </label>
              <div className="flex flex-wrap justify-center gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedLanguage === lang.value
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                    }`}
                    onClick={() => setSelectedLanguage(lang.value)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <Brain className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold">Input Text</h2>
                </div>
                
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste the text you want to analyze for AI detection (minimum 100 characters recommended)..."
                  className="w-full h-80 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-gray-500">
                    {inputText.length} characters
                    {inputText.length < 100 && inputText.length > 0 && (
                      <span className="text-orange-500 ml-2">
                        (Minimum 100 characters recommended for accurate detection)
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleDetection}
                    disabled={isAnalyzing || inputText.length < 10}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isAnalyzing || inputText.length < 10
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    }`}
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Zap className="h-5 w-5 mr-2" />
                        Detect AI Content
                      </div>
                    )}
                  </button>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-red-700">{error}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold">Detection Results</h2>
                </div>

                {result ? (
                  <div className="space-y-6">
                    {/* Score Display */}
                    <div className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className={`text-4xl font-bold mb-2 ${getResultColor(result.aiPercent)}`}>
                        {result.aiPercent.toFixed(1)}%
                      </div>
                      <div className="text-lg text-gray-600 mb-4">AI Probability</div>
                      <div className={`text-lg font-medium ${getResultColor(result.aiPercent)}`}>
                        {getResultMessage(result.aiPercent)}
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium">Human Score</span>
                        </div>
                        <span className="text-xl font-bold text-green-600">
                          {result.humanPercent.toFixed(1)}%
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                        <div className="flex items-center">
                          <Brain className="h-5 w-5 text-red-600 mr-2" />
                          <span className="font-medium">AI Score</span>
                        </div>
                        <span className="text-xl font-bold text-red-600">
                          {result.aiPercent.toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    {/* Analysis */}
                    {result.analysis && (
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-semibold mb-2 text-blue-900">Detailed Analysis</h4>
                        <p className="text-blue-800">{result.analysis}</p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          setResult(null);
                          setInputText('');
                        }}
                        className="flex-1 py-3 px-4 rounded-xl font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors duration-300"
                      >
                        Reset & Test Again
                      </button>
                      <a
                        href="/humanizer"
                        className="flex-1 py-3 px-4 rounded-xl font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 text-center"
                      >
                        Humanize This Text
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      Enter text and click "Detect AI Content" to see analysis results
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How Our AI Detector Works
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Content Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your text for patterns, structures, and characteristics typical of AI-generated content.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Feature Recognition</h3>
                <p className="text-gray-600">
                  Advanced algorithms identify vocabulary patterns, sentence structures, and writing styles that distinguish AI from human text.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Score Calculation</h3>
                <p className="text-gray-600">
                  Based on detected features, we calculate a 0-100% probability score indicating how likely the text is AI-generated.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Results</h3>
                <p className="text-gray-600">
                  Get detailed analysis reports with confidence scores and actionable insights within seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">💡 Pro Tip</h2>
              <p className="text-gray-700 text-center text-lg leading-relaxed">
                If your content is detected as AI-generated, use our{' '}
                <a href="/humanizer" className="text-blue-600 hover:text-blue-700 font-semibold">
                  AI Content Humanizer
                </a>{' '}
                to make it more human-like and bypass detection tools.
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-xl text-center">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Free users can perform 3 AI detections per day. 
                  <a href="/login" className="text-blue-600 hover:text-blue-700 ml-1">Login</a> or 
                  <a href="/signup" className="text-blue-600 hover:text-blue-700 ml-1">register</a> to unlock more features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 