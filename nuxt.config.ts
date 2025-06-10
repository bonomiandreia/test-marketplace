// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', 'nuxt-viewport'],
  viewport: {
    breakpoints: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
    fallbackBreakpoint: 'sm' 
  },
  css: ['@/assets/scss/tailwind.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', 
      },
      title: 'Marketplace Generic',
    }
  }
})