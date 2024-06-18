/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "hsl(198, 56%, 8%)",
                background: "hsl(197, 47%, 97%)",
                primary: "hsl(202, 57%, 25%)",
                secondary: "hsl(2, 57%, 66%)",
                accent: "hsl(60, 57%, 44%)",

                text_dark: "hsl(198, 56%, 92%)",
                background_dark: "hsl(197, 47%, 3%)",
                primary_dark: "hsl(202, 57%, 75%)",
                secondary_dark: "hsl(2, 57%, 34%)",
                accent_dark: "hsl(60, 57%, 56%)",
            },
            fontSize:{
                large: '5rem'
            }
        },
    },
    plugins: [],
    darkMode: "selector",
};
