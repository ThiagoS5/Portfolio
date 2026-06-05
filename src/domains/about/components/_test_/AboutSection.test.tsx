import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AboutSection } from "@/domains/about/components/AboutSection";

describe("AboutSection", () => {
	it("renders the about section with complementary technology information", () => {
		render(<AboutSection />);

		expect(
			screen.getByRole("heading", { level: 1, name: "Sobre Mim" }),
		).toBeInTheDocument();
		expect(screen.getByLabelText(/Informa/i)).toBeInTheDocument();
		expect(
			screen.getByRole("list", { name: "Habilidades principais" }),
		).toBeInTheDocument();
		expect(screen.getByText(/RD Saúde/)).toBeInTheDocument();
		expect(
			screen.getByText("Bacharelado em Sistema de Informação"),
		).toBeInTheDocument();
	});
});
