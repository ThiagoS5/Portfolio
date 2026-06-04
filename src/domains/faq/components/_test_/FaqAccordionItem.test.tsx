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
});
