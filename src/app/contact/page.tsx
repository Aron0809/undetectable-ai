import React from 'react';
import { Mail, MessageCircle, HelpCircle, Send, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? Our team is ready to help you with any questions about our AI detection and humanization tools.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email Support */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">
                  Send us an email for any questions, feedback, or support requests. We typically respond within 24 hours.
                </p>
                <a 
                  href="mailto:support@undetectable.ai" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
                >
                  support@undetectable.ai
                </a>
              </div>
              
              {/* Live Chat */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-6">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">
                  Chat with our support team in real-time for immediate assistance with your questions and technical issues.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">
                  Start Chat
                </button>
              </div>
              
              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Help Center</h3>
                <p className="text-gray-600 mb-6">
                  Browse our comprehensive FAQ and help documentation to find answers to common questions.
                </p>
                <a 
                  href="/faq" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl inline-block"
                >
                  Visit FAQ
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Pricing</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Product Feedback</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email Us</h4>
                        <p className="text-gray-600 mb-2">For general inquiries and support</p>
                        <a href="mailto:support@undetectable.ai" className="text-blue-600 hover:text-blue-700 font-medium">
                          support@undetectable.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Response Time</h4>
                        <p className="text-gray-600">We typically respond within 24 hours on business days</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Live Support</h4>
                        <p className="text-gray-600">Available Monday to Friday, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Need Quick Help?</h3>
                  <p className="text-gray-600 mb-6">
                    Check out these resources for instant answers to common questions.
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="/faq" 
                      className="block bg-white hover:bg-gray-50 p-4 rounded-xl transition duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center">
                        <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium">Frequently Asked Questions</span>
                      </div>
                    </a>
                    
                    <a 
                      href="/how-it-works" 
                      className="block bg-white hover:bg-gray-50 p-4 rounded-xl transition duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center">
                        <HelpCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="font-medium">How It Works Guide</span>
                      </div>
                    </a>
                    
                    <a 
                      href="/pricing" 
                      className="block bg-white hover:bg-gray-50 p-4 rounded-xl transition duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center">
                        <HelpCircle className="h-5 w-5 text-purple-600 mr-3" />
                        <span className="font-medium">Pricing Information</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 