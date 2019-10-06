import path from 'path'

import activities from './store/api/v1/activities.json'
import blogs from './store/api/v1/blogs.json'
import formaciones from './store/api/v1/formaciones.json'

const www =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.programoergosum.es'
const cdn =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.programoergosum.es'

export default {
  mode: 'universal',

  router: {
    base: '/'
  },
  env: {
    www,
    cdn
  },

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { hreflang: 'es' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      {
        name: 'google-site-verification',
        content: 'FT0Qc7McHBOZwLy1lVLXXNONbp3A_o4MX1gTApbyX6Y'
      }
    ],
    link: [
      { hreflang: 'es' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#eb8059' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/components.js' },
    { src: '~plugins/ga.js', ssr: false }
  ],

  buildModules: [
    // Simple usage
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/vuetify-module/
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    theme: {
      light: true,
      // dark: true,
      themes: {
        light: {
          primary: '#ae4119',
          secondary: '#101a24'
        },
        dark: {
          primary: '#ae4119',
          secondary: '#222222'
        }
      }
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-leaflet'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
   ** Sitemap module configuration
   */
  sitemap: {
    hostname: www,
    gzip: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date()
    },
    exclude: ['/404', '/legal', '/gracias'],
    routes() {
      const a = activities.map(item => {
        return {
          url: `/actividades/${item.alias}`,
          changefreq: 'monthly',
          priority: 0.5,
          lastmod: item.date.mdate
        }
      })
      const b = blogs.map(item => {
        return {
          url: `/blog/${item.alias}`,
          changefreq: 'monthly',
          priority: 0.3,
          lastmod: item.date.mdate
        }
      })
      const f = formaciones.map(item => {
        return {
          url: `/formaciones/${item.alias}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: item.date.mdate
        }
      })
      return a.concat(b).concat(f)
    }
  },

  /*
   ** Generate
   */
  generate: {
    async routes() {
      const p = ['/', '/404', '/legal/coc', '/legal/cookies']
      const a = await activities.map(item => {
        return `/actividades/${item.alias}`
      })
      const b = await blogs.map(item => {
        return `/blog/${item.alias}`
      })
      const f = await formaciones.map(item => {
        return `/formaciones/${item.alias}`
      })
      return Promise.all([p, a, b, f]).then(v => {
        return [...v[0], ...v[1], ...v[2], ...v[3]]
      })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        // Doc: https://www.npmjs.com/package/frontmatter-markdown-loader
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'doc'),
        options: {
          mode: [
            // 'meta',
            // 'html',
            // 'vue-component',
            // 'vue-render-functions',
            'body'
          ],
          vue: {
            root: 'DynamicMarkdown'
          }
        }
      })
    }
  }
}
