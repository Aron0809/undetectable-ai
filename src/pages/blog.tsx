import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
};

export default function Blog() {
  // 模拟博客文章数据
  const blogPosts: BlogPost[] = [
    {
      id: 'ai-content-detection',
      title: 'AI生成内容检测方法及其局限性',
      description: '探讨当前主流AI内容检测技术是如何工作的，以及它们面临的挑战和局限性。',
      date: '2023-11-15',
      author: '张博士',
      category: '技术',
      image: '/images/blog/ai-detection.jpg',
      readTime: '8分钟'
    },
    {
      id: 'humanize-ai-content',
      title: '如何有效地人性化AI生成内容',
      description: '详细介绍使AI生成内容更自然、更人性化的最佳实践和技巧。',
      date: '2023-11-10',
      author: '李编辑',
      category: '指南',
      image: '/images/blog/humanize-content.jpg',
      readTime: '6分钟'
    },
    {
      id: 'ai-content-education',
      title: 'AI内容在教育领域的应用与伦理考量',
      description: '探讨AI生成内容在教育和学术环境中的使用，以及相关的伦理问题。',
      date: '2023-11-05',
      author: '王教授',
      category: '教育',
      image: '/images/blog/ai-education.jpg',
      readTime: '10分钟'
    },
    {
      id: 'future-of-ai-writing',
      title: 'AI写作的未来：趋势与预测',
      description: '分析AI写作技术的发展趋势，预测未来几年可能出现的创新和变革。',
      date: '2023-10-28',
      author: '陈研究员',
      category: '趋势',
      image: '/images/blog/ai-future.jpg',
      readTime: '7分钟'
    },
    {
      id: 'ai-content-marketing',
      title: '如何在营销中巧妙使用AI生成内容',
      description: '提供在营销策略中有效利用AI生成内容的实用建议和最佳实践。',
      date: '2023-10-20',
      author: '赵营销师',
      category: '营销',
      image: '/images/blog/ai-marketing.jpg',
      readTime: '9分钟'
    },
    {
      id: 'ai-detection-comparison',
      title: '2023年主流AI内容检测工具对比',
      description: '对比评估市面上主要的AI内容检测工具，分析它们的准确性、特点和适用场景。',
      date: '2023-10-15',
      author: '张博士',
      category: '评测',
      image: '/images/blog/detection-tools.jpg',
      readTime: '11分钟'
    }
  ];

  // 提取所有博客分类
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <Layout
      title="博客 | Undetectable.AI"
      description="了解AI内容检测、人性化和绕过技术的最新动态、指南和见解。"
    >
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Undetectable.AI 博客</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                深入了解AI内容检测和人性化的最新资讯、技巧和见解
              </p>
            </div>

            {/* 分类过滤器 */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full">
                全部
              </button>
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 博客列表 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:translate-y-[-5px]"
                >
                  <div className="h-48 bg-gray-300 relative">
                    {/* 实际应用中会使用图片组件加载图片 */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-400">[博客图片]</span>
                    </div>
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">由 {post.author} 发布</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                      >
                        阅读更多 →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* 分页 */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-1">
                <a 
                  href="#" 
                  className="px-3 py-2 rounded-md bg-white text-gray-500 hover:bg-gray-50"
                >
                  上一页
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 rounded-md bg-blue-600 text-white"
                >
                  1
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="px-3 py-2 text-gray-500">...</span>
                <a 
                  href="#" 
                  className="px-3 py-2 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                >
                  10
                </a>
                <a 
                  href="#" 
                  className="px-3 py-2 rounded-md bg-white text-gray-500 hover:bg-gray-50"
                >
                  下一页
                </a>
              </nav>
            </div>

            {/* 订阅部分 */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white text-center">
              <h2 className="text-2xl font-bold mb-4">订阅我们的博客更新</h2>
              <p className="mb-6 max-w-xl mx-auto">
                获取最新的AI内容检测和人性化技术资讯、教程和小贴士，直接发送到您的邮箱
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="您的电子邮箱" 
                  className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  订阅
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 