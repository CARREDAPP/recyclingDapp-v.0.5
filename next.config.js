/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
      topLevelAwait: true,
    };
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = nextConfig
