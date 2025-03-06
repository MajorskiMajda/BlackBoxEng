import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ["upload.wikimedia.org"],
  },
  basePath: "/black-box-media", 
  assetPrefix: "/black-box-media/",
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};

export default nextConfig;
