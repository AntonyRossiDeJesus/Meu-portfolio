/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["maxdesigns.com.br"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maxdesigns.com.br",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
