/** @type {import('next').NextConfig} */
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
