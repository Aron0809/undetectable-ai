import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ItemProps {
  children: ReactNode
  className?: string
}

interface ItemTitleProps {
  children: ReactNode
  className?: string
}

interface ItemDescriptionProps {
  children: ReactNode
  className?: string
}

interface ItemIconProps {
  children: ReactNode
  className?: string
}

export function Item({ children, className }: ItemProps) {
  return (
    <div className={cn(
      "flex flex-col gap-3 p-4 sm:p-6 transition-colors duration-200 hover:bg-muted/50 rounded-lg",
      className
    )}>
      {children}
    </div>
  )
}

export function ItemTitle({ children, className }: ItemTitleProps) {
  return (
    <h3 className={cn(
      "text-lg font-semibold text-foreground",
      className
    )}>
      {children}
    </h3>
  )
}

export function ItemDescription({ children, className }: ItemDescriptionProps) {
  return (
    <p className={cn(
      "text-sm text-muted-foreground leading-relaxed",
      className
    )}>
      {children}
    </p>
  )
}

export function ItemIcon({ children, className }: ItemIconProps) {
  return (
    <div className={cn(
      "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary",
      className
    )}>
      {children}
    </div>
  )
} 