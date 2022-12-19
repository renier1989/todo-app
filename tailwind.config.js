/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        'primary': '#EE4E34',
        'primary-light': '#ee4e347d',
        'primary-dark': '#c1321b',
        'secondary' : '#FCEDDA',
        'secondary-dark': '#cdc0af',
        'secondary-light': '#fff9f1',
      },
      backgroundImage: {
        'logo': "url('./public/logo.png')",
      },
      backgroundColor:theme =>({
        ...theme('colors'),
        'primary' : '#EE4E34',
        'secondary' : '#FCEDDA',
      }),
      textColor : {
        'primary' : '#EE4E34',
        'secondary' : '#FCEDDA',
      },
      fontFamily : {
        'Abel' : ['Abel', 'san-serif'],
      }
    },
  },
  plugins: [],
}
