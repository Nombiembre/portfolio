/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f6f9',
          100: '#f4eff4',
          200: '#eae0ea',
          300: '#dac7d9',
          400: '#c2a4c0',
          500: '#ad87a9',
          600: '#966c90',
          700: '#7f5778',
          800: '#6a4a64',
          900: '#473343',
          950: '#342331'
        }
      },
      backgroundImage: {
        gradientPrimary:
          'linear-gradient(to right, #210c0f 0%, #eeedf2 33%, #eef1f3 66%, #534360 100%)',
        radialGradient:
          'radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))'
      }
    }
  },
  plugins: []
}
