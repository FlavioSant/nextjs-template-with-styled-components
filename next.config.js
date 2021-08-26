const withPlugins = require('next-compose-plugins');

console.info(`API_URL=${process.env.API_URL}`);
console.info(`APP_VERSION=${process.env.npm_package_version}`);

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    APP_VERSION: process.env.npm_package_version,
  },
};

module.exports = withPlugins([], nextConfig);
