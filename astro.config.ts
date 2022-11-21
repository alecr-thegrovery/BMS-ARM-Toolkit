import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { VitePWA } from "vite-plugin-pwa"
import {generateSW} from 'workbox-build';

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});

export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
				path: "./tailwind.config.js"
			}
		}),
		sitemap(),
		compress()
	],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  maximumFileSizeToCacheInBytes: 10000000,
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,html,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,xml}',
				    '*.html',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: 'null',
				  runtimeCaching: [
			            getCache({ 
			              pattern: /^https:\/\/bms-arm-toolkit-pwa-template.netlify.app\//, 
			              name: "index" 
			            }),
			            getCache({ 
			              pattern: /^https:\/\/bms-arm-toolkit-pwa-template.netlify.app\/resources/, 
			              name: "resources" 
			            })
			          ]
				},
			})
		]
	},
})
