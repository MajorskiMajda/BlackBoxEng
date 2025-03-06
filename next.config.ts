import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures static export for GitHub Pages
  images: {
    unoptimized: true, // Fixes images not working on GitHub Pages
    domains: ["upload.wikimedia.org"], // Allows external images
  },
  basePath: "/black-box-media", // Update if your repo name is different
  assetPrefix: "/black-box-media/",
};

export default nextConfig;

