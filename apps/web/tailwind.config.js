/// <reference types="nativewind/types" />
/** @type {import('tailwindcss').Config} */
const { join } = require('path')

module.exports = {
  content: [
    join(__dirname, "../../packages/ui/src/**/*.{js,ts,tsx}"),
    './src/**/*.{js,jsx,ts,tsx}',
      './app/layout.tsx'
  ],
  presets: [require('nativewind/preset')],
  important: "html",
  theme: { extend: {} },
};
