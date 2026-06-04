import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		coverage: {
			exclude: [
				"src/**/*.test.{ts,tsx}",
				"src/**/_test_/**",
				"src/setupTests.ts",
				"src/main.tsx",
				"src/app/**",
				"src/shared/data/**",
			],
			include: [
				"src/domains/**/*.{ts,tsx}",
				"src/shared/components/**/*.{ts,tsx}",
				"src/shared/lib/**/*.ts",
			],
			provider: "v8",
			thresholds: {
				branches: 100,
				functions: 100,
				lines: 100,
				statements: 100,
			},
		},
		environment: "jsdom",
		environmentOptions: {
			jsdom: {
				url: "http://localhost:5173",
			},
		},
		setupFiles: "./src/setupTests.ts",
	},
});
