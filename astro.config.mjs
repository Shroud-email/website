export default {
  buildOptions: {
    site: "https://shroud.email",
    sitemap: true,
  },
  renderers: [
    "@astrojs/renderer-vue"
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
};
