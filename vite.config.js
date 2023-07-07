import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(() => ({
  plugins: [svelte()],
  base: 'http://localhost:3001/',
  server: {
    port: 3001,
    strictPort: true,
  },
}));
