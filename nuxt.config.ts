// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/scripts',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-ER6R65RPXM',
      }
    }
  },
  site: {
    url: 'https://inmei.com.br',
    name: 'Inmei | Serviços para seu MEI',
    
  },
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '-'
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})