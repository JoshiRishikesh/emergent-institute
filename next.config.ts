import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'behold.pictures', // Covers the exact domain
      },
      {
        protocol: 'https',
        hostname: '**.behold.pictures', // Covers cdn2.behold.pictures
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com', // Covers Instagram's direct image servers
      },
    ],
  },
};

export default nextConfig;