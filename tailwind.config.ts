import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E1E1E',
          secondary: '#374151',
          accent: '#FACC15',
          bg: '#FFFFFF',
          text: '#111111',
        },
      },
    },
  },
  plugins: [],
};
export default config;
