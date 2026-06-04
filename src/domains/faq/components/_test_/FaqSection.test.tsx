import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FaqSection } from "@/domains/faq/components/FaqSection";

describe("FaqSection", () => {
	it("renders FAQ heading and accessible accordion", () => {
		render(<FaqSection />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Perguntas frequentes." }),
		).toBeInTheDocument();
		expect(screen.getAllByRole("button")[0]).toHaveAttribute(
			"aria-expanded",
			"true",
		);
	});
});
