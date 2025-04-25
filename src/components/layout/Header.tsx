import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Undetectable.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/humanizer" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Humanizer
            </Link>
            <Link href="/ai-detector" className="text-gray-700 hover:text-blue-600 transition duration-300">
              AI Detector
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Pricing
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 transition duration-300">
              How It Works
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Blog
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition duration-300">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link href="/humanizer" className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-6 rounded-full transition duration-300">
              Try Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/humanizer" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                Humanizer
              </Link>
              <Link href="/ai-detector" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                AI Detector
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                Pricing
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                How It Works
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                Blog
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 py-2 transition duration-300">
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
                <Link href="/humanizer" className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-6 rounded-full text-center transition duration-300">
                  Try Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 