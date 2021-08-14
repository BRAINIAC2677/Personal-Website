module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "30rem",
      },

      colors: {
        primary: {
          dark: "#252729",
          light: "#2B3236",
        },
        secondary: "#3966BF",
        accent: "#F8C61C",
        ink: "white",
      },

      fontFamily: {
        "permanent-marker": ['"Permanent Marker"', "cursive"],
      },

      boxShadow: {
        "right-bottom": "10px -10px 0 -2px #252729,10px -10px #3966BF",
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
