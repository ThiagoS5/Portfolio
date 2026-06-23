import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it } from "vitest";

import { ProjectsSection } from "@/domains/projects/components/ProjectsSection";
import i18n, { DEFAULT_LANGUAGE } from "@/shared/i18n/i18n";

describe("ProjectsSection", () => {
	beforeEach(async () => {
		await i18n.changeLanguage(DEFAULT_LANGUAGE);
	});

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
		expect(screen.getAllByRole("article")).toHaveLength(2);
		expect(
			screen.getByRole("article", { name: "Ficha 5e" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("img", { name: "Tela inicial do projeto Ficha 5e" }),
		).toHaveAttribute("src", "/projects/5Sheet.png");
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
		expect(
			screen.queryByRole("article", { name: "Sistema de Design" }),
		).not.toBeInTheDocument();
		expect(
			screen.queryByRole("article", { name: "Painel Operacional" }),
		).not.toBeInTheDocument();
	});

	it("renders project content in English when the active language changes", async () => {
		await i18n.changeLanguage("en");

		render(
			<MemoryRouter>
				<ProjectsSection />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", {
				level: 1,
				name: /Recent work with clean, objective interfaces/i,
			}),
		).toBeInTheDocument();
		expect(
			screen.getByRole("list", { name: "Selected projects list" }),
		).toBeInTheDocument();
		const sheetArticle = screen.getByRole("article", { name: "5e Sheet" });

		expect(sheetArticle).toBeInTheDocument();
		expect(
			screen.getByRole("img", { name: "Home screen of the 5e Sheet project" }),
		).toHaveAttribute("src", "/projects/5Sheet.png");
		expect(
			screen.getByRole("list", { name: "Technologies used in 5e Sheet" }),
		).toBeInTheDocument();
		expect(
			within(sheetArticle).getByRole("link", {
				name: "Open code for 5e Sheet in a new tab",
			}),
		).toHaveAttribute("href", "https://github.com/ThiagoS5/5eSheetSite");
		expect(
			within(sheetArticle).getByRole("link", {
				name: "Open demo for 5e Sheet in a new tab",
			}),
		).toHaveAttribute("href", "https://5e-sheet-site.vercel.app/");
		expect(
			within(sheetArticle).getByText("Code"),
		).toBeInTheDocument();
		expect(
			within(sheetArticle).getByText("Demo"),
		).toBeInTheDocument();
	});
});
