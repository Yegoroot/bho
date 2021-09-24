const constants = require('./i18Constants')

module.exports = {
  locales: constants.locales,
  defaultLocale: constants.DEFAULT_LANG,
  pages: {
    '*': ['common', 'menu']
  }
}
