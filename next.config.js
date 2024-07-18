

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//       domains: ['flowbite.com','flowbite.s3.amazonaws.com'],
//     },
// }


// module.exports = nextConfig


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.com','flowbite.s3.amazonaws.com','ayurarogyam-assets.s3.ap-south-1.amazonaws.com'],
      },
      experimental: {
        serverActions: true,
      },
}

module.exports = withBundleAnalyzer(nextConfig)

 

 
