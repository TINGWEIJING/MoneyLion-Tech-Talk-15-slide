import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  server: {
    port: 8173
  },
  build: {
    // TODO (WJ): remove
    sourcemap: true,
    minify: false
  }
});
