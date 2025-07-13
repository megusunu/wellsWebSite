/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'natural-green': '#7CB342',
        'natural-light-green': '#AED581',
        'natural-beige': '#F5E6D3',
        'natural-brown': '#8D6E63',
        'warm-yellow': '#FFD54F',
        'vibrant-orange': '#FF7043',
        'light-orange': '#FFAB91',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
        'serif': ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
}