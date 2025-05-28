import React from 'react';
import { Shield, Lock, Eye, Database, Mail, Globe } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Undetectable.AI.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: December 19, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Privacy Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Data Protection</h3>
                <p className="text-gray-600 text-sm">We use industry-standard encryption to protect your data</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mx-auto mb-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">No Sale of Data</h3>
                <p className="text-gray-600 text-sm">We never sell your personal information to third parties</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">User Control</h3>
                <p className="text-gray-600 text-sm">You have full control over your data and can delete it anytime</p>
              </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="prose max-w-none">
                
                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    Information We Collect
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We collect information to provide better services to our users. The types of information we collect include:</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Information you provide to us:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Account information (email address, username)</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                        <li>Content you submit for AI detection or humanization</li>
                        <li>Support communications and feedback</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Information we collect automatically:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Usage data and analytics</li>
                        <li>Device information and IP address</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Log data including access times and browser type</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Globe className="h-6 w-6 text-green-600 mr-3" />
                    How We Use Your Information
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our AI detection and humanization services</li>
                      <li>Process your content for AI analysis and humanization</li>
                      <li>Manage your account and provide customer support</li>
                      <li>Send you service-related communications</li>
                      <li>Analyze usage patterns to improve our algorithms</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <p className="text-blue-800">
                        <strong>Content Processing:</strong> Your submitted text is processed by our AI algorithms for detection and humanization purposes. We do not store your content longer than necessary for processing and do not use it to train our models without explicit consent.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-purple-600 mr-3" />
                    Data Security
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We implement appropriate security measures to protect your personal information:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Technical Safeguards</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>SSL/TLS encryption for data transmission</li>
                          <li>Encrypted data storage</li>
                          <li>Regular security audits</li>
                          <li>Access controls and authentication</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Operational Safeguards</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Limited access to personal data</li>
                          <li>Employee training on data protection</li>
                          <li>Regular backup procedures</li>
                          <li>Incident response procedures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-orange-600 mr-3" />
                    Information Sharing
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our service (payment processors, cloud hosting)</li>
                      <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-red-600 mr-3" />
                    Your Rights and Choices
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>You have the following rights regarding your personal information:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Access and Control</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Access your personal data</li>
                          <li>Update or correct your information</li>
                          <li>Delete your account and data</li>
                          <li>Export your data</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Privacy Settings</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Opt out of marketing communications</li>
                          <li>Manage cookie preferences</li>
                          <li>Request data portability</li>
                          <li>Withdraw consent</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                      <p className="text-green-800">
                        <strong>Exercise Your Rights:</strong> To exercise any of these rights, please contact us at <a href="mailto:privacy@undetectable.ai" className="text-green-600 hover:text-green-700 underline">privacy@undetectable.ai</a> or through your account settings.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze how our service is used</li>
                      <li>Provide personalized content and ads</li>
                      <li>Improve our service performance</li>
                    </ul>
                    <p>You can control cookies through your browser settings, but please note that disabling cookies may affect the functionality of our service.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    Contact Us
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p><strong>Email:</strong> <a href="mailto:privacy@undetectable.ai" className="text-blue-600 hover:text-blue-700 underline">privacy@undetectable.ai</a></p>
                      <p><strong>Support:</strong> <a href="mailto:support@undetectable.ai" className="text-blue-600 hover:text-blue-700 underline">support@undetectable.ai</a></p>
                      <p><strong>Website:</strong> <a href="/contact" className="text-blue-600 hover:text-blue-700 underline">Contact Us Page</a></p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 