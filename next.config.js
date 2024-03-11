/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    esmExternals: "loose"
  },
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
    return config;
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index,follow',
          },
        ],
      },
      {
        source: "/:path",
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index,follow',
          },
        ],
      }
    ]
  }
};

module.exports = nextConfig;
