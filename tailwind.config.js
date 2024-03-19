/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow_btn:"#FEEE00",
        
      },
      container:{
        center:true,
        screens:{
          lg:"1240px"
        }
      }
    },
  },
  plugins: [],
}