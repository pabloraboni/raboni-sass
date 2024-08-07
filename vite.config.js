import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'raboni-styles': path.resolve(__dirname, 'node_modules/raboni-styles')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "raboni-styles/scss/importMixins";`,
      },
    },
  },
});
