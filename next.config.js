/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gallery.mei-kai.net",
      },
    ],
  },
};

module.exports = nextConfig;
