import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.authomathika.com.br",
        pathname: "/public/img/**",
      },
    ],
  },
};

export default nextConfig;
