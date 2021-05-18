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
          210: "#b6b8b9",
          220: "#f6f7f8",
          230: "#eef0f1",
          250: "#e8e8e8",
          350: "#dedede",
          360: "#808080",
          365: "#666666",
          370: "#333333",
        },
        red: {
          410: "#f23d3d",
          430: "#f2643e",
          450: "#E03529",
        },
        black: {
          120: "#2b2d2e",
          160: "#595959",
          210: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
