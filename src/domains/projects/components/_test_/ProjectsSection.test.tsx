import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";

import { ProjectsSection } from "@/domains/projects/components/ProjectsSection";

describe("ProjectsSection", () => {
	it("renders selected projects in an accessible list", () => {
		render(
			<MemoryRouter>
				<ProjectsSection />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", { level: 1, name: /Trabalhos recentes/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("list", { name: "Lista de projetos selecionados" }),
		).toBeInTheDocument();
		expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
		expect(
			screen.getByRole("article", { name: "Ficha 5e" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", {
				name: "Abrir código do projeto Ficha 5e em nova aba",
			}),
		).toHaveAttribute("href", "https://github.com/ThiagoS5/5eSheetSite");
		expect(
			screen.getByRole("link", {
				name: "Abrir demonstração do projeto Ficha 5e em nova aba",
			}),
		).toHaveAttribute("href", "https://5e-sheet-site.vercel.app/");
	});
});
