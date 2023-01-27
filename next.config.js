/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/budget",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
