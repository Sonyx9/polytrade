// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sonyx9.github.io',
  base: '/polytrade/',
  vite: {
    plugins: [tailwindcss()]
  }
});