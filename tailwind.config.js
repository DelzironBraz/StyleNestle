/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: '#F5EBE0',
        SecundaryColor: '#E3D5CA',
        DarkColor: '#D4A373',
        ExtraDarkColor: '#A98467'
      }
    },
  },
  plugins: [],
}