/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'no'],  // Tilgjengelige språk: engelsk og norsk
    defaultLocale: 'no',    // Standard språk er norsk
  },
};

export default nextConfig;
