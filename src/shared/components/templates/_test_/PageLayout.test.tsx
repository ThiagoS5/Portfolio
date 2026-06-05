import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PageLayout } from "@/shared/components/templates/PageLayout";

describe("PageLayout", () => {
	beforeEach(() => {
		window.scrollTo = vi.fn();
	});

	it("renders landmarks, skip link and page content", () => {
		render(
			<MemoryRouter>
				<PageLayout>
					<h1>Pagina interna</h1>
				</PageLayout>
			</MemoryRouter>,
		);

		expect(screen.getByRole("link", { name: /Pular para/i })).toHaveAttribute(
			"href",
			"#main-content",
		);
		expect(
			screen.getByRole("navigation", { name: /Navega/i }),
		).toBeInTheDocument();
		expect(screen.getByRole("main")).toHaveTextContent("Pagina interna");
		expect(screen.getByRole("contentinfo")).toHaveTextContent("Thiago Soares");
	});
});
