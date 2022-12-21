/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx,png}","./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('../img/logo.png')",
        'logoDark': "url('../img/logo-dark.png')",
      },
      colors : {
        'primary': '#EE4E34',
        'primary-light': '#E67260',
        'primary-dark': '#C93E2C',
        'secondary' : '#FCEDDA',
        'secondary-dark': '#F1E2D0',
        'secondary-light': '#FCF1E3',
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
