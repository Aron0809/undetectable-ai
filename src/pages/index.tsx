import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Undetectable.AI - Make Your AI-Generated Content Undetectable</title>
        <meta name="description" content="Undetectable.AI provides advanced AI content humanization services to help you bypass AI detectors and make AI-generated content more natural and human-like." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Make Your AI Content <span className="text-yellow-300">Undetectable</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl">
              Our AI humanization technology bypasses all major AI detectors, ensuring your content passes AI detection 100%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/humanizer" className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-full font-bold text-lg transition duration-300">
                Start Humanizing Content
              </Link>
              <Link href="/how-it-works" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 py-3 px-8 rounded-full font-bold text-lg transition duration-300">
                Learn How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Undetectable.AI</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">100% Bypass Detection</h3>
                <p className="text-gray-600">
                  Our technology guarantees content passes all major AI detection tools, including GPTZero, Originality.ai, Turnitin, and Content at Scale.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Processing</h3>
                <p className="text-gray-600">
                  In just a few seconds, your AI-generated content is humanized, maintaining original meaning while adding naturalness and authenticity.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Flexible Adjustments</h3>
                <p className="text-gray-600">
                  Customize the humanization level to find the perfect balance between content naturalness and original content preservation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold mb-3">Paste AI Content</h3>
                <p className="text-gray-600">
                  Paste your AI-generated content into our humanization tool.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold mb-3">Choose Humanization Level</h3>
                <p className="text-gray-600">
                  Select your desired humanization level, from minor tweaks to deep rewriting.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold mb-3">Get Humanized Content</h3>
                <p className="text-gray-600">
                  In seconds, receive processed content that bypasses AI detection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Using Our AI Humanization Tool Now</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              No more worrying about your content being flagged as AI-generated. With Undetectable.AI, get truly undetectable content.
            </p>
            <Link href="/humanizer" className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-full font-bold text-lg transition duration-300">
              Try For Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 