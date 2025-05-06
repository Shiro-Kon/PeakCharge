/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px", 
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1800px",
    },
    extend: {
      fontFamily: {
        VictorMono: ["Victor Mono", "monospace"],
      },
      
      animation: {
        spin: "spin 1s linear infinite",
        fade: "fadeOut 0.5s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true, 
    }),
  ],
};