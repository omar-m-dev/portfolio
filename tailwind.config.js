const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.scss",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        opaque: "hsla(0,0%,7%,.25)",
        "primary-light": "#232323",
        "primary-dark": "#080808",
        typography: "#ebecf3",
        brand: "#bd5fff",
      },
      fontSize: {
        xs: "1.6rem",
        sm: "1.8rem",
        md: "2.2rem",
        lg: "3.6rem",
        xl: "5.6rem",
        "2xl": "9.6rem",
      },
      gridTemplateColumns: {
        main: "60px 1fr",
      },
      boxShadow: {
        modal: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".writing-vertical-lr": {
          "writing-mode": "vertical-lr",
        },
      });
    }),
  ],
};
