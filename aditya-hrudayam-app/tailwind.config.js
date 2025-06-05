/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'sun-gold': '#FFD700',
                'sacred-orange': '#FF8C00',
                'divine-red': '#DC143C'
            }
        },
    },
    plugins: [],
}
