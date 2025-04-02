/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  optimizeFonts: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://iatools.shop' : '',
  async rewrites() {
    return [
      {
        source: '/proxy/script.js',
        destination: 'https://plausible.miprimermvp.com/js/script.js'
      },
      {
        source: '/proxy/api/event',
        destination: 'https://plausible.miprimermvp.com/api/event'
      }
    ]
  }
}

module.exports = nextConfig 