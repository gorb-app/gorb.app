// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  app: {
    head: {
      title: 'Gorb - The Chat App',
      // this is purely used to embed in that other chat app, and similar stuff
      meta: [
        { property: 'og:title', content: 'Gorb - The Federated Chat App' },
        { property: 'og:description', content: 'GORB! The open-source and federated chat application!' },
        // { property: 'og:image', content: 'missing' },
        { property: 'og:url', content: 'https://gorb.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Gorb' },
        { property: 'theme-color', content: "#c200c2" }
      ]
    }
  }
})