import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  
  // FAQ数据
  const faqItems: FaqItem[] = [
    {
      id: 'what-is-ai-detection',
      question: '什么是AI检测？',
      answer: 'AI检测是使用专门设计的算法来分析文本，确定其是否由人工智能（如ChatGPT、Claude等）生成的过程。这些检测器寻找AI生成文本中的特定模式、词汇使用习惯和结构特征，这些特征通常在人类撰写的内容中较为罕见。',
      category: 'general'
    },
    {
      id: 'how-does-humanizer-work',
      question: 'Undetectable.AI的人性化工具是如何工作的？',
      answer: '我们的AI内容人性化工具使用先进的自然语言处理技术，分析AI生成的内容并重写它，同时保留原始含义。该过程添加了更多的人类写作特征，如自然的变化、不规则性和特定风格的元素，使内容更难被AI检测器识别。',
      category: 'humanizer'
    },
    {
      id: 'bypass-rate',
      question: '人性化后的内容能够绕过多少AI检测器？',
      answer: '我们的人性化技术能够成功绕过市场上几乎所有主流AI检测器，包括GPTZero、Originality.ai、Turnitin、Content at Scale等。当使用最高人性化设置时，我们的绕过率通常在95%以上。',
      category: 'humanizer'
    },
    {
      id: 'content-meaning',
      question: '人性化过程会改变原始内容的含义吗？',
      answer: '不会。我们的人性化工具被设计为保留原始内容的核心含义和关键信息，同时仅改变表达方式。该系统理解内容的语义，并确保重写后的版本传达相同的信息和观点。',
      category: 'humanizer'
    },
    {
      id: 'detection-accuracy',
      question: '您的AI检测器的准确率如何？',
      answer: '我们的AI检测器经过大量训练数据的优化，能够准确识别来自各种主流AI模型生成的内容。在最新的测试中，我们的检测准确率达到了95%以上，对于特定类型的AI生成内容甚至更高。',
      category: 'detector'
    },
    {
      id: 'use-cases',
      question: '谁会使用Undetectable.AI的服务？',
      answer: '我们的服务被各种用户使用，包括内容创作者、学生、教育工作者、营销专业人员和企业。他们使用我们的工具来确保AI辅助内容更具原创性、更自然，并符合他们特定的风格和需求。',
      category: 'general'
    },
    {
      id: 'pricing-model',
      question: '您的定价模式是怎样的？',
      answer: '我们提供多种定价计划，从免费的基础版到功能全面的企业版。定价基于处理的内容量和需要的高级功能。我们建议查看我们的定价页面了解具体详情，或联系我们的销售团队获取定制方案。',
      category: 'billing'
    },
    {
      id: 'api-access',
      question: '您提供API访问吗？',
      answer: '是的，我们为专业版和企业版用户提供API访问。通过我们的API，您可以将我们的人性化和检测功能直接集成到您的工作流程或应用程序中。我们提供详细的API文档和技术支持，帮助您顺利实现集成。',
      category: 'technical'
    },
    {
      id: 'data-privacy',
      question: '您如何处理用户提交的内容？',
      answer: '我们非常重视用户隐私。默认情况下，我们不会存储用户提交的内容。所有处理都在安全的环境中进行，一旦处理完成，内容会立即从我们的系统中删除。我们也不会将您的内容用于训练我们的模型。',
      category: 'privacy'
    },
    {
      id: 'refund-policy',
      question: '您的退款政策是什么？',
      answer: '我们提供7天无条件退款保证。如果您对我们的服务不满意，可以在购买后7天内申请全额退款。对于特定情况，如技术问题或服务中断，我们也可能提供部分退款或服务补偿。',
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
    all: '所有问题',
    general: '一般问题',
    humanizer: '人性化工具',
    detector: 'AI检测器',
    billing: '账单与定价',
    technical: '技术问题',
    privacy: '隐私与安全'
  };

  return (
    <Layout
      title="常见问题 | Undetectable.AI"
      description="浏览Undetectable.AI的常见问题解答，了解我们的AI内容人性化和检测服务的详细信息。"
    >
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">常见问题</h1>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              浏览我们最常见的问题和详细解答，如果您没有找到需要的信息，请随时联系我们。
            </p>
            
            {/* 类别选择器 */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                所有问题
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
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
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <span className={`transform transition-transform duration-300 ${
                      activeQuestionId === faq.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  {activeQuestionId === faq.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* 未找到答案 */}
            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">没有找到您需要的答案？</h2>
              <p className="text-gray-600 mb-6">
                如果您有其他问题或需要更详细的信息，请随时联系我们的支持团队。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
                >
                  联系我们
                </a>
                <a 
                  href="mailto:support@undetectable.ai" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold transition duration-300"
                >
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 