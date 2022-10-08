import { defineNuxtConfig } from 'nuxt'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     meta: [
  //       {
  //         property: 'og:type',
  //         content: 'website',
  //       },
  //       {
  //         property: 'og:title',
  //         content: 'Maikel Carballo',
  //       },
  //       {
  //         property: 'og:url',
  //         content: 'https://kimael-code.github.io/',
  //       },
  //       {
  //         property: 'og:image',
  //         content:
  //           'https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg',
  //       },
  //       {
  //         property: 'og:description',
  //         content: 'Desarrollador Web Full Stack',
  //       },
  //       {
  //         name: 'twitter:card',
  //         content: 'summary_large_image',
  //       },
  //       {
  //         name: 'twitter:title',
  //         content: 'Maikel Carballo',
  //       },
  //       {
  //         name: 'twitter:site',
  //         content: 'https://kimael-code.github.io/',
  //       },
  //       {
  //         name: 'twitter:creator',
  //         content: '@_kimael_',
  //       },
  //       {
  //         name: 'twitter:image',
  //         content:
  //           'https://pbs.twimg.com/profile_images/1361041473366601728/mYIfVGNd_400x400.jpg',
  //       },
  //       {
  //         name: 'twitter:description',
  //         content: 'Desarrollador Web Full Stack',
  //       },
  //       {
  //         name: 'description',
  //         content: 'Sitio Web Personal de Maikel Carballo',
  //       },
  //       {
  //         name: 'author',
  //         content: 'Maikel Carballo',
  //       },
  //       {
  //         name: 'keywords',
  //         content:
  //           'programador web, desarrollador web, full stack, portafolio, portfolio, web developer',
  //       },
  //     ],
  //   },
  // },
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
  css: ['@/assets/sass/main.scss'],
  router: {
    options: {
      linkExactActiveClass: 'is-active',
    },
  },
  ssr: false,
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
      }),
    ],
    server: {
      host: '0.0.0.0',
    },
  },
})
