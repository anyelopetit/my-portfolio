/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig
