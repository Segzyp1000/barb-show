/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: "#1F3E97",
        inputColor: "#F1F1F1"
      },
      animations: {
        bounce: 'animate-bounce',
      },
      container: {
        center: true,
      },
    
    },
  },
  plugins: [],
}