/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/xesque-dev/challenge-images/',
      },
    ],
  },
}
