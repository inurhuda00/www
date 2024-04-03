const { createContentlayerPlugin } = require("next-contentlayer")
const createNextIntlPlugin = require("next-intl/plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
}

const withContentlayer = createContentlayerPlugin()
const withNextIntl = createNextIntlPlugin()

module.exports = withNextIntl(withContentlayer(nextConfig))
