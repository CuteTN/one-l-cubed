/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        main: "#ffdfe7",
        darkMain: "#ffdfe7",
        cubeYellow: "#fcf064",
        cubeRed: "#ff6961",
        cubeBlue: "#1e90ff",
        cubeWhite: "#ffffff",
        cubeOrange: "#ffb347",
        cubeGreen: "#77dd77",
        cubeGray: "#d0c9c9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

