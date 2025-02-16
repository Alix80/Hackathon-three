/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**", // Agar specific path hai to use karo, warna /** rakho
      },
    ],
  },
};

export default nextConfig;
