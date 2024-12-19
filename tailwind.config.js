

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1320px"
      },
      fontFamily: {
        'inter': ['Inter' , 'sans-serif']
      },
      backgroundImage:{
        ban: "url(./src/assets/ban.png)"
      }
    },
  },
  plugins: [],
}