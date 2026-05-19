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
        inputColor: "#F1F1F1",
        navHeader: "rgba(48, 47, 48, 0.067)"
      },
      animations: {
        bounce: 'animate-bounce',
      },
      container: {
       center:"max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]"
      },
     
    },
  },
  plugins: [],
}