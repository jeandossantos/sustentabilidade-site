import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      green: {
        300: '#A8CF44',
      },
      zinc: {
        100: '#F9FAFB',
        800: '#27272A',
        900: '#18181B',
      },
    },
  },
  plugins: [],
};
export default config;
