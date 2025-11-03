import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({compilerOptions: {runes: true}})],
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es'],
      filename: 'index'
    },
    outDir: 'static',
    emptyOutDir: true
  }
});
