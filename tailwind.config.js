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
          180: "#cccccc",
          210: "#b6b8b9",
          220: "#f6f7f8",
          230: "#eef0f1",
          250: "#e8e8e8",
          350: "#dedede",
          360: "#808080",
          365: "#666666",
          370: "#333333",
          380: "#EEEEEE",
          390: "#F5F5F5",
        },
        red: {
          410: "#f23d3d",
          430: "#f2643e",
          450: "#E03529",
        },
        black: {
          110: "#f2f2f2",
          120: "#2b2d2e",
          160: "#595959",
          210: "#000000",
        },
        blue: {
          250: "#0C5582",
          260: "#2aa2e8",
        },
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
