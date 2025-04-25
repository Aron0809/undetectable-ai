import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // 模拟API请求
    setTimeout(() => {
      // 随机成功或失败（80%成功率）
      if (Math.random() > 0.2) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <Layout
      title="联系我们 | Undetectable.AI"
      description="有问题或反馈？联系Undetectable.AI团队，我们将很高兴为您提供帮助。"
    >
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">联系我们</h1>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              有问题或建议？我们的团队随时准备为您提供帮助，请通过以下方式联系我们。
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">电子邮件</h3>
                <p className="text-gray-600 mb-3">
                  有任何问题或反馈，请随时给我们发送电子邮件
                </p>
                <a href="mailto:support@undetectable.ai" className="text-blue-600 hover:underline font-semibold">
                  support@undetectable.ai
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">在线客服</h3>
                <p className="text-gray-600 mb-3">
                  通过在线客服与我们的团队实时聊天获取即时帮助
                </p>
                <button className="text-blue-600 hover:underline font-semibold">
                  开始聊天
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">常见问题</h3>
                <p className="text-gray-600 mb-3">
                  浏览我们的常见问题解答，获取对常见问题的解答
                </p>
                <a href="/faq" className="text-blue-600 hover:underline font-semibold">
                  查看常见问题
                </a>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">给我们留言</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">消息已发送！</h3>
                      <p>感谢您的留言。我们的团队将尽快与您联系。</p>
                    </div>
                  </div>
                </div>
              ) : formStatus === 'error' ? (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">
                  <div className="flex">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">发送失败</h3>
                      <p>抱歉，发送消息时出现问题。请稍后重试或直接发送电子邮件至 support@undetectable.ai</p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      您的姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      电子邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    主题
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">请选择主题</option>
                    <option value="general">一般咨询</option>
                    <option value="support">技术支持</option>
                    <option value="billing">账单问题</option>
                    <option value="partnership">合作机会</option>
                    <option value="feedback">产品反馈</option>
                  </select>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    消息内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full md:w-auto px-6 py-3 font-semibold rounded-md transition duration-300 ${
                      formStatus === 'submitting'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {formStatus === 'submitting' ? '发送中...' : '发送消息'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* 办公地址信息 */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">办公地址</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">上海办公室</h3>
                  <p className="text-gray-600 mb-1">上海市浦东新区张江高科技园区</p>
                  <p className="text-gray-600 mb-1">科苑路88号</p>
                  <p className="text-gray-600 mb-4">200120</p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">电话：</span> +86 21 6000 0000
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">营业时间：</span> 周一至周五 9:00 - 18:00
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">北京办公室</h3>
                  <p className="text-gray-600 mb-1">北京市海淀区中关村</p>
                  <p className="text-gray-600 mb-1">科学院南路6号</p>
                  <p className="text-gray-600 mb-4">100190</p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">电话：</span> +86 10 8000 0000
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">营业时间：</span> 周一至周五 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 