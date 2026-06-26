import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AboutSection } from "@/domains/about/components/AboutSection";

describe("AboutSection", () => {
	it("renders the about section with heading, core stack, and complementary information", () => {
		render(<AboutSection />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toHaveAttribute("id", "sobre-title");
		expect(heading).toHaveTextContent("clean code");

		expect(screen.getByLabelText(/Informa/i)).toBeInTheDocument();

		const stack = screen.getByRole("region", { name: "Stack principal" });

		expect(stack).toBeInTheDocument();
		expect(within(stack).getByText("Linguagens")).toBeInTheDocument();
		expect(within(stack).getByText("TypeScript")).toBeInTheDocument();

		expect(
			screen.getByRole("img", {
				name: "Foto de perfil de Thiago Soares, desenvolvedor Front-End.",
			}),
		).toHaveAttribute("src", "/perfil.jpg");
		expect(
			screen.getByText(
				"Thiago Soares, desenvolvedor Front-End especializado em interfaces acessíveis.",
			),
		).toBeInTheDocument();
		expect(screen.getByText(/RD Saúde/)).toBeInTheDocument();
		expect(
			screen.getByText("Bacharelado em Sistema de Informação"),
		).toBeInTheDocument();
	});
});
