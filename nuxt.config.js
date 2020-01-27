export default {
  mode: 'universal',
  generate: {
    dir: 'docs'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-fire',
      {
        config: {
          apiKey: 'AIzaSyDNyOaaiwSIiQneD35Io3U1vMbFh4Z_2PQ',
          authDomain: 'nuxt-sandbox-ngb.firebaseapp.com',
          databaseURL: 'https://nuxt-sandbox-ngb.firebaseio.com',
          projectId: 'nuxt-sandbox-ngb',
          storageBucket: 'nuxt-sandbox-ngb.appspot.com',
          messagingSenderId: '89070211075',
          appId: '1:89070211075:web:005a6babcc4d59fd1d7e36'
          // measurementId: '<measurementId>'
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
