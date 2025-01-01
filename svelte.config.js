import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
        files: {
            lib: './lib'
        },
        alias: {
            lib: './lib'
        },
        output: {
            bundleStrategy: 'single'
        }
	},
    compilerOptions: {
        runes: true,
    }
};

export default config;
