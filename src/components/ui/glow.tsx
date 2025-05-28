import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const glowVariants = cva(
  "absolute pointer-events-none",
  {
    variants: {
      variant: {
        top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl",
        bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl",
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl",
      },
    },
    defaultVariants: {
      variant: "center",
    },
  }
)

interface GlowProps extends VariantProps<typeof glowVariants> {
  className?: string
}

export default function Glow({ variant, className }: GlowProps) {
  return (
    <div className={cn(glowVariants({ variant }), className)} />
  )
} 