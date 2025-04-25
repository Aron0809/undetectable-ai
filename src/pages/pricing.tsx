import React from 'react';
import Layout from '../components/layout/Layout';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
};

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: '免费版',
      price: '¥0',
      description: '适合初次尝试的用户',
      features: [
        '每天最多处理2篇文章',
        '每篇最多处理500字',
        '基础人性化功能',
        '标准检测绕过能力',
        '无优先支持'
      ],
      buttonText: '免费开始使用'
    },
    {
      name: '基础版',
      price: '¥99',
      description: '适合个人用户和学生',
      features: [
        '每月最多处理30篇文章',
        '每篇最多处理3,000字',
        '高级人性化功能',
        '高级检测绕过能力',
        '电子邮件支持'
      ],
      buttonText: '选择基础版',
      isPopular: true
    },
    {
      name: '专业版',
      price: '¥249',
      description: '适合专业撰稿人和企业',
      features: [
        '每月最多处理100篇文章',
        '每篇最多处理10,000字',
        '最高级人性化功能',
        '最高检测绕过能力',
        '优先支持和培训',
        'API访问权限'
      ],
      buttonText: '选择专业版'
    },
    {
      name: '企业版',
      price: '联系我们',
      description: '适合大型企业和机构',
      features: [
        '无限文章处理',
        '无限字数',
        '定制化人性化方案',
        '专属检测绕过算法',
        '24/7专属客户支持',
        '完整API集成',
        '专属客户经理'
      ],
      buttonText: '联系销售'
    }
  ];

  return (
    <Layout
      title="价格方案 | Undetectable.AI"
      description="查看Undetectable.AI的各种价格方案，选择最适合您需求的AI内容人性化服务套餐。"
    >
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">价格方案</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                选择最适合您需求的方案，所有方案均提供我们屡获殊荣的AI内容人性化技术。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                    plan.isPopular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="bg-blue-500 text-white py-1 px-4 text-center">
                      <span className="text-sm font-semibold">最受欢迎</span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== '联系我们' && <span className="text-gray-500">/月</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="border-t border-gray-200 pt-4 mb-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg 
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M5 13l4 4L19 7" 
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 ${
                        plan.isPopular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 常见问题 */}
            <div className="mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                常见问题
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-3">如何选择合适的方案？</h3>
                  <p className="text-gray-700">
                    根据您需要处理的文章数量和长度选择。如果您只是想尝试我们的服务，可以从免费版开始。对于经常需要处理内容的用户，我们推荐基础版或专业版。
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-3">我可以随时升级或降级我的方案吗？</h3>
                  <p className="text-gray-700">
                    是的，您可以随时升级或降级您的订阅方案。升级将立即生效，而降级会在当前计费周期结束后生效。
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-3">你们提供退款吗？</h3>
                  <p className="text-gray-700">
                    我们提供7天退款保证。如果您对服务不满意，可以在购买后7天内申请全额退款，无需任何理由。
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-3">未使用的处理次数会结转到下个月吗？</h3>
                  <p className="text-gray-700">
                    不会，未使用的处理次数不会结转。我们建议您合理规划您的使用，充分利用当月的配额。
                  </p>
                </div>
              </div>
            </div>
            
            {/* 底部CTA */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-4">仍有疑问？</h2>
              <p className="text-lg text-gray-600 mb-6">
                我们的团队随时准备帮助您选择最适合您需求的方案。
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 