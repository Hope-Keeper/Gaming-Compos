/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      yekan: ['Yekan']
    },
    colors: {
      white: 'white',
      black: 'black',
      transparent: 'transparent',
      gray: {
        secondary: '#F1F3F5',
        primary: '#868E96',
        dark: '#343A40'
      },
      red: {
        secondary: '#FFE3E3',
        primary: '#FA5252'
      },
      pink: {
        secondary: '#FFDEEB',
        primary: '#E64980'
      },
      grape: {
        secondary: '#F3D9FA',
        primary: '#BE4BDB'
      },
      violet: {
        secondary: '#E5DBFF',
        primary: '#7950F2'
      },
      indigo: {
        secondary: '#DBE4FF',
        primary: '#4C6EF5'
      },
      blue: {
        secondary: '#D0EBFF',
        primary: '#228BE6'
      },
      cyan: {
        secondary: '#C5F6FA',
        primary: '#15AABF'
      },
      teal: {
        secondary: '#C3FAE8',
        primary: '#12B886'
      },
      brand: {
        secondary: '#C2F7FA',
        primary: '#208D8E'
      },
      green: {
        secondary: '#D3F9D8',
        primary: '#40C057'
      },
      lime: {
        secondary: '#E9FAC8',
        primary: '#82C91E'
      },
      yellow: {
        secondary: '#FFF3BF',
        primary: '#FAB005'
      },
      orange: {
        secondary: '#FFE8CC',
        primary: '#FD7E14'
      }
    },
    fontSize: {
      headingl: ['32px'],
      headingm: ['28px'],
      headings: ['24px'],
      headingxs: ['20px'],
      bodyxl: ['24px'],
      bodyl: ['20px'],
      bodys: ['14px'],
      bodyxs: ['12px'],
      boldxl: [
        '24px',
        {
          lineHeight: '1.75rem',
          fontWeight: 800
        }
      ],
      boldlarge: [
        '20px',
        {
          lineHeight: '1.75rem',
          fontWeight: 800
        }
      ],
      boldm: [
        '16px',
        {
          lineHeight: '1.75rem',
          fontWeight: 800
        }
      ],
      bolds: [
        '14px',
        {
          lineHeight: '1.75rem',
          fontWeight: 800
        }
      ],
      boldxs: [
        '12px',
        {
          lineHeight: '1.75rem',
          fontWeight: 800
        }
      ]
    },
    extend: {
      boxShadow: {
        '3xl': '0 10px 30px 0px rgba(0, 0, 0, 0.05)',
      '4xl':'0 30px 80px 0 rgba(0,0,0,0.04)'
      },
      spacing: {
        xs: '0.5rem',
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '2.5rem'
      },
    
    },
    namedGroups: ['foo']
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },

    require('tailwind-scrollbar'),
    require('tailwindcss-labeled-groups')(['custom', '1'])
  ]
}
