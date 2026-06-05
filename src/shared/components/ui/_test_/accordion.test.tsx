import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/shared/components/ui/accordion";

describe("Accordion", () => {
	it("toggles content with accessible trigger state", () => {
		render(
			<Accordion collapsible type="single">
				<AccordionItem value="item-1">
					<AccordionTrigger>Detalhes</AccordionTrigger>
					<AccordionContent>Conteudo expandido</AccordionContent>
				</AccordionItem>
			</Accordion>,
		);

		const trigger = screen.getByRole("button", { name: "Detalhes" });

		expect(trigger).toHaveAttribute("aria-expanded", "false");

		fireEvent.click(trigger);

		expect(trigger).toHaveAttribute("aria-expanded", "true");
		expect(screen.getByText("Conteudo expandido")).toBeInTheDocument();
	});
});
