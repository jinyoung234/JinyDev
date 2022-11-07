/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
