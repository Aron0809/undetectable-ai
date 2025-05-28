"use client"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { 
  Testimonial, 
  TestimonialAvatar, 
  TestimonialContent, 
  TestimonialAuthor, 
  TestimonialText 
} from "@/components/ui/testimonial"

interface TestimonialData {
  id: string
  name: string
  handle: string
  avatar: string
  content: string
  highlight?: string
}

interface SocialProofProps {
  title?: string
  subtitle?: string
  className?: string
}

const testimonials: TestimonialData[] = [
  {
    id: "1",
    name: "Sarah Chen",
    handle: "@sarahc_writer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Undetectable AI has revolutionized my content creation process. The humanization quality is incredible - my AI-generated articles now pass all detection tools while maintaining perfect readability.",
    highlight: "@undetectable_ai"
  },
  {
    id: "2", 
    name: "Michael Rodriguez",
    handle: "@mike_research",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "As a researcher, I need content that's both accurate and undetectable. This tool delivers exactly that - 99.8% success rate isn't just marketing, it's reality.",
    highlight: "@undetectable_ai"
  },
  {
    id: "3",
    name: "Emily Johnson",
    handle: "@emily_marketing",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", 
    content: "The speed and quality are unmatched. I can humanize entire blog posts in seconds, and they read like they were written by a professional copywriter.",
    highlight: "@undetectable_ai"
  },
  {
    id: "4",
    name: "David Kim",
    handle: "@davidk_tech",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Finally, an AI humanizer that actually works! My technical documentation now passes all AI detectors while keeping the technical accuracy intact.",
    highlight: "@undetectable_ai"
  },
  {
    id: "5",
    name: "Lisa Wang",
    handle: "@lisa_academic",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content: "Perfect for academic writing. The tool maintains scholarly tone while making content completely undetectable. Essential for my research work.",
    highlight: "@undetectable_ai"
  },
  {
    id: "6",
    name: "James Thompson",
    handle: "@james_business",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    content: "Game-changer for business content. Our marketing materials now have that human touch that AI detectors can't identify. ROI has been incredible.",
    highlight: ""
  },
  {
    id: "7",
    name: "Anna Petrov",
    handle: "@anna_creative",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "The creative writing mode is phenomenal. My AI-generated stories now have natural flow and personality that readers love. @undetectable_ai is a must-have tool!",
    highlight: "@undetectable_ai"
  },
  {
    id: "8",
    name: "Robert Lee",
    handle: "@rob_consultant",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    content: "Client reports that used to take hours now take minutes. The humanization is so good that clients think I wrote everything myself. Absolutely brilliant!",
    highlight: "@undetectable_ai"
  }
]

// 复制数组以创建无缝循环
const firstRow = [...testimonials, ...testimonials]
const secondRow = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]

function TestimonialCard({ testimonial }: { testimonial: TestimonialData }) {
  const renderContent = (content: string, highlight: string) => {
    if (!highlight) return content
    
    const parts = content.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="text-primary font-medium">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <Testimonial className="mx-2">
      <TestimonialAvatar 
        src={testimonial.avatar} 
        alt={testimonial.name}
      />
      <TestimonialContent>
        <TestimonialAuthor 
          name={testimonial.name} 
          handle={testimonial.handle}
        />
        <TestimonialText>
          {renderContent(testimonial.content, testimonial.highlight || "")}
        </TestimonialText>
      </TestimonialContent>
    </Testimonial>
  )
}

export default function SocialProof({
  title = "Trusted by Users and Developers Worldwide",
  subtitle = "Join thousands of satisfied users who rely on our AI detection and humanization technology.",
  className
}: SocialProofProps) {
  return (
    <Section className={cn("bg-background relative overflow-hidden", className)}>
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-container mx-auto text-center mb-16">
        <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      </div>

      <div className="relative">
        {/* 左右渐变遮罩 */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* 第一行 - 向左滚动 */}
        <div className="flex mb-8 animate-scroll-left">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* 第二行 - 向右滚动 */}
        <div className="flex animate-scroll-right">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`second-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </Section>
  )
} 