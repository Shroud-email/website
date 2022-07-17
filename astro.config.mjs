import vue from "@astrojs/vue"
import sitemap from "@astrojs/sitemap"

export default {
  site: "https://shroud.email",
  integrations: [
    vue(),
    sitemap({
      filter: (page) => page !== 'https://shroud.email/newsletter-success/'
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
};
