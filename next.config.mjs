import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'no'],  // Tilgjengelige språk: engelsk og norsk
    defaultLocale: 'no',    // Standard språk er norsk
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname); // Gjør @ til root-mappen
    return config;
  }
};

export default nextConfig;
