const withImages = require('next-images');
const path = require('path');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'assets/svg'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
