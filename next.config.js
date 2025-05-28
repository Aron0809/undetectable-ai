/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 在生产构建时忽略TypeScript错误（可选）
    ignoreBuildErrors: false,
  },
  eslint: {
    // 在生产构建时忽略ESLint错误（可选）
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // 环境变量配置
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // 重定向配置
  async redirects() {
    return []
  },
  // 重写配置
  async rewrites() {
    return []
  },
  // 头部配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 