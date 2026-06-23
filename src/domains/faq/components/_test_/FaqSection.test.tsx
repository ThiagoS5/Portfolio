import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { FaqSection } from "@/domains/faq/components/FaqSection";
import i18n, { DEFAULT_LANGUAGE } from "@/shared/i18n/i18n";

describe("FaqSection", () => {
	beforeEach(async () => {
		await i18n.changeLanguage(DEFAULT_LANGUAGE);
	});

	it("renders FAQ heading and accessible accordion", () => {
		render(<FaqSection />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Perguntas frequentes." }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", {
				name: "Como você costuma iniciar um projeto?",
			}),
		).toBeInTheDocument();
		expect(screen.getAllByRole("button")[0]).toHaveAttribute(
			"aria-expanded",
			"true",
		);
	});

	it("renders FAQ content in English when the active language changes", async () => {
		await i18n.changeLanguage("en");

		render(<FaqSection />);

		expect(
			screen.getByRole("heading", {
				level: 1,
				name: "Frequently asked questions.",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByLabelText("Frequently asked questions list"),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", {
				name: "How do you usually start a project?",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"I start with the business goal, map the main flows, and define the semantic structure before refining the visual details.",
			),
		).toBeInTheDocument();
	});
});
