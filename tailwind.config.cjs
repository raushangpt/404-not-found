/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        fontFamily: {
            'space-mono': ['Space Mono', 'monospace'],
            'inconsolata': ['Inconsolata', 'monospace'],
        },
        screens: {
            'sm': '425px',
            'lg': '1024px',
        },
        extend: {},
    },
    plugins: [],
};
