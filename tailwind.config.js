/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': {
         DEFAULT: '#FFFFFF',
        'dark': '#E5E4D7'
      },      
      'black': '#1E1E1E',
      'red': {
        DEFAULT: '#B81A56',
        'dark': '#992350'
      },      
    }, 
    fontFamily: {
      'serif': ['"Space Grotesk"'],
    },   
    fontSize: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: ['1rem', {
        lineHeight: '1.313rem',
        letterSpacing: '-0.054rem',
        fontWeight: '400',
      }], /* 16px */
      lg: ['1.125rem', {
        lineHeight: '1.438rem',
        letterSpacing: '-0.06rem',
        fontWeight: '400',
      }], /* 18px */
      xl: ['1.75rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.094rem',
        fontWeight: '400',
      }], /* 28px */
      '2xl': ['2rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.167rem',
        fontWeight: '400',
      }], /* 32px */
      '3xl': '3rem', /* 48px */
      '4xl': ['4rem', {
        lineHeight: '4.5rem',
        letterSpacing: '-0.333rem',
        fontWeight: '400',
      }], /* 64px */
      '5xl': ['7.5rem', {
        lineHeight: '6.875rem',
        letterSpacing: '-0.625rem',
        fontWeight: '400',
      }], /* 120px */
    }
  },
  plugins: [],
}

