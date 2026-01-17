/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔐 Security & production hardening
  productionBrowserSourceMaps: false,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
