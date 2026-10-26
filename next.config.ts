import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is entirely client-side, so it is exported as static HTML.
  output: "export",
  trailingSlash: true,
  images: {
    // Exported sites are served without an image optimisation server.
    unoptimized: true,
  },
};

export default nextConfig;
