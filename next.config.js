/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ru', 'fi', 'en'],
    defaultLocale: 'fi',
    localeDetection: false,
  },
  // trailingSlash: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['www.datocms-assets.com'],
  },
};

module.exports = nextConfig;
