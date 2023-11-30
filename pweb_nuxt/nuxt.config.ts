// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/http', '@nuxt/content'],

  ssr: false,

  css: [
    'aos/dist/aos.css',
    '@/assets/styles.css', 
  ],
})
