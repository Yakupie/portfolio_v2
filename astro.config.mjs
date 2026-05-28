// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  build: {
    // 4kb altındaki tüm CSS dosyalarını otomatik olarak HTML içine gömer
    inlineStylesheets: 'always', 
  },
});