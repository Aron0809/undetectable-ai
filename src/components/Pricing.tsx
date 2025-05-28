import { User, Users, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PricingColumn } from "@/components/ui/pricing-column";
import { siteConfig } from "@/config/site";

const pricingPlans = [
  {
    name: "Free Plan",
    icon: <Zap className="size-4" />,
    description: "Perfect for trying out our AI detection and humanization tools",
    price: 0,
    priceNote: "Forever free with basic features",
    cta: {
      variant: "outline" as const,
      label: "Get Started Free",
      href: "/signup",
    },
    features: [
      "3 AI detections per day",
      "2 text humanizations per day", 
      "1,000 character limit",
      "Basic support",
      "Standard processing speed"
    ],
    variant: "default" as const
  },
  {
    name: "Monthly Pro",
    icon: <User className="size-4" />,
    description: "Ideal for regular users and content creators",
    price: 9,
    priceNote: "Billed monthly, cancel anytime",
    cta: {
      variant: "default" as const,
      label: "Start Monthly Plan",
      href: siteConfig.pricing.monthly,
    },
    features: [
      "50 AI detections per day",
      "100 text humanizations per day",
      "Unlimited characters",
      "Priority support",
      "Fast processing speed",
      "Advanced humanization options"
    ],
    variant: "glow-brand" as const
  },
  {
    name: "Annual Pro",
    icon: <Users className="size-4" />,
    description: "Best value for power users and businesses",
    price: 99,
    priceNote: "Billed annually, save 18%",
    cta: {
      variant: "default" as const,
      label: "Start Annual Plan",
      href: siteConfig.pricing.yearly,
    },
    features: [
      "Unlimited AI detections",
      "Unlimited text humanizations",
      "Unlimited characters",
      "Premium support",
      "Fastest processing speed",
      "API access",
      "Custom integrations",
      "Priority processing"
    ],
    variant: "glow" as const
  }
];

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Perfect Plan for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start free and upgrade when you need more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingColumn
              key={index}
              name={plan.name}
              icon={plan.icon}
              description={plan.description}
              price={plan.price}
              priceNote={plan.priceNote}
              cta={plan.cta}
              features={plan.features}
              variant={plan.variant}
            />
          ))}
        </div>
      </div>
    </Section>
  );
} 