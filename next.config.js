/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  staticPageGenerationTimeout: 300
}

module.exports = nextConfig
