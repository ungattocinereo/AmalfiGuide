/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Merriweather"', 'serif'],
                body: ['"Outfit"', 'sans-serif'],
                nunito: ['"Nunito"', 'sans-serif'],
            },
            colors: {
                'hero-bg': '#ff6b35',
            }
        },
    },
    plugins: [],
}
