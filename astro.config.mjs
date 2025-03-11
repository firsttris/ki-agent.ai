// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.ki-agent.ai',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});