import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compress from "astro-compress";

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  }),
  integrations: [tailwind(), react(), compress()],
  vite: {
    define: {
      "process.env.DATABASE_URL": process.env.DATABASE_URL,
      "process.env.DEV_DATABASE_URL": process.env.DEV_DATABASE_URL
    }
  }
});