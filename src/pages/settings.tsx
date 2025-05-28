import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function Settings() {
  // 定义设置项部分
  const [activeTab, setActiveTab] = useState('profile');
  
  // 个人资料表单
  const [profileForm, setProfileForm] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    company: 'ABC科技有限公司',
    jobTitle: '内容营销经理'
  });
  
  // 密码修改表单
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // 通知设置
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    productNews: true,
    securityAlerts: true,
    tips: false
  });
  
  // 表单修改处理函数
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  // 表单提交处理
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟保存个人资料
    alert('个人资料已保存！');
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 验证两次密码是否一致
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    // 模拟修改密码
    alert('密码修改成功！');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };
  
  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟保存通知设置
    alert('通知设置已保存！');
  };
  
  return (
    <Layout
      title="账户设置 | Undetectable.AI"
      description="管理您的Undetectable.AI账户设置，更新个人信息，修改密码和通知偏好。"
    >
      <div className="py-8 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">账户设置</h1>
              <Link
                href="/dashboard"
                className="text-blue-600 hover:underline font-medium"
              >
                返回仪表板
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                {/* 侧边栏导航 */}
                <div className="md:w-1/4 bg-gray-50 p-6 border-r border-gray-200">
                  <nav className="space-y-1">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === 'profile'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      个人资料
                    </button>
                    <button
                      onClick={() => setActiveTab('password')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === 'password'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      密码设置
                    </button>
                    <button
                      onClick={() => setActiveTab('notifications')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === 'notifications'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      通知设置
                    </button>
                    <button
                      onClick={() => setActiveTab('billing')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === 'billing'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      付款信息
                    </button>
                    <button
                      onClick={() => setActiveTab('subscription')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === 'subscription'
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      订阅管理
                    </button>
                  </nav>
                </div>
                
                {/* 主内容区域 */}
                <div className="md:w-3/4 p-6">
                  {/* 个人资料设置 */}
                  {activeTab === 'profile' && (
                    <div>
                      <h2 className="text-xl font-semibold mb-6">个人资料</h2>
                      <form onSubmit={handleProfileSubmit}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            姓名
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={profileForm.name}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            电子邮箱
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={profileForm.email}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                            公司（可选）
                          </label>
                          <input
                            id="company"
                            type="text"
                            name="company"
                            value={profileForm.company}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2">
                            职位（可选）
                          </label>
                          <input
                            id="jobTitle"
                            type="text"
                            name="jobTitle"
                            value={profileForm.jobTitle}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                        >
                          保存设置
                        </button>
                      </form>
                    </div>
                  )}
                  
                  {/* 密码设置 */}
                  {activeTab === 'password' && (
                    <div>
                      <h2 className="text-xl font-semibold mb-6">更改密码</h2>
                      <form onSubmit={handlePasswordSubmit}>
                        <div className="mb-4">
                          <label htmlFor="currentPassword" className="block text-gray-700 font-medium mb-2">
                            当前密码
                          </label>
                          <input
                            id="currentPassword"
                            type="password"
                            name="currentPassword"
                            value={passwordForm.currentPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
                            新密码
                          </label>
                          <input
                            id="newPassword"
                            type="password"
                            name="newPassword"
                            value={passwordForm.newPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            minLength={8}
                          />
                          <p className="mt-1 text-sm text-gray-500">
                            密码必须至少包含8个字符
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                            确认新密码
                          </label>
                          <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={passwordForm.confirmPassword}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                        >
                          更新密码
                        </button>
                      </form>
                    </div>
                  )}
                  
                  {/* 通知设置 */}
                  {activeTab === 'notifications' && (
                    <div>
                      <h2 className="text-xl font-semibold mb-6">通知设置</h2>
                      <form onSubmit={handleNotificationSubmit}>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="emailUpdates"
                                name="emailUpdates"
                                type="checkbox"
                                checked={notifications.emailUpdates}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="emailUpdates" className="font-medium text-gray-700">电子邮件更新</label>
                              <p className="text-gray-500">接收账户活动和使用情况的电子邮件更新</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="productNews"
                                name="productNews"
                                type="checkbox"
                                checked={notifications.productNews}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="productNews" className="font-medium text-gray-700">产品新闻</label>
                              <p className="text-gray-500">接收有关产品更新和新功能的通知</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="securityAlerts"
                                name="securityAlerts"
                                type="checkbox"
                                checked={notifications.securityAlerts}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="securityAlerts" className="font-medium text-gray-700">安全警报</label>
                              <p className="text-gray-500">接收有关账户安全的重要通知</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="tips"
                                name="tips"
                                type="checkbox"
                                checked={notifications.tips}
                                onChange={handleNotificationChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="tips" className="font-medium text-gray-700">提示和技巧</label>
                              <p className="text-gray-500">接收有关如何更好地使用我们服务的提示</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                          >
                            保存设置
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  
                  {/* 付款信息 */}
                  {activeTab === 'billing' && (
                    <div>
                      <h2 className="text-xl font-semibold mb-6">付款信息</h2>
                      <div className="bg-gray-50 p-4 rounded-md mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">当前付款方式</span>
                          <button className="text-blue-600 hover:underline text-sm">编辑</button>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-white p-2 rounded-md border border-gray-200 mr-3">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M2 10H22" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Visa 尾号 4242</div>
                            <div className="text-sm text-gray-500">到期日: 12/2025</div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-medium mb-4">添加新的付款方式</h3>
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 10H22" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          添加信用卡或借记卡
                        </button>
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none">
                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          添加支付宝
                        </button>
                      </div>
                      
                      <h3 className="font-medium mb-4">账单历史</h3>
                      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">日期</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">描述</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">金额</th>
                              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">状态</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 text-sm text-gray-500">2025-04-01</td>
                              <td className="px-6 py-4 text-sm text-gray-900">专业版订阅 (月付)</td>
                              <td className="px-6 py-4 text-sm text-gray-900">¥99.00</td>
                              <td className="px-6 py-4 text-right">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">已付款</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 text-sm text-gray-500">2025-03-01</td>
                              <td className="px-6 py-4 text-sm text-gray-900">专业版订阅 (月付)</td>
                              <td className="px-6 py-4 text-sm text-gray-900">¥99.00</td>
                              <td className="px-6 py-4 text-right">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">已付款</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  
                  {/* 订阅管理 */}
                  {activeTab === 'subscription' && (
                    <div>
                      <h2 className="text-xl font-semibold mb-6">订阅管理</h2>
                      
                      <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-blue-800">当前套餐: 专业版</h3>
                            <p className="text-sm text-blue-600">下次续费日期: 2025年5月1日</p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                            活跃
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-medium mb-4">可用套餐</h3>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="border border-gray-200 rounded-md p-4 bg-white">
                          <div className="font-medium mb-1">免费版</div>
                          <div className="text-2xl font-bold mb-2">¥0<span className="text-sm font-normal text-gray-500">/月</span></div>
                          <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li>• 每日500字免费额度</li>
                            <li>• 基础AI检测</li>
                            <li>• 轻度人性化选项</li>
                          </ul>
                          <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300 text-sm">
                            当前套餐
                          </button>
                        </div>
                        
                        <div className="border-2 border-blue-500 rounded-md p-4 bg-white relative">
                          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl-md">
                            最受欢迎
                          </div>
                          <div className="font-medium mb-1">专业版</div>
                          <div className="text-2xl font-bold mb-2">¥99<span className="text-sm font-normal text-gray-500">/月</span></div>
                          <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li>• 每月50,000字额度</li>
                            <li>• 高级AI检测</li>
                            <li>• 所有人性化选项</li>
                            <li>• 优先客户支持</li>
                          </ul>
                          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 text-sm">
                            当前使用中
                          </button>
                        </div>
                        
                        <div className="border border-gray-200 rounded-md p-4 bg-white">
                          <div className="font-medium mb-1">企业版</div>
                          <div className="text-2xl font-bold mb-2">¥299<span className="text-sm font-normal text-gray-500">/月</span></div>
                          <ul className="text-sm text-gray-600 space-y-2 mb-4">
                            <li>• 无限制字数</li>
                            <li>• 团队成员协作</li>
                            <li>• API访问</li>
                            <li>• 专属客户经理</li>
                          </ul>
                          <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300 text-sm">
                            升级
                          </button>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-medium mb-4">取消订阅</h3>
                        <p className="text-gray-600 mb-4">
                          取消订阅后，您将在当前结算周期结束时失去对专业版功能的访问权限。
                        </p>
                        <button className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition duration-300">
                          取消订阅
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 