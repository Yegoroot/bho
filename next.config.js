const nextTranslate = require('next-translate')
const constants = require('./i18Constants')

module.exports = {
  ...nextTranslate(),
  reactStrictMode: false,
  i18n: {
    locales: constants.locales,
    defaultLocale: constants.DEFAULT_LANG,
    localeDetection: false
  },
}
