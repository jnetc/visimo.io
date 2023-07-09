/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['fi', 'en', 'sv'],
    defaultLocale: 'fi',
    localeDetection: false,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['www.datocms-assets.com'],
  },
};

module.exports = nextConfig;
