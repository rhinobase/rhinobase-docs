/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  redirects: () => [
    {
      source: "/discord",
      destination: "https://discord.gg",
      permanent: true,
    },
    // GENERAL
    {
      source: "/articles",
      destination: "https://www.rhinobase.io/articles",
      permanent: true,
    },
  ],
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = nextConfig;
