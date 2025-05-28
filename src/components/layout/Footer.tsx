import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Undetectable.AI</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI content humanization tool that helps your text bypass AI detection with confidence.
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/humanizer" className="text-gray-400 hover:text-white transition duration-300">
                  Humanizer Tool
                </Link>
              </li>
              <li>
                <Link href="/ai-detector" className="text-gray-400 hover:text-white transition duration-300">
                  AI Detector
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition duration-300">
                  User Guides
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-gray-400 hover:text-white transition duration-300">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-white transition duration-300">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition duration-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Undetectable.AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select 
              className="bg-gray-800 text-gray-300 py-1 px-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="en-US"
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