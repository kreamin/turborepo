import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/index.tsx",
  },
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ["cjs", "esm"],
  external: ["react",
    "react-native",
    "react-native-web",
    "nativewind",
    "react-native-css-interop",
  ],
  dts: true,
  esbuildOptions(esbuild) {
    esbuild.jsx = "automatic";
    esbuild.jsxImportSource = "nativewind";
    esbuild.loader = {
      ...(esbuild.loader || {}),
      ".js": "jsx",
    }
  },
  ...options,
}));
