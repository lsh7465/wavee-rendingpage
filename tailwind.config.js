/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // `src` directory를 사용한다면
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-skyblue": "#4E9EEE",
        "regal-blue": "#0075FF",
        "regal-purple": "#8c61e9",
      },
      fontFamily: {
        audiowide: ["Audiowide", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
      },
      screens: {
        "2sm": { max: "430px" },
        // => @media (mam-width: 430px) { ... }

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }

        "3xl": { min: "1670px" },
        // => @media (min-width: 1670px) { ... }
      },
      lineHeight: {
        11: "3.8rem",
        12: "5.3rem",
      },
      width: {
        104: "28rem",
        105: "30rem",
      },
    },
  },
  plugins: [],
};
