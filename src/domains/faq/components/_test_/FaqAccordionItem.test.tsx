import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FaqAccordionItem } from "@/domains/faq/components/FaqAccordionItem";
import { Accordion } from "@/shared/components/ui/accordion";

describe("FaqAccordionItem", () => {
	it("renders an accessible accordion trigger and content", () => {
		render(
			<Accordion collapsible type="single">
				<FaqAccordionItem
					answer="Com componentes reutilizaveis."
					question="Como o projeto foi construido?"
					value="faq-1"
				/>
			</Accordion>,
		);

		const trigger = screen.getByRole("button", {
			name: "Como o projeto foi construido?",
		});

		expect(trigger).toHaveAttribute("aria-expanded", "false");

		fireEvent.click(trigger);

		expect(trigger).toHaveAttribute("aria-expanded", "true");
		expect(
			screen.getByText("Com componentes reutilizaveis."),
		).toBeInTheDocument();
	});

	it("renders an optional call to action link inside the answer", () => {
		render(
			<Accordion collapsible defaultValue="faq-1" type="single">
				<FaqAccordionItem
					answer="Para receber um orcamento sob medida,"
					cta={{
						ariaLabel: "Fale comigo pelo WhatsApp",
						href: "https://wa.me/5516997459397",
						label: "Fale comigo pelo WhatsApp",
					}}
					question="Quanto custa para criar um site com voce?"
					value="faq-1"
				/>
			</Accordion>,
		);

		expect(
			screen.getByRole("link", { name: "Fale comigo pelo WhatsApp" }),
		).toHaveAttribute("href", "https://wa.me/5516997459397");
	});
});
