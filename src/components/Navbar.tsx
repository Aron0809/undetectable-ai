import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';

// 定义导航链接类型
interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: NavLink[] = [
    { name: '首页', path: '/' },
    { name: 'AI检测', path: '/detect' },
    { name: 'AI人性化', path: '/humanize' },
    { name: '定价', path: '/pricing' },
    { name: '博客', path: '/blog' },
  ];

  return (
    <nav className="bg-secondary-900 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-display font-bold text-white">Undetectable.ai</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  router.pathname === link.path 
                    ? 'text-primary-400' 
                    : 'text-secondary-200 hover:text-primary-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/login" 
              className="text-sm font-medium text-secondary-200 hover:text-primary-300"
            >
              登录
            </Link>
            
            <Link 
              href="/signup" 
              className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
            >
              免费试用
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-200 hover:text-white hover:bg-secondary-700 focus:outline-none"
            >
              <span className="sr-only">打开主菜单</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  router.pathname === link.path
                    ? 'text-primary-400 bg-secondary-700'
                    : 'text-secondary-200 hover:text-white hover:bg-secondary-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-200 hover:text-white hover:bg-secondary-700"
            >
              登录
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              免费试用
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 