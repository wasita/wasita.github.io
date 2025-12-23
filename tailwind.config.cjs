/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        surface: {
          50: "rgb(var(--color-surface-50) / <alpha-value>)",
          100: "rgb(var(--color-surface-100) / <alpha-value>)",
          200: "rgb(var(--color-surface-200) / <alpha-value>)",
          300: "rgb(var(--color-surface-300) / <alpha-value>)",
          400: "rgb(var(--color-surface-400) / <alpha-value>)",
          500: "rgb(var(--color-surface-500) / <alpha-value>)",
          600: "rgb(var(--color-surface-600) / <alpha-value>)",
          700: "rgb(var(--color-surface-700) / <alpha-value>)",
          800: "rgb(var(--color-surface-800) / <alpha-value>)",
          900: "rgb(var(--color-surface-900) / <alpha-value>)",
        },
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
