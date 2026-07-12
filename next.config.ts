import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (`out/`) for GitHub Pages — no Node server at runtime.
  output: "export",

  // Served at the root of a custom domain (ai-photo-journey.com), so no base
  // path. BASE_PATH stays configurable for a repo-subpath deploy.
  basePath: process.env.BASE_PATH || undefined,

  // Static export requires the built-in image optimizer to be disabled; we
  // ship pre-sized assets under /public/apps instead.
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
