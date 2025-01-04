import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~hooks': path.resolve(__dirname, './src/lib/hooks'),
      '~components': path.resolve(__dirname, './src/components'),
      '~ui': path.resolve(__dirname, './src/components/ui'),
      '~utils': path.resolve(__dirname, './src/lib/utils'),
      '~lib': path.resolve(__dirname, './src/lib'),
      '~atoms': path.resolve(__dirname, './src/atoms'),
      '~types': path.resolve(__dirname, './src/types'),
    },
  },
  plugins: [react()],
});
