/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'https://psychic-robot-4v6q5vggpr52qqq6-3000.app.github.dev/'],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'remix.run',
      },
      {
        protocol: 'https',
        hostname: 'bigpicturefilmclub.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lambdatest.com',
      },
      {
        protocol: 'https',
        hostname: 'reactrouter.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'react-pocketbase-blog.vercel.app',
      },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'avatar.oxro.io' },
      { protocol: 'https', hostname: 'image.api.playstation.com' },
      { protocol: 'https', hostname: 'www.freecodecamp.org' },
      { protocol: 'https', hostname: 'www.google.com' },
    ],
  },
};

module.exports = nextConfig;
