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
            backgroundSize:{
                '20': '20px 20px',
            },
            zIndex:{
                '-1': '-1',
            },
            backgroundImage:{
                'gradient-radial-dots': 'radial-gradient(circle, rgba(0, 0, 0, 0.5) 1px, transparent 1px)',
                'gradient-radial-dots_dark': 'radial-gradient(circle, hsl(197, 47%, 97%, 0.5) 1px, transparent 1px)',
            },
            fontSize:{
                large: '5rem'
            },
            boxShadow:{
                'topBtn': '0px 4px 0px 0px rgba(255, 255, 255, 0.25) inset',
                'inner-xl': 'inset 0 0 400px 100px hsl(197, 47%, 97%)',
                'inner-xl_dark': 'inset 0 0 600px 150px hsl(197, 47%, 3%)',
            },
            keyframes: {
                blink: {
                  '0%, 49.9%, 100%': { opacity: '1' },
                  '50%, 99.9%': { opacity: '0' },
                },
              },
              animation: {
                blink: 'blink 0.5s infinite',
              },
        },
    },
    plugins: [],
    darkMode: "selector",
};
