const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
}
