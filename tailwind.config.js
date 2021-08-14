module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00bcd4",
        secondary: "#ffc107",
        accent: {
          first: "#ffc107",
          second: "#ffc107",
        },
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
