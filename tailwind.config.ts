import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/*.{tsx, jsx, js}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      green: {
        300: '#A8CF44',
        700: '#15803D',
        900: '#14532D',
      },
      zinc: {
        100: '#F9FAFB',
        400: '#d4d4d8',
        800: '#27272A',
        900: '#18181B',
      },
      amber: {
        500: '#C38E1E',
      },
    },
  },
  plugins: [],
};
export default config;
