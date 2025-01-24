/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
    images: {
      domains: ["randomuser.me"],
    },
    experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  };
  
export default nextConfig;
