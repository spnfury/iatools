/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://plausible.miprimermvp.com/js/script.js'
      },
      {
        source: '/api/event',
        destination: 'https://plausible.miprimermvp.com/api/event'
      }
    ]
  }
}

module.exports = nextConfig 