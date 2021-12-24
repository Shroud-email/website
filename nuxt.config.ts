import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    "~/assets/css/tailwind.css"
  ],
  meta: {
    title: "Shroud.email",
    link: [
      { rel: "stylesheet", href: "/fonts/inter/inter.css"},
      { rel: "stylesheet", href: "/fonts/carter-one/carter-one.css"}
    ]
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
