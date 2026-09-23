import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-thank-you-html',
      generateBundle(options, bundle) {
        const indexHtml = bundle['index.html'];
        if (indexHtml) {
          this.emitFile({
            type: 'asset',
            fileName: 'thank-you/index.html',
            source: indexHtml.source
          });
        }
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  }
});
