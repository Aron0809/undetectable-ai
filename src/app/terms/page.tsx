import React from 'react';
import { FileText, AlertTriangle, Scale, Users, ShieldCheck, CreditCard } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms of service govern your use of Undetectable.AI and our AI detection and humanization services.
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
            
            {/* Quick Summary */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Fair Use</h3>
                <p className="text-gray-600 text-sm">Use our service responsibly and in accordance with applicable laws</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mx-auto mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Your Rights</h3>
                <p className="text-gray-600 text-sm">You retain ownership of your content and data</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Our Responsibilities</h3>
                <p className="text-gray-600 text-sm">We provide reliable service while respecting your privacy</p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="prose max-w-none">
                
                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    Acceptance of Terms
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>By accessing and using Undetectable.AI ("Service", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement.</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">
                        <strong>Important:</strong> If you do not agree to these terms, you should not use our service. Your continued use of the service constitutes acceptance of these terms.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Users className="h-6 w-6 text-green-600 mr-3" />
                    Description of Service
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>Undetectable.AI provides AI content detection and humanization services, including but not limited to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>AI content detection and analysis</li>
                      <li>AI content humanization and rewriting</li>
                      <li>Content optimization tools</li>
                      <li>API access for developers</li>
                      <li>Customer support and documentation</li>
                    </ul>
                    <p>We reserve the right to modify, suspend, or discontinue any part of our service at any time with reasonable notice.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <ShieldCheck className="h-6 w-6 text-purple-600 mr-3" />
                    User Accounts and Registration
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>To access certain features of our service, you may need to create an account. When creating an account, you agree to:</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Account Responsibilities:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Provide accurate and complete information</li>
                        <li>Maintain the security of your account credentials</li>
                        <li>Notify us immediately of any unauthorized access</li>
                        <li>Accept responsibility for all activities under your account</li>
                        <li>Use the service only for lawful purposes</li>
                      </ul>
                    </div>
                    
                    <p>You must be at least 13 years old to create an account. If you are under 18, you must have parental consent.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                    Acceptable Use Policy
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>You agree not to use our service for any of the following prohibited activities:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <h3 className="font-semibold mb-2 text-red-800">Prohibited Content</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                          <li>Illegal or harmful content</li>
                          <li>Hate speech or harassment</li>
                          <li>Copyrighted material without permission</li>
                          <li>Spam or malicious content</li>
                          <li>Personal information of others</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <h3 className="font-semibold mb-2 text-orange-800">Prohibited Activities</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-orange-700">
                          <li>Attempting to bypass security measures</li>
                          <li>Reverse engineering our algorithms</li>
                          <li>Automating requests without permission</li>
                          <li>Sharing account credentials</li>
                          <li>Commercial use beyond plan limits</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800">
                        <strong>Academic Integrity:</strong> While our service can help improve content quality, users are responsible for ensuring compliance with their institution's academic integrity policies.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Scale className="h-6 w-6 text-blue-600 mr-3" />
                    Intellectual Property Rights
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h3 className="font-semibold mb-2 text-green-800">Your Content</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
                          <li>You retain ownership of your original content</li>
                          <li>You grant us license to process your content</li>
                          <li>Processed content belongs to you</li>
                          <li>We don't claim ownership of your work</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h3 className="font-semibold mb-2 text-blue-800">Our Service</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                          <li>Our algorithms and technology are proprietary</li>
                          <li>Service design and interface are protected</li>
                          <li>Trademarks and branding are our property</li>
                          <li>Documentation and content are copyrighted</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <CreditCard className="h-6 w-6 text-green-600 mr-3" />
                    Payment and Billing
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    <p>For paid services, the following terms apply:</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Billing Terms:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Payments are processed securely through third-party providers</li>
                        <li>Subscriptions are billed automatically unless cancelled</li>
                        <li>All fees are non-refundable except as required by law</li>
                        <li>We offer a 7-day money-back guarantee for new subscribers</li>
                        <li>Price changes will be communicated 30 days in advance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">
                        <strong>Cancellation:</strong> You can cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing period.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>Your privacy is important to us. Our data practices are governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Key Privacy Points:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>We process your content only to provide our services</li>
                        <li>Content is not stored longer than necessary for processing</li>
                        <li>We do not use your content to train our models without consent</li>
                        <li>Your data is protected with industry-standard security measures</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Service Availability and Disclaimers</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>While we strive to provide reliable service, we cannot guarantee uninterrupted access or perfect results.</p>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h3 className="font-semibold mb-2 text-yellow-800">Service Disclaimers:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                        <li>Service is provided "as is" without warranties</li>
                        <li>We do not guarantee specific detection or humanization rates</li>
                        <li>Results may vary based on content type and complexity</li>
                        <li>Service may be temporarily unavailable for maintenance</li>
                        <li>Third-party integrations may affect service availability</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>To the maximum extent permitted by law, Undetectable.AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.</p>
                    <p>Our total liability for any claim shall not exceed the amount you paid for the service in the 12 months preceding the claim.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Termination</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>Either party may terminate this agreement at any time:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>By You:</strong> Cancel your account through your account settings</li>
                      <li><strong>By Us:</strong> For violation of these terms or legal requirements</li>
                      <li><strong>Effect:</strong> Upon termination, your access to the service will cease</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Governing Law and Disputes</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>These terms are governed by the laws of [Jurisdiction]. Any disputes will be resolved through binding arbitration, except for claims that may be brought in small claims court.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>We may update these terms from time to time. We will notify users of significant changes via email or through our service. Continued use after changes constitutes acceptance of the new terms.</p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>If you have questions about these terms, please contact us:</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p><strong>Email:</strong> <a href="mailto:legal@undetectable.ai" className="text-blue-600 hover:text-blue-700 underline">legal@undetectable.ai</a></p>
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