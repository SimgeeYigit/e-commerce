/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(100px)' },
        },
      },
      animation: {
        fadeLeft: 'fadeLeft 0.8s ease-out forwards',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'explore-1': "url('/assets/homepage/explore/1.jpg')",
        'explore-2': "url('/assets/homepage/explore/2.jpg')",
        'explore-3': "url('/assets/homepage/explore/3.jpg')",
        'mobile-explore-1': "url('/assets/homepage/mobile-explore/1.jpg')",
        'mobile-explore-2': "url('/assets/homepage/mobile-explore/2.jpg')",
        'mobile-explore-3': "url('/assets/homepage/mobile-explore/3.jpg')",
        'mobile-posts-1': "url('/assets/homepage/mobile-posts/1.jpg')",
        'mobile-posts-2': "url('/assets/homepage/mobile-posts/2.jpg')",
      }
  },
  plugins: [],
}}