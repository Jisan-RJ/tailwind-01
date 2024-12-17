

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1200px"
      },
      fontFamily: {
        'kan': ['Kanit' , 'sans-serif']
      },
      backgroundImage:{
        ban: "url(./src/assets/banner.png)"
      }
    },
  },
  plugins: [],
}