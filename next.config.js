/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['i.pinimg.com', 'uploads-ssl.webflow.com']
  }
}

module.exports = nextConfig
