import React from 'react';
import Layout from '../components/layout/Layout';

export default function HowItWorks() {
  return (
    <Layout
      title="AI内容人性化工具的工作原理 | Undetectable.AI"
      description="了解Undetectable.AI的AI内容人性化工具如何让AI生成的内容通过检测器并保持自然流畅。"
    >
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              AI内容人性化工具的工作原理
            </h1>
            
            {/* 顶部介绍 */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Undetectable.AI 使用先进的人工智能技术，将AI生成的内容转换为无法被AI检测器识别的自然流畅文本。我们的工具不仅仅是简单替换单词或句子结构，而是深入理解内容语义，保留原意的同时，改变关键AI特征。
              </p>
              <p className="text-lg text-gray-700">
                以下是我们的AI人性化工具如何工作的详细介绍。
              </p>
            </div>
            
            {/* 工作流程部分 */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              人性化过程的四个步骤
            </h2>
            
            <div className="space-y-12">
              {/* 步骤1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="bg-blue-600 h-40 w-full rounded-lg flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">01</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">内容分析与理解</h3>
                  <p className="text-gray-700">
                    我们的AI首先分析输入的内容，理解其语义结构、关键信息点和写作意图。与简单替换工具不同，我们的系统深入理解内容的实际含义，确保处理后的文本保留原始信息。
                  </p>
                </div>
              </div>
              
              {/* 步骤2 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="bg-purple-600 h-40 w-full rounded-lg flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">02</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">识别AI特征模式</h3>
                  <p className="text-gray-700">
                    系统识别常见的AI生成文本特征，这些特征通常被检测器用来判断内容是否由AI生成。这包括词汇选择、句子结构、过度连贯性和反复出现的短语模式等。
                  </p>
                </div>
              </div>
              
              {/* 步骤3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="bg-green-600 h-40 w-full rounded-lg flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">03</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">人性化转换</h3>
                  <p className="text-gray-700">
                    使用我们专有的语言模型，系统重写内容以减少AI特征，同时增加人类写作的独特性。这包括引入自然不规则性、多样化的表达方式、适当的习语使用，以及更接近人类认知的逻辑跳跃。
                  </p>
                </div>
              </div>
              
              {/* 步骤4 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="bg-yellow-500 h-40 w-full rounded-lg flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">04</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">质量保证与检测测试</h3>
                  <p className="text-gray-700">
                    处理后的内容会通过我们内部的AI检测模拟器进行测试，确保它能够绕过流行的AI检测工具。同时，我们的系统会检查内容的可读性、流畅性和原始内容的保留程度。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 技术优势部分 */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                我们的技术优势
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">深度语义理解</h3>
                  <p className="text-gray-700">
                    不同于表面级别的文本修改，我们的系统理解内容的深层含义，确保处理后的文本保持一致的主题和论点。
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">持续更新的检测绕过</h3>
                  <p className="text-gray-700">
                    我们的团队持续监测最新的AI检测技术，并不断更新我们的人性化算法，确保它始终能够绕过最新的检测方法。
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">可定制的人性化程度</h3>
                  <p className="text-gray-700">
                    用户可以根据需要调整人性化程度，从轻微修改到深度重写，平衡检测绕过率和原始内容保留。
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">多语言支持</h3>
                  <p className="text-gray-700">
                    我们的人性化技术支持多种语言，并且理解不同语言的独特表达方式和文化背景。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 底部CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
              <h2 className="text-2xl font-bold mb-4">立即尝试我们的AI内容人性化工具</h2>
              <p className="text-lg mb-6">
                亲自体验如何将AI生成的内容转变为无法被检测的流畅文本
              </p>
              <a 
                href="/humanizer" 
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
              >
                免费开始使用
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 