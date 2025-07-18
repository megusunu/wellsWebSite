import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wells.jp',
  base: '/',
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
