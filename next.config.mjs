/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set if deploying to a subpath:
  // basePath: '/website',
  // assetPrefix: '/website/',
};

export default nextConfig;
