const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
