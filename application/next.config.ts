/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config:any) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
