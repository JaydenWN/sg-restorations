// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://sgrestorations.com.au",
		output: "static",
	integrations: [mdx(), sitemap()],
	vite: {
		resolve: {
			alias: {
				"@icons": "/src/icons",
				"@images": "/src/images",
				"@components": "/src/components",
			},
		},
	},
});
