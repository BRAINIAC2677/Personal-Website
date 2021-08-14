module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#252729",
          light: "#2B3236",
        },
        secondary: "#48B078",
        accent: "#F8C61C",
        ink: "white",
      },

      fontFamily: {
        "permanent-marker": ['"Permanent Marker"', "cursive"],
      },

      animation: {
        "slide-top-right": "slide-top-right .4s ease-in-out",
      },

      keyframes: {
        "slide-top-right": {
          from: {
            "transform-origin": "top right",
            transform: "scale(0)",
            "border-radius": "50%",
          },
          to: { transform: "scale(1)", "border-radius": "0" },
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
