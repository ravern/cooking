require("dotenv/config");

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};
