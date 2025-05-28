import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is AI content humanization?",
    answer: (
      <div className="space-y-2">
        <p>
          AI content humanization is the process of transforming AI-generated text to make it appear more natural and human-like. Our advanced algorithms modify sentence structure, vocabulary choices, and writing patterns to bypass AI detection tools while preserving the original meaning.
        </p>
      </div>
    ),
  },
  {
    question: "Why choose Undetectable AI over other tools?",
    answer: (
      <div className="space-y-2">
        <p>
          Our platform offers several unique advantages:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Industry-leading 99.8% bypass success rate</li>
          <li>Support for 25+ languages</li>
          <li>Lightning-fast processing (results in seconds)</li>
          <li>Advanced Gemini 2.0 Flash AI technology</li>
          <li>Multiple humanization intensity levels</li>
          <li>Guaranteed meaning preservation</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How do you ensure quality of humanized content?",
    answer: (
      <div className="space-y-2">
        <p>
          We use state-of-the-art AI models and multi-layer quality assurance:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Advanced natural language processing algorithms</li>
          <li>Semantic meaning preservation checks</li>
          <li>Grammar and coherence validation</li>
          <li>Multiple humanization intensity options</li>
          <li>Real-time quality scoring</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What types of content and languages are supported?",
    answer: (
      <div className="space-y-2">
        <p>
          Our platform supports a wide range of content types and languages:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Academic papers and research articles</li>
          <li>Blog posts and marketing content</li>
          <li>Business documents and reports</li>
          <li>Creative writing and stories</li>
          <li>25+ languages including English, Chinese, Spanish, French, German, and more</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How do I use your service?",
    answer: (
      <div className="space-y-2">
        <p>
          Using our service is simple and straightforward:
        </p>
        <ol className="list-decimal list-inside space-y-1 ml-4">
          <li>Paste your AI-generated content into our tool</li>
          <li>Select your desired humanization level (low, medium, or high)</li>
          <li>Click "Humanize" and get results in seconds</li>
          <li>Copy your undetectable, human-like content</li>
        </ol>
        <p>
          You can also use our <a href="/ai-detector" className="text-blue-600 hover:underline">AI detector tool</a> to verify the effectiveness.
        </p>
      </div>
    ),
  },
  {
    question: "What are your pricing and payment options?",
    answer: (
      <div className="space-y-2">
        <p>
          We offer flexible pricing plans to suit different needs:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>Free Plan:</strong> 3 detections + 2 humanizations daily</li>
          <li><strong>Monthly Pro ($9/month):</strong> 50 detections + 100 humanizations daily</li>
          <li><strong>Annual Pro ($99/year):</strong> Unlimited usage + API access</li>
        </ul>
        <p>
          We accept all major credit cards and PayPal. Check our <a href="/pricing" className="text-blue-600 hover:underline">pricing page</a> for detailed information.
        </p>
      </div>
    ),
  },
];

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our AI detection and humanization technology.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
} 