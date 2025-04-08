import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Use path.resolve correctly to resolve the 'src' folder for alias
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src')  // Resolving alias correctly
    }
  }
});
