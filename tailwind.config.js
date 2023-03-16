/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"'],
      },
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1728px",
      // => @media (min-width: 1728px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1728px) { ... }
    },
    colors: {
      mainDarkGray: "#282728",
      mainLightGray: "#6D6D6D",
      white: "#fff",
      neonGreen: "#B6FF75",
      darkModeGray6: "#F2F2F2",
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
};
