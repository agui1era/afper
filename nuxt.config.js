import webpack from 'webpack'
require('dotenv').config()

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',

  server: {
    port: 3000, // default: 3000 
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'blue',
    height: '15px',
    throttle: 0
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/cha.scss',
    '~/assets/css/uikit.css',
    '~/assets/css/roboto.css',
    '~/assets/css/fa.css',
    '~/assets/css/open-iconic.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-28124406-2',
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxt/http',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/axios', 
    'nuxt-hsts-module',
  ],
  hsts: process.env.NODE_ENV === 'production',
  http: {
    proxyHeaders: true,
    proxy: false,
    crossDomain: true
  },
  axios:{
    proxyHeaders: false,
    credentials: false
  },
 


  // nuxt.config.js
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#0C309A',
    background: 'white'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   plugins:[
    new webpack.ProvidePlugin({
      //global modules
      '_': 'lodash'
    })
  ],
    extend (config, ctx) {
    }
  }
  
}
