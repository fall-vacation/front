/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dbscthumb-phinf.pstatic.net", "search.pstatic.net"],
  },
  async redirects() {
    return [
      {
        source: "/old-about",
        destination: "/new-about",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/posts",
        destination: "https://jsonplaceholder.typicode.com/posts",
      },
    ];
  },
};

module.exports = nextConfig;
