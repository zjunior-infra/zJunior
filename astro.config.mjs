import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
export default defineConfig({
  output: 'server',
  experimental: {
    viewTransitions: true
  },
  adapter: cloudflare({
    mode: 'directory'
  }),
  integrations: [tailwind({applyBaseStyles: true}), react()],
  vite: {
    define: {
      "process.env.DATABASE_URL": process.env.DATABASE_URL,
      "process.env.DEV_DATABASE_URL": process.env.DEV_DATABASE_URL,
      "process.env.DEL_TOKEN": process.env.DEL_TOKEN,
      "process.env.SUPABASE_URL": process.env.SUPABASE_URL,
      "process.env.SUPABASE_KEY": process.env.SUPABASE_KEY
    }
  }
});