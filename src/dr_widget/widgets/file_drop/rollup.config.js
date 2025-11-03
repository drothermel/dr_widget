import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import { readFileSync } from "fs";
import path from "path";

export default {
  input: "src/index.js",
  output: {
    format: "es",
    file: "static/index.js"
  },
  plugins: [
    svelte({
      compilerOptions: {
        runes: true,
        dev: false
      },
      emitCss: false,  // Inline CSS for simplicity
      preprocess: {
        // Optional: Add Tailwind processing here if needed
        style: ({ content }) => {
          // Process Tailwind classes
          return { code: content };
        }
      }
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
      exportConditions: ["svelte"],
      alias: {
        // Define $lib alias for bundler
        '$lib': path.resolve('./src/lib')
      }
    })
  ]
};
