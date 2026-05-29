
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
          }
        }
      }
    },
    ssr: {
      noExternal: ['astro-icon']
    }
  }
});