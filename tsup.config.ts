import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*/index.{js,ts}", "src/bin/encode.ts"],
  splitting: true,
  sourcemap: true,
  dts: true,
  treeshake: true,
  clean: true,
  loader: {
    ".proto": "text",
  },
});
