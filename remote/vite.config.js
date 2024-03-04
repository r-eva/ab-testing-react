import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'abManager',
      filename: 'remoteEntry.js',
      remotes: {
        abManager: 'http://localhost:5001/assets/remoteEntry.js',
      },
      exposes: {
        './VariantChooser': './src/VariantChooser',
        './tests': './src/tests',
        './store': './src/store',
      },
      shared: ['react', 'react-dom', 'jotai'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
