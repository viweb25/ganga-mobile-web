import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // 1. Enable Static Export
  output: 'export',
  // 2. Disable Image Optimization (Hostinger Shared doesn't support the Node server needed for this)
  images: {
    unoptimized: true,
  },
  // 3. Optional: If your site is in a subfolder (e.g., domain.com/portfolio)
  // basePath: '/portfolio',
};

export default nextConfig;