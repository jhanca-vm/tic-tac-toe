/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      borderRadius: {
        md: '0.3125rem',
        xl: '0.625rem',
        '2xl': '0.9375rem',
        '3xl': '1.25rem'
      },
      boxShadow: {
        sm: '0 4px',
        DEFAULT: '0 8px'
      },
      colors: {
        primary: {
          100: '#65e9e4',
          200: '#31c3bd',
          300: '#118c87'
        },
        secondary: {
          100: '#ffc860',
          200: '#f2b137',
          300: '#cc8b13'
        },
        neutral: {
          100: '#dbe8ed',
          200: '#a8bfc9',
          300: '#6b8997'
        },
        base: {
          100: '#1f3641',
          200: '#1a2a33',
          300: '#10212a'
        }
      },
      fontFamily: {
        sans: ['Outfit Variable', 'sans-serif']
      },
      maxWidth: {
        md: '28.75rem'
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
        35: '8.75rem'
      }
    }
  }
}
