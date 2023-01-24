import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({mode:'directory'}),
  integrations: [tailwind(), react()],
  vite: {
		define: {
			"process.env.DATABASE_URL": JSON.stringify(
				process.env.DATABASE_URL,
			)
		},
	},
});