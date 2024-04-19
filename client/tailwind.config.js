/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors:{
            text: 'hsl(228, 38%, 5%)',
            background: 'hsl(235, 40%, 94%)',
            primary: 'hsl(233, 41%, 26%)',
            secondary: 'hsl(5, 41%, 66%)',
            accent: 'hsl(47, 41%, 48%)',
            text_dark: 'hsl(228, 38%, 95%)',
            background_dark: 'hsl(235, 40%, 6%)',
            primary_dark: 'hsl(233, 41%, 74%)',
            secondary_dark: 'hsl(5, 41%, 34%)',
            accent_dark: 'hsl(47, 41%, 52%)',
        }
    },
  },
  plugins: [],
  darkMode: "class"
};
