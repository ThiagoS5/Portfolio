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
				name: "Quanto custa para criar um site com você?",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "Fale comigo pelo WhatsApp" }),
		).toHaveAttribute("href", "https://wa.me/5516997459397");
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
				name: "How much does it cost to build a website with you?",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByText((content) =>
				content.startsWith(
					"Every project is unique and the investment varies according to complexity",
				),
			),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: "Message me on WhatsApp" }),
		).toHaveAttribute("href", "https://wa.me/5516997459397");
	});
});
