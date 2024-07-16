/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://tsrhwvjpqxwwxoikqgxo.supabase.co/storage/v1/object/public/thumbnails/imgs/Apple.jpg",
      },
    ],
  },
};

export default nextConfig;
