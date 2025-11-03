// rolldown.config.js
import { defineConfig } from "rolldown";
import svelte from "rollup-plugin-svelte";

export default defineConfig({
  input: "src/index.js",
  output: {
    file: "static/index.js",
  },
  plugins: [
    svelte({ compilerOptions: { runes: true } }),
  ],
});