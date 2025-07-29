import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VaepTransitionToolkit',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    }
  }
});
