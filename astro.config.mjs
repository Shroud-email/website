import vue from "@astrojs/vue"
import sitemap from "@astrojs/sitemap"

export default {
  site: "https://shroud.email",
  integrations: [
    vue(),
    sitemap(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
};
