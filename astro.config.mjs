import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  output:'server',
  adapter: cloudflare({mode:'directory'}),
  integrations: [tailwind()]
});