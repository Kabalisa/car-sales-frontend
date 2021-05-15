module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        gray: {
          250: "#e8e8e8",
          350: "#dedede",
          360: "#808080",
          370: "#333333",
        },
        red: {
          450: "#E03529",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
