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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
  ],



  // @ts-ignore - augmented by @nuxtjs/sitemap / nuxt-site-config module
  // @ts-ignore - augmented by @nuxtjs/seo module
  site: {
    url: 'https://helenaspa.lk',
    name: 'Helena Spa',
    description: 'Experience ultimate relaxation with Helena Spa. We offer the best massage therapies, spa treatments, and wellness services in Ella, Sri Lanka.',
    defaultLocale: 'en',
  },

  // @ts-ignore - augmented by @nuxtjs/sitemap module
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
    urls: [
      // Static pages
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/about-us', priority: 0.8, changefreq: 'monthly' },
      { loc: '/appointment', priority: 0.9, changefreq: 'weekly' },
      { loc: '/menu-list', priority: 0.8, changefreq: 'monthly' },
      { loc: '/price-list', priority: 0.8, changefreq: 'monthly' },
      { loc: '/shop', priority: 0.8, changefreq: 'weekly' },
      { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
      { loc: '/contact-us', priority: 0.7, changefreq: 'monthly' },
      { loc: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
      { loc: '/terms-conditions', priority: 0.3, changefreq: 'yearly' },
      // Blog posts (static data)
      { loc: '/blog/benefits-of-regular-massage-therapy', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/ultimate-skincare-routine-for-glowing-skin', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/how-to-create-spa-experience-at-home', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/top-10-things-to-do-in-ella-sri-lanka-2026-guide', priority: 0.8, changefreq: 'monthly' },
      { loc: '/blog/complete-guide-to-ayurvedic-massage-in-sri-lanka', priority: 0.8, changefreq: 'monthly' },
      { loc: '/blog/benefits-of-shirodhara-therapy-for-mind-relaxation', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/best-time-to-visit-ella-sri-lanka-weather-guide', priority: 0.8, changefreq: 'monthly' },
      { loc: '/blog/top-wellness-experiences-in-ella-for-tourists', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/what-to-expect-during-your-first-spa-visit', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/natural-skin-care-tips-using-ayurvedic-methods', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/why-tourists-love-ella-sri-lanka', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/stress-relief-techniques-for-modern-life', priority: 0.7, changefreq: 'monthly' },
      { loc: '/blog/best-places-to-relax-in-ela-after-hiking', priority: 0.7, changefreq: 'monthly' },
    ],
  },

  plugins: [
    '~/plugins/axios.js'
  ],

  tailwindcss: {
    exposeConfig: true,
    configPath: './tailwind.config.js'
  },

  app: {
    head: {
      title: 'Helena Spa Sri Lanka | Ayurvedic Spa & Wellness in Ella',
      meta: [
        {
          name: 'description',
          content: 'Experience ultimate relaxation with Helena Spa. We offer massage therapies, Ayurvedic treatments and wellness services in Ella, Sri Lanka.'
        },
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
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5075378095924370',
          async: true,
          crossorigin: 'anonymous'
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-67E8EY2K9T',
          async: true
        },
        {
          innerHTML: `
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
