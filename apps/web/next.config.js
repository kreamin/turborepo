/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "@repo/ui",
    "nativewind",
    "react-native-css-interop",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
      expo: false,
      "expo/AppEntry": false,
      "expo-constants": false,
      "expo-linking": false,
      "expo-status-bar": false,
      "expo-router": false,
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = nextConfig;