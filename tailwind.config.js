/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        // Primary colors
        primary800: "#1E1B22",
        primary700: "#221F26",
        primary600: "#27232B",
        primary500: "#2B2730",
        primary400: "#403D45",
        primary300: "#555259",
        primary200: "#6B686E",
        primary100: "#AAA9AC",

        // Accent colors
        accent800: "#b38135",
        accent700: "#cc933d",
        accent600: "#e6a644",
        accent500: "#FFB84C",
        accent400: "#ffbf5e",
        accent300: "#ffc670",
        accent200: "#FFCD82",

        // Other
        whiteShade: "#F6F6F6",
      },
      keyframes: {
        "translate-x-reverse": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "translate-x-reverse": "translate-x-reverse 30s linear infinite",
        "translate-x-reverse-slowed": "translate-x-reverse 50s linear infinite",
      },
      screens: {
        'custom': '1000px',
          xs: '300px',
          xlMobile: '600px',
          'xs300': '300px',
      },
    },
  },
  plugins: [],
};
