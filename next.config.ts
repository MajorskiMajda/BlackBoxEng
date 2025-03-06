import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ["upload.wikimedia.org"],
  },
};

export default nextConfig;
