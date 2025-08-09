import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com", // change this to your image host
                port: "", // leave empty unless non-standard port
                pathname: "/**", // allow all paths
            },
        ],
    },
};

export default nextConfig;
