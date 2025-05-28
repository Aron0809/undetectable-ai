import { 
  Zap, 
  Shield, 
  Search, 
  Settings, 
  Globe, 
  CheckCircle, 
  Clock, 
  Star 
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Item, ItemTitle, ItemDescription, ItemIcon } from "@/components/ui/item";

const features = [
  {
    icon: Shield,
    title: "Bypass Detection",
    description: "Advanced algorithms ensure content passes all AI detection tools"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process content in seconds, no waiting required"
  },
  {
    icon: Search,
    title: "Smart Detection",
    description: "Accurately identify AI-generated content with precision"
  },
  {
    icon: Settings,
    title: "Flexible Control",
    description: "Multiple humanization levels to choose from"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for 25+ languages processing"
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Maintain original meaning and logic"
  },
  {
    icon: Clock,
    title: "Real-time Processing",
    description: "Get instant results immediately"
  },
  {
    icon: Star,
    title: "Professional Results",
    description: "Quality comparable to human writing"
  }
];

interface ItemsProps {
  className?: string;
}

export default function Items({ className }: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our AI Detection & Humanization Technology?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the most advanced AI content processing technology with unmatched accuracy and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Item key={index}>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <feature.icon className="size-5 stroke-1" />
                </ItemIcon>
                {feature.title}
              </ItemTitle>
              <ItemDescription>{feature.description}</ItemDescription>
            </Item>
          ))}
        </div>
      </div>
    </Section>
  );
} 