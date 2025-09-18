import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for Cloudflare Workers deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
