import Hero from "@/components/Hero";
import Items from "@/components/Items";
import SocialProof from "@/components/SocialProof";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      {/* Stats Section */}
      <Stats className="py-20 bg-muted/30" />

      {/* Features Section - Using new Items component */}
      <Items />

      {/* Social Proof Section */}
      <SocialProof />

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
                Select your desired humanization level, from light adjustments to deep rewriting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Get Humanized Content</h3>
              <p className="text-gray-600">
                Within seconds, receive processed content that can bypass AI detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ className="py-20 bg-muted/20" />

      {/* Pricing Section */}
      <Pricing className="py-20" />

      {/* Call to Action - Using new CTA component */}
      <CTA className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
    </div>
  );
} 