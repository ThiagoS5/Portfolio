// @vitest-environment node

import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { ThemeToggle } from "@/shared/components/atoms/ThemeToggle";

describe("ThemeToggle SSR", () => {
	it("defaults to dark mode without browser storage", () => {
		const markup = renderToString(<ThemeToggle />);

		expect(markup).toContain('aria-pressed="true"');
		expect(markup).toContain("Ativar tema claro");
	});
});
