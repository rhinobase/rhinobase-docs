/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = withMDX({
  images: {
    domains: ["via.placeholder.com"],
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
});

module.exports = nextConfig;
