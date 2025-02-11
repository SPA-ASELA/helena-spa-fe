// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  plugins: [
    '~/plugins/axios.js'
  ],
  tailwindcss: {
    exposeConfig: true,
    configPath: './tailwind.config.js'
  },
})