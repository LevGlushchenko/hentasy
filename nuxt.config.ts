// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/index.scss" as *;
          `
        }
      }
    }
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  elementPlus: {
    importStyle: 'scss'
  },
  tailwindcss: {
    cssPath: '@/assets/scss/tailwind.scss',
  },
})
