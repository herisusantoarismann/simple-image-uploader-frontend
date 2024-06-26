/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "brand-background": "#F9FAFB",
        "brand-gray": "#E5E7EB",
      },
    },
  },
  plugins: [],
};
