import React from 'react';
import Layout from '../components/layout/Layout';
import { User, Users, Zap, Check } from 'lucide-react';

type PricingPlan = {
  name: string;
  price: number | string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  priceNote: string;
  href: string;
};

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Free Plan',
      price: 0,
      priceNote: 'Forever free with basic features',
      description: 'Perfect for trying out our AI detection and humanization tools',
      features: [
        '3 AI detections per day',
        '2 text humanizations per day', 
        '1,000 character limit',
        'Basic support',
        'Standard processing speed'
      ],
      buttonText: 'Get Started Free',
      href: '/signup'
    },
    {
      name: 'Monthly Pro',
      price: 9,
      priceNote: 'Billed monthly, cancel anytime',
      description: 'Ideal for regular users and content creators',
      features: [
        '50 AI detections per day',
        '100 text humanizations per day',
        'Unlimited characters',
        'Priority support',
        'Fast processing speed',
        'Advanced humanization options'
      ],
      buttonText: 'Start Monthly Plan',
      isPopular: true,
      href: '/signup?plan=monthly'
    },
    {
      name: 'Annual Pro',
      price: 99,
      priceNote: 'Billed annually, save 18%',
      description: 'Best value for power users and businesses',
      features: [
        'Unlimited AI detections',
        'Unlimited text humanizations',
        'Unlimited characters',
        'Premium support',
        'Fastest processing speed',
        'API access',
        'Custom integrations',
        'Priority processing'
      ],
      buttonText: 'Start Annual Plan',
      href: '/signup?plan=annual'
    }
  ];

  const faqs = [
    {
      question: 'How do I choose the right plan?',
      answer: 'Choose based on your usage needs. The Free plan is perfect for trying our service. For regular content creators, we recommend the Monthly Pro. Businesses and power users should consider the Annual Pro for the best value.'
    },
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your subscription anytime. Upgrades take effect immediately, while downgrades will take effect at the end of your current billing period.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 7-day money-back guarantee. If you\'re not satisfied with our service, you can request a full refund within 7 days of purchase, no questions asked.'
    },
    {
      question: 'Do unused credits roll over to the next month?',
      answer: 'No, unused credits do not roll over to the next month. We recommend planning your usage to make the most of your monthly allocation.'
    }
  ];

  return (
    <Layout
      title="Pricing Plans | Undetectable.AI"
      description="Choose the perfect plan for your AI content humanization needs. Transparent pricing with no hidden fees. Start free and upgrade when you need more."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose the Perfect Plan for You
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees. Start free and upgrade when you need more power and features.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg border-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.isPopular ? 'border-blue-500 relative' : 'border-gray-200'
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-4xl font-bold">
                            {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                          </span>
                          {typeof plan.price === 'number' && plan.price > 0 && (
                            <span className="text-gray-500 ml-1">
                              /{plan.name.includes('Monthly') ? 'month' : 'year'}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{plan.priceNote}</p>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>
                      
                      <div className="mb-8">
                        <ul className="space-y-4">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button 
                        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                          plan.isPopular 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        }`}
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Frequently Asked Questions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team is ready to help you choose the perfect plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:support@undetectable.ai" 
                  className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-xl transition duration-300 border-2 border-gray-200 hover:border-gray-300"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 