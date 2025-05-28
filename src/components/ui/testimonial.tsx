import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface TestimonialProps {
  children: ReactNode
  className?: string
}

interface TestimonialAvatarProps {
  src: string
  alt: string
  className?: string
}

interface TestimonialContentProps {
  children: ReactNode
  className?: string
}

interface TestimonialAuthorProps {
  name: string
  handle: string
  className?: string
}

export function Testimonial({ children, className }: TestimonialProps) {
  return (
    <div className={cn(
      "flex gap-3 p-4 rounded-xl bg-card border border-border/50 backdrop-blur-sm min-w-[320px] max-w-[400px]",
      className
    )}>
      {children}
    </div>
  )
}

export function TestimonialAvatar({ src, alt, className }: TestimonialAvatarProps) {
  return (
    <div className="flex-shrink-0">
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-10 h-10 rounded-full object-cover",
          className
        )}
      />
    </div>
  )
}

export function TestimonialContent({ children, className }: TestimonialContentProps) {
  return (
    <div className={cn("flex-1 min-w-0", className)}>
      {children}
    </div>
  )
}

export function TestimonialAuthor({ name, handle, className }: TestimonialAuthorProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-2", className)}>
      <span className="font-semibold text-foreground text-sm">{name}</span>
      <span className="text-muted-foreground text-sm">@{handle}</span>
    </div>
  )
}

export function TestimonialText({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={cn("text-sm text-muted-foreground leading-relaxed", className)}>
      {children}
    </p>
  )
} 