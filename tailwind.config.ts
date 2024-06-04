import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-0': "rgb(var(--color-neutral-0) / <alpha-value>)",
        'neutral-50': "rgb(var(--color-neutral-50) / <alpha-value>)",
        'neutral-100': "rgb(var(--color-neutral-100) / <alpha-value>)",
        'neutral-150': "rgb(var(--color-neutral-150) / <alpha-value>)",
        'neutral-200': "rgb(var(--color-neutral-200) / <alpha-value>)",
        'neutral-300': "rgb(var(--color-neutral-300) / <alpha-value>)",
        'neutral-400': "rgb(var(--color-neutral-400) / <alpha-value>)",
        'neutral-500': "rgb(var(--color-neutral-500) / <alpha-value>)",
        'neutral-600': "rgb(var(--color-neutral-600) / <alpha-value>)",
        'neutral-700': "rgb(var(--color-neutral-700) / <alpha-value>)",
        'neutral-750': "rgb(var(--color-neutral-750) / <alpha-value>)",
        'neutral-800': "rgb(var(--color-neutral-800) / <alpha-value>)",
        'neutral-850': "rgb(var(--color-neutral-850) / <alpha-value>)",
        'neutral-900': "rgb(var(--color-neutral-900) / <alpha-value>)",
        'neutral-950': "rgb(var(--color-neutral-950) / <alpha-value>)",
        'base-0': "rgb(var(--color-base-0) / <alpha-value>)",
        'dye-pink': "rgb(var(--color-dye-pink) / <alpha-value>)",
        'dye-blue': "rgb(var(--color-dye-blue) / <alpha-value>)",
        'primary': "rgb(var(--color-primary) / <alpha-value>)",
      },
      fontFamily: {
        geist: ['var(--font-geist)'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
export default config;
