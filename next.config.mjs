/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🔐 Security & production hardening
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
