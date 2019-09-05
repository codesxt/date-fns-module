module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../../') }
  ],
  dateFns: {
    locales: ['es', 'ru', 'pt-BR'],
    defaultLocale: 'en-US',
    format: 'yyyy-MM-dd'
  }
}
