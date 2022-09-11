/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['vi-VN', 'en-US'],
    defaultLocale: 'vi-VN',
    localeDetection: false,
  },
};

module.exports = nextConfig;
