import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";

import { ProjectCard } from "@/domains/projects/components/ProjectCard";

describe("ProjectCard", () => {
	it("renders project content with semantic article and accessible actions", () => {
		render(
			<MemoryRouter>
				<ProjectCard
					codeUrl="https://github.com/ThiagoS5/Portfolio"
					demoUrl="/projetos"
					description="Interface acessivel para demonstrar projetos."
					previewAlt="Preview do projeto"
					previewImage="https://example.com/preview.png"
					technologies={["React", "A11y"]}
					title="Portfolio"
				/>
			</MemoryRouter>,
		);

		const article = screen.getByRole("article", { name: "Portfolio" });

		expect(article).toBeInTheDocument();
		expect(article).toHaveClass("hover:-translate-y-1");
		expect(article).toHaveClass("dark:hover:border-[#CBA85C]/70");
		expect(article).toHaveClass("motion-reduce:transform-none");
		expect(
			within(article).getByRole("heading", { level: 2, name: "Portfolio" }),
		).toBeInTheDocument();
		expect(
			within(article).getByRole("img", { name: "Preview do projeto" }),
		).toHaveAttribute("src", "https://example.com/preview.png");
		expect(
			within(article).getByRole("list", {
				name: "Tecnologias usadas em Portfolio",
			}),
		).toBeInTheDocument();
		expect(within(article).getByText("React")).toBeInTheDocument();
		expect(within(article).getByText("A11y")).toBeInTheDocument();

		const codeLink = within(article).getByRole("link", {
			name: /Portfolio em nova aba/i,
		});
		const demoLink = within(article).getByRole("link", {
			name: /demonstra/i,
		});

		expect(codeLink).toHaveAttribute(
			"href",
			"https://github.com/ThiagoS5/Portfolio",
		);
		expect(codeLink).toHaveAttribute("target", "_blank");
		expect(demoLink).toHaveAttribute("href", "/projetos");
	});

	it("keeps the preview placeholder decorative when no image is provided", () => {
		render(
			<MemoryRouter>
				<ProjectCard
					codeUrl="https://github.com/ThiagoS5/Portfolio"
					demoUrl="/contatos"
					description="Card sem imagem de preview."
					technologies={["TypeScript"]}
					title="Sem Preview"
				/>
			</MemoryRouter>,
		);

		const article = screen.getByRole("article", { name: "Sem Preview" });

		expect(within(article).queryByRole("img")).not.toBeInTheDocument();
		expect(
			within(article).getByRole("link", { name: /demonstra/i }),
		).toHaveAttribute("href", "/contatos");
	});

	it("opens external demos in a new tab", () => {
		render(
			<MemoryRouter>
				<ProjectCard
					codeUrl="https://github.com/ThiagoS5/Portfolio"
					demoUrl="https://example.com/demo"
					description="Card com demo externa."
					technologies={["React"]}
					title="Demo Externa"
				/>
			</MemoryRouter>,
		);

		const article = screen.getByRole("article", { name: "Demo Externa" });
		const demoLink = within(article).getByRole("link", {
			name: /Abrir demonstração do projeto Demo Externa em nova aba/i,
		});

		expect(demoLink).toHaveAttribute("href", "https://example.com/demo");
		expect(demoLink).toHaveAttribute("target", "_blank");
		expect(demoLink).toHaveAttribute("rel", "noopener noreferrer");
	});

	it("omits the demo action when the project has no demo URL", () => {
		render(
			<MemoryRouter>
				<ProjectCard
					codeUrl="https://github.com/ThiagoS5/toEpubNode"
					description="Conversor em lote de PDF para ePub."
					technologies={["Node.js", "Calibre"]}
					title="toEpubNode"
				/>
			</MemoryRouter>,
		);

		const article = screen.getByRole("article", { name: "toEpubNode" });

		expect(
			within(article).getByRole("link", {
				name: "Abrir código do projeto toEpubNode em nova aba",
			}),
		).toHaveAttribute("href", "https://github.com/ThiagoS5/toEpubNode");
		expect(
			within(article).queryByRole("link", { name: /demonstra/i }),
		).not.toBeInTheDocument();
	});

	it("keeps preview images decorative when no alt text is provided", () => {
		render(
			<MemoryRouter>
				<ProjectCard
					codeUrl="https://github.com/ThiagoS5/Portfolio"
					demoUrl="/projetos"
					description="Imagem sem texto alternativo."
					previewImage="https://example.com/decorative.png"
					technologies={["A11y"]}
					title="Imagem Decorativa"
				/>
			</MemoryRouter>,
		);

		const article = screen.getByRole("article", { name: "Imagem Decorativa" });

		expect(within(article).queryByRole("img")).not.toBeInTheDocument();
		expect(article.querySelector("img")).toHaveAttribute("alt", "");
	});
});
