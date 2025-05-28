import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  
  // FAQ数据 - 与首页完全一致
  const faqItems: FaqItem[] = [
    {
      id: 'what-is-ai-humanization',
      question: 'What is AI content humanization?',
      answer: 'AI content humanization is the process of converting AI-generated text into natural, human-like writing that can bypass AI detection tools. Our advanced algorithms analyze and rewrite content while preserving the original meaning, making it appear as if it was written by a human.',
      category: 'general'
    },
    {
      id: 'why-choose-undetectable',
      question: 'Why choose Undetectable AI over other tools?',
      answer: 'Undetectable AI stands out with its 99.8% bypass rate, support for 25+ languages, and advanced AI models. We offer both detection and humanization in one platform, with lightning-fast processing and quality assurance that maintains your content\'s original meaning.',
      category: 'general'
    },
    {
      id: 'quality-guarantee',
      question: 'How do you ensure the quality of humanized content?',
      answer: 'Our AI uses advanced natural language processing to maintain the original meaning, tone, and context while making stylistic changes. We employ multiple quality checks and use state-of-the-art language models to ensure the output is coherent, grammatically correct, and contextually appropriate.',
      category: 'humanizer'
    },
    {
      id: 'content-types-languages',
      question: 'What types of content and languages do you support?',
      answer: 'We support all types of text content including essays, articles, blog posts, academic papers, and creative writing. Our platform works with 25+ languages including English, Spanish, French, German, Chinese, and many more. The quality is consistently high across all supported languages.',
      category: 'technical'
    },
    {
      id: 'how-to-use',
      question: 'How do I use your service?',
      answer: 'Using our service is simple: 1) Paste your AI-generated content into our editor, 2) Choose your humanization level and style preferences, 3) Click "Humanize" and get your processed content in seconds. You can also use our AI detector first to check if your content needs humanization.',
      category: 'general'
    },
    {
      id: 'pricing-payment',
      question: 'What are your pricing and payment options?',
      answer: 'We offer a free plan with 3 daily detections and 2 humanizations. Our Monthly Pro plan is $9/month with 50 daily detections and 100 humanizations. The Annual Pro plan is $99/year with unlimited usage. We accept all major credit cards and PayPal.',
      category: 'billing'
    }
  ];
  
  // 提取所有类别
  const categories = Array.from(new Set(faqItems.map(item => item.category)));
  
  // 根据当前选择的类别过滤FAQ项
  const filteredFaqs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  // 切换问题展开/折叠状态
  const toggleQuestion = (id: string) => {
    if (activeQuestionId === id) {
      setActiveQuestionId(null);
    } else {
      setActiveQuestionId(id);
    }
  };
  
  // 类别名称映射
  const categoryNames = {
    all: 'All Questions',
    general: 'General',
    humanizer: 'Humanization',
    detector: 'AI Detection',
    billing: 'Billing & Pricing',
    technical: 'Technical',
    privacy: 'Privacy & Security'
  };

  return (
    <Layout
      title="Frequently Asked Questions | Undetectable.AI"
      description="Find answers to common questions about Undetectable AI's content humanization and AI detection services. Get help with pricing, features, and how to use our tools."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to the most common questions about our AI detection and humanization tools. 
                Can't find what you're looking for? Contact our support team.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* 类别选择器 */}
              <div className="mb-12 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === 'all'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  All Questions
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                    }`}
                  >
                    {categoryNames[category as keyof typeof categoryNames]}
                  </button>
                ))}
              </div>
              
              {/* FAQ列表 */}
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div 
                    key={faq.id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.id)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
                      <span className={`transform transition-transform duration-300 flex-shrink-0 ${
                        activeQuestionId === faq.id ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className="h-6 w-6 text-gray-500" />
                      </span>
                    </button>
                    
                    {activeQuestionId === faq.id && (
                      <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our support team is here to help you with any questions about our AI detection and humanization tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="mailto:support@undetectable.ai" 
                    className="inline-block bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold transition duration-300 border-2 border-gray-200 hover:border-gray-300"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 