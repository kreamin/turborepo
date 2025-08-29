/// <reference types="nativewind/types" />
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "../../packages/ui/src/**/*.{js,ts,tsx}",
    './src/**/*.{js,jsx,ts,tsx}',
    './apps/web/app/**/*.{js,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  important: "html",
  theme: { extend: {} },
};
