// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/scss/global.scss"],
  typescript: {
    shim: false,
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/nested
      pathPrefix: false,
    },
  ],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: "Adrian Tagayom",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

    },

  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/omega.icon' }],
  modules: [
    '@nuxt/image',
  ],
  image: {
    format: ['webp']
  }
})
