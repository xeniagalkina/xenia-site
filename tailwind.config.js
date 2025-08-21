/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
        sans: [
          '"IBM Plex Mono"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
