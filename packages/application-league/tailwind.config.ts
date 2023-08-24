import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      Background: {
        light: '#ffffff',
        DEFAULT: '#ffffff',
        dark: '#082032'
      },
      red: '#962234'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
export default config
