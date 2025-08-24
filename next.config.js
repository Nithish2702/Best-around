/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  output: 'export',
  trailingSlash: true,
  images: {
    domains: [
      'images.unsplash.com'
    ],
    unoptimized: true
  },
}

module.exports = nextConfig
