import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceSection } from "@/domains/experience/components/ExperienceSection";

describe("ExperienceSection", () => {
	it("renders experience content in a list", () => {
		render(<ExperienceSection />);

		expect(
			screen.getByRole("heading", {
				level: 1,
				name: /front-end corporativo/i,
			}),
		).toBeInTheDocument();
		expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
		expect(screen.getByText("RD Saúde")).toBeInTheDocument();
	});
});
