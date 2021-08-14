module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#111111",
          light: "#212529",
        },
        secondary: "green",
        accent: "yellow",
        ink: "white",
      },

      animation: {
        "appear-center": "appear-center .4s ease-in-out",
      },

      keyframes: {
        "appear-center": {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
      transform: ["hover"],
    },
  },
  plugins: [],
};
