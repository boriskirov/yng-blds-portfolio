const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/feed.xml",
        destination: "/api/feed",
      },
      {
        source: "/blog-feed.xml",
        destination: "/api/blog-feed",
      },
      {
        source: "/daynotes-feed.xml",
        destination: "/api/daynotes-feed",
      },
    ];
  },
};

module.exports = nextConfig;
