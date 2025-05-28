'use client';

import { cn } from "@/lib/utils"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface NavigationProps {
  className?: string
}

const toolsItems = [
  {
    title: "AI Detector",
    href: "/ai-detector",
    description: "Detect if content is AI-generated"
  },
  {
    title: "Humanizer", 
    href: "/humanizer",
    description: "Make AI content more natural"
  }
]

const navigationItems = [
  {
    title: "Pricing",
    href: "/pricing",
    description: "View pricing plans"
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights and updates"
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Frequently asked questions"
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us"
  }
]

export default function Navigation({ className }: NavigationProps) {
  const [isToolsOpen, setIsToolsOpen] = useState(false)

  return (
    <nav className={cn("hidden md:flex md:items-center md:gap-6", className)}>
      {/* Tools Dropdown */}
      <div className="relative">
        <button
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1"
          onClick={() => setIsToolsOpen(!isToolsOpen)}
          onBlur={() => setTimeout(() => setIsToolsOpen(false), 150)}
        >
          Tools
          <ChevronDown className={cn("h-4 w-4 transition-transform", isToolsOpen && "rotate-180")} />
        </button>
        
        {isToolsOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="p-2">
              {toolsItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsToolsOpen(false)}
                >
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Other Navigation Items */}
      {navigationItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
} 