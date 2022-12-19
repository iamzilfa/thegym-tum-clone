/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        RobotoItalic: ["RobotoItalic", "sans-serif"],
        RobotoBold: ["RobotoBold", "sans-serif"],
      },
      colors: {
        Sapphire: "#072140",
        NavyBlue: "#0A2D57",
        LightBlue: "#3070B3",
        Dusk: "#EFEDFC",
        Orange: "#EA7237",
        BlueViolet: "#8F81EA",
        PearlyPurple: "#B55CA5",
        Yellow: "#F7B11E",
        Lightyellow: "#FED702",
      },
      letterSpacing: {
        tum: "0.0125rem",
      },
      lineHeight: {
        heroline: "3.3rem",
      },
      backgroundImage: {
        banner:
          "linear-gradient(to left, rgb(37, 85, 141) 0%, 70%)",
      },
    },
  },
  plugins: [],
};
