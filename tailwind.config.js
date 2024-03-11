/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        dark: "#211951",
        light: "#F0F3FF",
        primary: "#836FFF",
        secondary: "#15F5BA",
      },
    },
  },
  plugins: [],
};
