import React from 'react';
import Link from 'next/link';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-display font-bold text-white hover:text-primary-300">
              Undetectable.ai
            </Link>
            <p className="mt-3 text-secondary-300 text-sm">
              The best AI detector and humanizer tool to ensure your content passes AI detection checks.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com/undetectableai" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-300">
                <FiTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com/undetectableai" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-300">
                <FiFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://linkedin.com/company/undetectableai" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-300">
                <FiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://instagram.com/undetectableai" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-primary-300">
                <FiInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/detect" className="text-secondary-300 hover:text-primary-300 text-sm">
                  AI Detector
                </Link>
              </li>
              <li>
                <Link href="/humanize" className="text-secondary-300 hover:text-primary-300 text-sm">
                  AI Humanizer
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-secondary-300 hover:text-primary-300 text-sm">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-secondary-300 hover:text-primary-300 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-primary-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-secondary-300 hover:text-primary-300 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-700 text-center text-secondary-400 text-sm">
          <p>© {currentYear} Undetectable.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 