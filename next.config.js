/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // The theory of change now lives as a section of the Our Model page.
  async redirects() {
    return [
      { source: '/theory-of-change', destination: '/our-model#theory-of-change', permanent: true },
    ]
  },
  // Vercel optimizations
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig

