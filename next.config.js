require("dotenv/config");

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
  images: {
    domains: [process.env.SUPABASE_STORAGE_HOSTNAME],
  },
  reactStrictMode: true,
  sentry: {
    disableServerWebpackPlugin: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
