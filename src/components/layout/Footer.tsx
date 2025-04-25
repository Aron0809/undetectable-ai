import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Undetectable.AI</h3>
            <p className="text-gray-300 mb-4">
              提供最先进的AI内容人性化工具，帮助您的文本通过AI检测器检测。
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="h-5 w-5 text-gray-400 hover:text-white transition duration-300" />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/humanizer" className="text-gray-400 hover:text-white transition duration-300">
                  人性化工具
                </Link>
              </li>
              <li>
                <Link href="/ai-detector" className="text-gray-400 hover:text-white transition duration-300">
                  AI检测器
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition duration-300">
                  价格
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition duration-300">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition duration-300">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition duration-300">
                  使用指南
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-gray-400 hover:text-white transition duration-300">
                  API文档
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-white transition duration-300">
                  更新日志
                </Link>
              </li>
            </ul>
          </div>

          {/* 法律信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">法律</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition duration-300">
                  Cookie政策
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-400 hover:text-white transition duration-300">
                  GDPR合规
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Undetectable.AI. 保留所有权利。
          </p>
          <div className="mt-4 md:mt-0">
            <select 
              className="bg-gray-800 text-gray-300 py-1 px-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="zh-CN"
            >
              <option value="en-US">English</option>
              <option value="zh-CN">中文</option>
              <option value="es-ES">Español</option>
              <option value="fr-FR">Français</option>
              <option value="de-DE">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 