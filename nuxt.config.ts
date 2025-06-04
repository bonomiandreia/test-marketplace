// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@pinia/nuxt', '@nuxtjs/tailwindcss']
})