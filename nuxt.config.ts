// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  css: [
    '@/public/variables.css',
    '@/public/global.css'
  ],
  app: {
    head: {
      title: 'Gorb - Open-Source Chat Platform',
      // this is purely used to embed in that other chat app, and similar stuff
      meta: [
        { property: 'og:title', content: 'Gorb - Open-Source Chat Platform' },
        { property: 'og:description', content: 'Gorb is an open-source (and eventually federated) chat platform where you\'ll be able to join and chat in servers, chat privately in DMs, and more.' },
        { property: 'og:url', content: 'https://gorb.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Gorb' },
        { property: 'theme-color', content: "#df5f0b" }
      ],
      link: [
        { rel: "canonical", href: "https://gorb.app" },
      ]
    }
  }
})