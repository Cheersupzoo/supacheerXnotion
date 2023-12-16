/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  staticPageGenerationTimeout: 300,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
