import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export default function LaunchUI({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
        <span className="text-sm font-bold text-white">AI</span>
      </div>
    </div>
  )
} 