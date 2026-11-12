/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyPink: '#F8C8DC',
        blushPink: '#F4AFC4',
        softRose: '#EFA5B9',
        pastelLavender: '#DCCBFA',
        peach: '#FFD6C2',
        cream: '#FFF7F0',
        butterYellow: '#FFF0B3',
        softMint: '#D4F0E2',
        deepRose: '#C65B82',
        darkRose: '#942B52',
        romanticText: '#59404D',
        romanticMuted: '#8C6C7E',
        waxRed: '#C23B55',
        goldAccent: '#F3BE58',
      },
      fontFamily: {
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'romantic': '0 10px 30px -5px rgba(239, 165, 185, 0.35)',
        'romantic-lg': '0 20px 40px -10px rgba(198, 91, 130, 0.3)',
        'paper': '0 4px 20px rgba(89, 64, 77, 0.08), 0 1px 3px rgba(89, 64, 77, 0.05)',
        'envelope': '0 15px 35px -5px rgba(198, 91, 130, 0.25), 0 5px 15px rgba(89, 64, 77, 0.08)',
        'glow': '0 0 25px rgba(248, 200, 220, 0.8), 0 0 50px rgba(220, 203, 250, 0.5)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'sparkle': 'sparkle 1.8s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.92' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.4' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

