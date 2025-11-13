/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#004162',
                    dark: '#003050',
                },
                secondary: {
                    DEFAULT: '#3499cc',
                    light: '#4fb3e4',
                },
                tertiary: '#ffd700',
                gray: {
                    dark: '#7a7f85',
                    text: '#212627',
                    border: '#c6cbd2',
                },
                bg: {
                    DEFAULT: '#f8f8ff',
                    light: '#f7f7f7',
                },
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            maxWidth: {
                'container': '1320px',
            },
            borderRadius: {
                '30': '30px',
            },
            boxShadow: {
                'custom': '0px 0px 0px 0px rgba(33, 39, 38, 0.05), 2px 2px 6px 0px rgba(33, 39, 38, 0.05), 7px 7px 10px 0px rgba(33, 39, 38, 0.04), 16px 16px 14px 0px rgba(33, 39, 38, 0.03), 29px 29px 16px 0px rgba(33, 39, 38, 0.01), 45px 45px 18px 0px rgba(33, 39, 38, 0)',
            },
            backgroundImage: {
                'gradient-bg': 'linear-gradient(180deg, #e8f3ff 0%, #eaeaff 100%)',
                'gradient-title': 'linear-gradient(270deg, #d0d0ff 8.01%, #004162 100%)',
            },
            animation: {
                'updown': 'updown 5s ease-in-out infinite',
                'pulse-custom': 'pulse-custom 2s ease-in-out infinite',
            },
            keyframes: {
                updown: {
                    '0%, 100%': { transform: 'translateY(-5px)' },
                    '50%': { transform: 'translateY(5px)' },
                },
                'pulse-custom': {
                    '0%, 100%': { transform: 'scale(0)', opacity: '1' },
                    '50%': { transform: 'scale(2)', opacity: '0.3' },
                },
            },
        },
    },
    plugins: [],
}