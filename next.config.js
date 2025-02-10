/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/enplex-docs' : '',
  trailingSlash: true,
  // Ensure static assets are handled correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '/enplex-docs' : '',
  // Disable server components since we're doing static export
  experimental: {
    appDir: false,
  }
}

module.exports = nextConfig