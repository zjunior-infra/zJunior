import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({mode:'directory'}),
  integrations: [tailwind(), react(), partytown({
    config: { debug: false },
    // @ts-ignore
    forward: ["dataLayer.push"],
  })],
  vite: {
    define: {
      "process.env.DATABASE_URL": process.env.DATABASE_URL,
	    "process.env.DEV_DATABASE_URL": process.env.DEV_DATABASE_URL,
    },
  },
});