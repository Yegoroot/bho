/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(
  ['@mui/material', '@mui/system']
) // pass the modules you would like to see transpiled
const nextTranslate = require('next-translate')
const constants = require('./i18Constants')

require('dotenv').config()

module.exports = nextTranslate(withTM({
  reactStrictMode: true,
  i18n: {
    locales: constants.locales,
    defaultLocale: constants.DEFAULT_LANG,
    localeDetection: false
  },
  env: {
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
    return config
  },
}))
