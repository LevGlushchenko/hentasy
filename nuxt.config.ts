// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/element-plus" as *;
            @use "@/assets/scss/index.scss" as *;
          `,
        },
      },
    },
  },
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icons",
  ],
  elementPlus: {
    importStyle: "scss",
  },
  tailwindcss: {
    cssPath: "@/assets/scss/tailwind.scss",
  },
  googleFonts: {
    display: "swap",
    families: {
      Raleway: {
        wght: [400, 600, 700],
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Hentasy",
      bodyAttrs: {
        id: "hentasy",
      },
    },
  },
  runtimeConfig: {
    public: {
      BACKEND_API_URL: process.env.BACKEND_API_URL || "",
      STORAGE_URL: process.env.STORAGE_URL || "",
      TWITTER_URL: process.env.TWITTER_URL || "",
      PATREON_URL: process.env.PATREON_URL || "",
      DISCORD_URL: process.env.DISCORD_URL || "",
      TELEGRAM_URL: process.env.TELEGRAM_URL || "",
      NO_ROBOT: process.env.NO_ROBOT || "true",
    },
  },
});
