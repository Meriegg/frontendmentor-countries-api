/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-mode-element": "hsl(209, 23%, 22%)",
        "dark-mode-bg": "hsl(207, 26%, 17%)",
        "dark-mode-text": "hsl(0, 0%, 100%)",
        "light-mode-text": "hsl(200, 15%, 8%)",
        "light-mode-input": "hsl(0, 0%, 52%)",
        "light-mode-background": "hsl(0, 0%, 98%)",
        "light-mode-element": "hsl(0, 0%, 100%)",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        desktop: { max: "1440px" },
        mobile: { max: "375px" },
      },
    },
  },
  plugins: [],
};
