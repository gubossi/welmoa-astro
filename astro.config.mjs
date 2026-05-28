import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
  site: 'https://blog.welmoa.kr',
  integrations: [sitemap()],

  markdown: {
    rehypePlugins: [rehypeMermaid]
  }    
});
