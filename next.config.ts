import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org'], // Allow this domain for external images
  },
};

export default nextConfig;
