import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  extend: {
    colors: {
      "accent-1": "#111827",
      "accent-2": "#010101",
      "accent-3": "#84D2F6",
      "accent-4": "#F4BD83",
      "accent-5": "#386FA5",
    },
    fontFamily: {
      prompt: ['Prompt', ...fontFamily.sans],
      rock_salt: ['Rock Salt', ...fontFamily.sans],
    },
    animation: {
      marquee: 'marquee 25s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateY(0%)' },
        '100%': { transform: 'translateY(-100%)' },
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    screens: {
      "large-break-point": "1440px",
      "extra-large-break-point": "1920px",
    },
  },
};
export const plugins = [];
