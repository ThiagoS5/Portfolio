/// <reference types="node" />

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const indexHtml = readFileSync(join(process.cwd(), "index.html"), "utf8");

describe("index SEO metadata", () => {
	it("exposes search, social and structured profile metadata", () => {
		expect(indexHtml).toContain(
			'<meta name="robots" content="index, follow, max-image-preview:large" />',
		);
		expect(indexHtml).toContain(
			'<meta name="author" content="Thiago Soares" />',
		);
		expect(indexHtml).toContain(
			'<meta property="og:type" content="profile" />',
		);
		expect(indexHtml).toContain(
			'<meta property="og:image" content="/perfil.jpg" />',
		);
		expect(indexHtml).toContain('<script type="application/ld+json">');
		expect(indexHtml).toContain('"@type": "Person"');
		expect(indexHtml).toContain('"jobTitle": "Desenvolvedor Front-End"');
	});
});
