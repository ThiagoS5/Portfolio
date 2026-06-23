/// <reference types="node" />

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("Vercel SPA routing", () => {
	it("rewrites deep links to the Vite entry point", () => {
		const config = JSON.parse(
			readFileSync(join(process.cwd(), "vercel.json"), "utf8"),
		);

		expect(config.rewrites).toContainEqual({
			source: "/(.*)",
			destination: "/index.html",
		});
	});
});
