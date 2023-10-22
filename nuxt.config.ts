export default defineNuxtConfig({
  extends: ['@nuxt-themes/alpine', 'nuxt-umami'],
  appConfig: {
    umami: {
      host: 'https://analytics.eu.umami.is',
      id: '41648874-8908-4e0b-ae5b-bc5df5f02d05',
      version: 2,
      debug: true,
    },
  },
  modules: [
    '@nuxt/devtools'
  ],
})
