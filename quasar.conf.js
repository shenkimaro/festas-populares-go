/* eslint-env node */

module.exports = function (ctx) {
  return {
    app: {
      name: 'Festas Populares Goiás',
      version: '0.1.0'
    },

    boot: [],

    css: ['app.scss'],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari14'],
        node: 'node18'
      },

      vueRouterMode: 'hash',
      vitePlugins: [],

      env: {
        API: ctx.dev ? 'http://localhost:3000' : 'https://api.festaspopulares.com'
      }
    },

    devServer: {
      open: true,
      port: 8080,
      https: false
    },

    framework: {
      config: {
        brand: {
          primary: '#C41E3A',
          secondary: '#FFD700',
          accent: '#8B4513'
        }
      },

      iconSet: 'material-icons',
      lang: 'pt-br',
      components: [],
      directives: [],
      plugins: ['Notify', 'Loading']
    },

    animations: 'all',

    ssr: {
      pwa: false
    },

    pwa: {
      workboxPluginMode: 'GenerateSW'
    },

    cordova: {},

    electron: {}
  }
}
