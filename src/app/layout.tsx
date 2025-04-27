import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Undetectable.ai | Best AI Detector & Humanizer Tool',
  description: 'Undetectable.ai - The best AI detector that checks AI content and humanizes AI-generated text to bypass detection tools. 100% human-like results guaranteed.',
  keywords: 'undetectable ai, ai detector, ai humanizer, bypass ai detection, best ai detector, human ai content, ai content detector',
  authors: [{ name: 'Undetectable AI Team' }],
  creator: 'Undetectable AI',
  publisher: 'Undetectable AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://undetectable-ai.com',
    siteName: 'Undetectable AI',
    title: 'Undetectable.ai | Best AI Detector & Humanizer Tool',
    description: 'Undetectable.ai - The best AI detector that checks AI content and humanizes AI-generated text to bypass detection tools.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Undetectable AI'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Undetectable.ai | Best AI Detector & Humanizer Tool',
    description: 'Undetectable.ai - The best AI detector that checks AI content and humanizes AI-generated text to bypass detection tools.',
    images: ['/images/twitter-image.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 