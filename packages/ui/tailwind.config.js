/// <reference types="nativewind/types" />
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  important: "html",
  theme: { extend: {} },
};
