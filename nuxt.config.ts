const APP_NAME = 'Instagram Image Viewer'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    APP_SECRET: import.meta.env.INSTAGRAM_APP_SECRET,
    public: {
      APP_ID: import.meta.env.INSTAGRAM_APP_ID,
      REDIRECT_URL: import.meta.env.INSTAGRAM_REDIRECT_URL,
      API_DOMAIN: import.meta.env.INSTAGRAM_API_DOMAIN,
      API_VERSION: import.meta.env.INSTAGRAM_API_VERSION
    }
  },
  tailwindcss: {
    viewer: false
  },
  app: {
    rootId: 'app',
    head: {
      title: APP_NAME,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Ubuntu:wght@400;700&display=swap' }
      ],
    }
  }
})
