const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  env: {
        mongodburl: "mongodb+srv://rinat-amir:123098zxc@cluster0.nwg0x.mongodb.net/bhodb?retryWrites=true&w=majority",
  }
}
