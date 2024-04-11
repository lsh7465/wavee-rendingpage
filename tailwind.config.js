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
    },
  },
  plugins: [],
};
