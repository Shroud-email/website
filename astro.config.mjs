import vue from "@astrojs/vue";
import icon from "astro-icon";
import { defineConfig, envField } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://shroud.email/",

  integrations: [vue(), icon(), sitemap({
    filter: page => page !== 'https://shroud.email/newsletter-success/'
  }), mdx()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["svgo"]
    }
  },

  trailingSlash: "always",
  adapter: cloudflare(),

  env: {
    schema: {
      LOOPS_API_KEY: envField.string({ context: "server", "access": "secret"})
    }
  }
});