/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#ffdfe7",
        darkMain: "#42383d",
        cubeYellow: "#fcf064",
        cubeRed: "#ff6961",
        cubeBlue: "#1e90ff",
        cubeWhite: "#ffffff",
        cubeOrange: "#ffb347",
        cubeGreen: "#77dd77",
        cubeGray: "#d0c9c9",
      },
      transitionProperty: {
        size: "width, height"
      }
    },
  },
  plugins: [],
  darkMode: "class",
};

