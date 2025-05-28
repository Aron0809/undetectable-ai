import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

const stats = [
  {
    value: "50k+",
    label: "Trusted Users",
    description: "Global users trust our AI detection technology"
  },
  {
    value: "1.2M+",
    label: "Documents Processed",
    description: "Documents successfully passed AI detection systems"
  },
  {
    value: "99.8%",
    label: "Success Rate",
    description: "Industry-leading detection bypass success rate"
  },
  {
    value: "25+",
    label: "Languages",
    description: "Supported languages for AI content humanization"
  }
];

interface StatsProps {
  className?: string;
}

export default function Stats({ className }: StatsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
} 