import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionHeading } from "@/shared/components/molecules/SectionHeading";

describe("SectionHeading", () => {
	it("renders a level one heading when requested", () => {
		render(
			<SectionHeading
				description="Descricao da secao."
				eyebrow="Sobre"
				id="sobre-title"
				level={1}
				title="Sobre Mim"
			/>,
		);

		expect(
			screen.getByRole("heading", { level: 1, name: "Sobre Mim" }),
		).toHaveAttribute("id", "sobre-title");
		expect(screen.getByText("Descricao da secao.")).toBeInTheDocument();
	});

	it("uses level two by default", () => {
		render(<SectionHeading eyebrow="FAQ" id="faq-title" title="Perguntas" />);

		expect(
			screen.getByRole("heading", { level: 2, name: "Perguntas" }),
		).toHaveAttribute("id", "faq-title");
	});
});
