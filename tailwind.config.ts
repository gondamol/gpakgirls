import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GPAK brand colours, taken from the logo (headwrap magenta, G green, headwrap gold, skin brown)
        primary: {
          50: '#fdf2f7',
          100: '#fce4ee',
          200: '#f9c9dc',
          300: '#f39dbf',
          400: '#e8609a',
          500: '#dc2a78',
          600: '#d50056', // Logo magenta ("Girls", headwrap)
          700: '#b20048',
          800: '#8f003b',
          900: '#730532',
        },
        secondary: {
          50: '#edf7f3',
          100: '#d3ece2',
          200: '#a8d9c5',
          300: '#71bf9f',
          400: '#3b9c77',
          500: '#177a57',
          600: '#045138', // Logo forest green ("GPAK", the G)
          700: '#03432e',
          800: '#023424',
          900: '#02281c',
        },
        accent: {
          50: '#fff8eb',
          100: '#feedc9',
          200: '#fedb93',
          300: '#fdc75c',
          400: '#fcb534',
          500: '#fba315', // Logo gold (headwrap)
          600: '#dc8506',
          700: '#b46407',
          800: '#924d0c',
          900: '#78400d',
        },
        earth: {
          600: '#4e220a', // Logo brown (motto)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config

