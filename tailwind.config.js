/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['Poppins'],
            },
            colors: {
                one: '#1D1D1F',
                two: '#727277',
                three: '#D9D9D9',
            },
        },
    },
    plugins: [],
}
