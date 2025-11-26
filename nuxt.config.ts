// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
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
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-67E8EY2K9T',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-67E8EY2K9T');
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})