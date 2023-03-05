import vue from "@astrojs/vue";
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://shroud.email/",
  integrations: [vue(), tailwind(), sitemap({
    filter: page => page !== 'https://shroud.email/newsletter-success/'
  }), mdx()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  trailingSlash: "always"
});