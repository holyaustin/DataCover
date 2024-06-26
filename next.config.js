const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
module.exports = {
  webpack5: true,
  // distDir: 'Dist',
  experiments: {
    topLevelAwait: true, 
    },
  webpack: (config) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true }};
    config.resolve.fallback = { fs: false };
    return config;
  },


};