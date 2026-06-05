import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceCard } from "@/domains/experience/components/ExperienceCard";

describe("ExperienceCard", () => {
	it("renders experience details as a labelled article", () => {
		const experience = {
			company: "Produto Digital",
			description: "Criacao de interfaces acessiveis.",
			highlights: ["Aumentou a cobertura de testes."],
			highlightsLabel: "Principais entregas",
			highlightsTitle: "Entregas",
			period: "2024",
			role: "Front-end Developer",
			technologies: ["React", "TypeScript"],
		};

		render(<ExperienceCard {...experience} />);

		const article = screen.getByRole("article", {
			name: "Front-end Developer",
		});

		expect(article).toBeInTheDocument();
		expect(within(article).getByText("Produto Digital")).toBeInTheDocument();
		expect(
			within(article).getByRole("list", {
				name: "Tecnologias relacionadas a Front-end Developer",
			}),
		).toBeInTheDocument();
		expect(
			within(article).getByRole("list", { name: "Principais entregas" }),
		).toBeInTheDocument();
		expect(within(article).getByText("React")).toBeInTheDocument();
	});
});
