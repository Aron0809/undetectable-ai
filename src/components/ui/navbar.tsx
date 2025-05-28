import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface NavbarProps {
  children: ReactNode
  className?: string
}

interface NavbarSectionProps {
  children: ReactNode
  className?: string
}

export function Navbar({ children, className }: NavbarProps) {
  return (
    <nav className={cn(
      "flex h-16 items-center justify-between px-4",
      className
    )}>
      {children}
    </nav>
  )
}

export function NavbarLeft({ children, className }: NavbarSectionProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {children}
    </div>
  )
}

export function NavbarRight({ children, className }: NavbarSectionProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {children}
    </div>
  )
} 