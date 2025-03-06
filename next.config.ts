import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ["upload.wikimedia.org"],
  },
};

export default nextConfig;
