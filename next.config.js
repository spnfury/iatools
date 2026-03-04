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
        destination: 'https://clase-plausible.s0e6bf.easypanel.host/js/script.js'
      },
      {
        source: '/proxy/api/event',
        destination: 'https://clase-plausible.s0e6bf.easypanel.host/api/event'
      }
    ]
  }
}

module.exports = nextConfig 