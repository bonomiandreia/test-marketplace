
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './composables/**/*.{js,ts}',
      './plugins/**/*.{js,ts}',
      './App.{js,ts,vue}',
      './app.{js,ts,vue}',
    ],
    theme: {
      extend: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
        colors: {},
        fontFamily: {
            sans: [...defaultTheme.fontFamily.sans], 
            rethink: ["'Rethink Sans'", ...defaultTheme.fontFamily.sans],
          },
      },
    },
    plugins: [
      require('tailwindcss-animated')
    ],
  };