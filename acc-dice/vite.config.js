import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
	plugins: [
		basicSsl({
			certDir: '/Users/Fernando',
			name: 'certificate.crt',
		}),
	],
	server: {
		https: true,
	},
});
