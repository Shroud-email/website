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
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.fog.min.js" },
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
