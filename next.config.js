module.exports = {
  
  reactStrictMode: true,

  // import svg as components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  //checks for host of domain
    images: {
      domains: ['assets.https://unsplash.com'],
    },
};