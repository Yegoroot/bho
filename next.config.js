/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de', 'fr'],
  // },
  env: {
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(__dirname, 'components'),
      src: path.join(__dirname, 'src'),
      public: path.join(__dirname, 'public')
    }
    return config
  },
}
