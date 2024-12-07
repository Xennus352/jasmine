import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        // Pattern for GitHub avatars

        protocol: "https",

        hostname: "avatars.githubusercontent.com",

        port: "", // Leave empty for default port

        pathname: "/**", // Allow all paths
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/auth/signin",

        destination: "/auth/signin",

        permanent: false,
      },
    ];
  },
};

export default nextConfig;
