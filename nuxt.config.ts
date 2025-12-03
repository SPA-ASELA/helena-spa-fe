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
      meta: [
        // ⭐ Add this ONLY — AdSense verification
        {
          name: "google-adsense-account",
          content: "ca-pub-5075378095924370"
        }
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon.ico'
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico'
        }
      ],

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
