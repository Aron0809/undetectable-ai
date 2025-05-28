export const siteConfig = {
  name: "Undetectable AI",
  description: "AI Content Humanizer and Detector - Make AI-generated content more natural and undetectable",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  getStartedUrl: "/humanizer",
  links: {
    twitter: "https://twitter.com/undetectable_ai",
    github: "https://github.com/undetectable-ai",
  },
  creator: "Undetectable AI Team",
  stats: {
    users: 50000,
    documents: 1200000,
    accuracy: 99.8,
    languages: 25,
  },
  pricing: {
    monthly: "/pricing?plan=monthly",
    yearly: "/pricing?plan=yearly",
  },
}

export type SiteConfig = typeof siteConfig 