import { ReactNode } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

interface CTAProps {
  variant?: ButtonProps["variant"];
  label: string;
  href: string;
}

export interface PricingColumnProps {
  name: string;
  icon?: ReactNode;
  description: string;
  price: number;
  priceNote?: string;
  cta: CTAProps;
  features: string[];
  variant?: "default" | "glow" | "glow-brand";
  className?: string;
}

export function PricingColumn({
  name,
  icon,
  description,
  price,
  priceNote,
  cta,
  features,
  variant = "default",
  className,
}: PricingColumnProps) {
  const isPopular = variant === "glow-brand";
  
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-lg border bg-card p-6 shadow-sm",
        {
          "border-primary shadow-lg ring-2 ring-primary/20": isPopular,
          "border-border": !isPopular,
        },
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          {price === 0 ? (
            <span className="text-3xl font-bold">Free</span>
          ) : (
            <>
              <span className="text-3xl font-bold">${price}</span>
              <span className="text-muted-foreground">
                {name.includes("Annual") ? "/year" : "/month"}
              </span>
            </>
          )}
        </div>
        {priceNote && (
          <p className="text-xs text-muted-foreground mt-1">{priceNote}</p>
        )}
      </div>
      
      <Button
        variant={cta.variant || "default"}
        size="lg"
        className="w-full mb-6"
        asChild
      >
        <a href={cta.href}>{cta.label}</a>
      </Button>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 