import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vanillajs-simple-site/', // Update this if your repo name is different
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
});
