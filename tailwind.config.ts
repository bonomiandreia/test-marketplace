
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
        colors: {
            beige100: '#EEF0DB',
            beige200: '#D8DAC7',
            beige300: '#BCBDAE',
            beige400: '#999A8E',
            beige500: '#818278',

            bluesky100: '#98DBF8',
            bluesky200: '#62C9F4',
            bluesky300: '#56AED4',
            blesky400: '#33A3D3',
            bluesky500: '#1C9BD1',
            
            mindaro100: '#EFFA8E',
            mindaro200: '#DFEA75',
            mindaro300: '#D0DC6D',
            mindaro400: '#B5BE5E',
            mindaro500: '#969E4C',

            orange100: '#F3B97B',
            orange200: '#F4A34A',
            orange300: '#F67A1B',
            orange400: '#CE681A',
            orange500: '#CB5C07',

            blue100: '#88B1F3',
            blue200: '#6599EC',
            blue300: '#4E88E5',
            blue400: '#3E75C4',
            blue500: '#2E6DC6',

            leafGreen100: '#7EF09B',
            leafGreen200: '#59EE7E',
            leafGreen300: '#41EA6A',
            leafGreen400: '#1DAA33',
            leafGreen500: '#0F9D24',

            redWine100: '#F7848A',
            redWine200: '#F1646B',
            redWine300: '#F04C54',
            redWine400: '#D32B34',
            redWine500: '#AE1E25',

            aquaBlue100: '#8AF2F1',
            aquablue200: '#59F3F1',
            aquablue300: '#40DEDB',
            aquablue400: '#15B1CA',
            aquablue500: '#0F8091'

        },
        fontFamily: {
            rethink: ['Rethink Sans', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('tailwindcss-animated')
    ],
  };