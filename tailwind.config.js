/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#005DA8",
          secondary: "#cb1112",
          accent : "#1FB2A6",
          neutral : "#FFFFFF",
          "base-100" : "#2A303C",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
