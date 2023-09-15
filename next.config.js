/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.com','flowbite.s3.amazonaws.com'],
      },
      experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
