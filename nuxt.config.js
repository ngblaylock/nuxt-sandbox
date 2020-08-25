export default {
  mode: 'universal',
  generate: {
    fallback: true,
    dir: 'docs'
  },
  head: {
    title: 'Nuxt',
    titleTemplate: '%s | Sandbox',
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
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [],
  modules: ['bootstrap-vue/nuxt'],
  build: {
    extend(config, ctx) {}
  },
  target: 'static',
  components: true
}
