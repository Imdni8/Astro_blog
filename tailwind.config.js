/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        'layout': '42rem', // 672px
      },
      fontFamily: {
        'silkscreen': ['Silkscreen', 'cursive'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}