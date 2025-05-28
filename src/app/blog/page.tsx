import React from 'react';
import Link from 'next/link';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

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
  // Blog posts data - all in English
  const blogPosts: BlogPost[] = [
    {
      id: 'ai-content-detection',
      title: 'AI Content Detection Methods and Their Limitations',
      description: 'Explore how current mainstream AI content detection technologies work and the challenges and limitations they face.',
      date: '2023-11-15',
      author: 'Dr. Zhang',
      category: 'Technology',
      image: '/images/blog/ai-detection.jpg',
      readTime: '8 min read'
    },
    {
      id: 'humanize-ai-content',
      title: 'How to Effectively Humanize AI-Generated Content',
      description: 'Detailed introduction to best practices and techniques for making AI-generated content more natural and human-like.',
      date: '2023-11-10',
      author: 'Li Editor',
      category: 'Guide',
      image: '/images/blog/humanize-content.jpg',
      readTime: '6 min read'
    },
    {
      id: 'ai-content-education',
      title: 'AI Content in Education: Applications and Ethical Considerations',
      description: 'Discuss the use of AI-generated content in educational and academic environments, and related ethical issues.',
      date: '2023-11-05',
      author: 'Prof. Wang',
      category: 'Education',
      image: '/images/blog/ai-education.jpg',
      readTime: '10 min read'
    },
    {
      id: 'future-of-ai-writing',
      title: 'The Future of AI Writing: Trends and Predictions',
      description: 'Analyze the development trends of AI writing technology and predict possible innovations and changes in the coming years.',
      date: '2023-10-28',
      author: 'Chen Researcher',
      category: 'Trends',
      image: '/images/blog/ai-future.jpg',
      readTime: '7 min read'
    },
    {
      id: 'ai-content-marketing',
      title: 'How to Cleverly Use AI-Generated Content in Marketing',
      description: 'Provide practical advice and best practices for effectively utilizing AI-generated content in marketing strategies.',
      date: '2023-10-20',
      author: 'Zhao Marketer',
      category: 'Marketing',
      image: '/images/blog/ai-marketing.jpg',
      readTime: '9 min read'
    },
    {
      id: 'ai-detection-comparison',
      title: '2023 Mainstream AI Content Detection Tools Comparison',
      description: 'Compare and evaluate major AI content detection tools on the market, analyzing their accuracy, features, and use cases.',
      date: '2023-10-15',
      author: 'Dr. Zhang',
      category: 'Review',
      image: '/images/blog/detection-tools.jpg',
      readTime: '11 min read'
    }
  ];

  // Extract all blog categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Undetectable.AI Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth insights into AI content detection, humanization, and the latest trends in AI technology
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              <button className="px-6 py-3 rounded-full font-medium bg-blue-600 text-white shadow-lg">
                All Posts
              </button>
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className="px-6 py-3 rounded-full font-medium bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="h-48 bg-gray-200 relative">
                    {/* Placeholder for blog image */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                      <span className="text-gray-500 text-sm">[Blog Image]</span>
                    </div>
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-xl bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium">
                  1
                </button>
                <button className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                  3
                </button>
                <span className="px-3 py-2 text-gray-500">...</span>
                <button className="px-4 py-2 rounded-xl bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 transition-colors">
                  10
                </button>
                <button className="px-4 py-2 rounded-xl bg-white text-gray-500 hover:bg-gray-50 border border-gray-200 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest insights on AI detection, content humanization, and industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 