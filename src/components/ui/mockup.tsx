import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ReactNode } from "react"

const mockupFrameVariants = cva(
  "relative mx-auto",
  {
    variants: {
      size: {
        small: "max-w-4xl",
        medium: "max-w-5xl",
        large: "max-w-6xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
)

const mockupVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      type: {
        browser: "rounded-t-lg border border-b-0",
        phone: "rounded-3xl border aspect-[9/19.5]",
        tablet: "rounded-2xl border aspect-[4/3]",
        responsive: "rounded-xl border",
      },
    },
    defaultVariants: {
      type: "browser",
    },
  }
)

interface MockupFrameProps extends VariantProps<typeof mockupFrameVariants> {
  children: ReactNode
  className?: string
}

interface MockupProps extends VariantProps<typeof mockupVariants> {
  children: ReactNode
  className?: string
}

export function MockupFrame({ children, size, className }: MockupFrameProps) {
  return (
    <div className={cn(mockupFrameVariants({ size }), className)}>
      {children}
    </div>
  )
}

export function Mockup({ children, type, className }: MockupProps) {
  return (
    <div className={cn(mockupVariants({ type }), className)}>
      {type === "browser" && (
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="h-6 bg-white rounded border px-3 flex items-center text-xs text-gray-500">
              undetectable-ai.com
            </div>
          </div>
        </div>
      )}
      <div className="relative">
        {children}
      </div>
    </div>
  )
} 