import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services-1",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/appointments",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
