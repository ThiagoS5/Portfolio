import { fireEvent, render, screen } from "@testing-library/react";
import { Code2 } from "lucide-react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

import { NavItem } from "@/shared/components/molecules/NavItem";

describe("NavItem", () => {
	it("renders a route link with active page semantics", () => {
		render(
			<MemoryRouter>
				<ul>
					<NavItem
						icon={<Code2 aria-hidden="true" />}
						isActive
						label="Projetos"
						to="/projetos"
					/>
				</ul>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link", { name: "Projetos" });

		expect(link).toHaveAttribute("href", "/projetos");
		expect(link).toHaveAttribute("aria-current", "page");
	});

	it("supports horizontal inactive items and navigation callbacks", () => {
		const handleNavigate = vi.fn();

		render(
			<MemoryRouter>
				<ul>
					<NavItem
						icon={<Code2 aria-hidden="true" />}
						label="Projetos"
						onNavigate={handleNavigate}
						orientation="horizontal"
						to="/projetos"
					/>
				</ul>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link", { name: "Projetos" });

		expect(link).not.toHaveAttribute("aria-current");

		fireEvent.click(link);

		expect(handleNavigate).toHaveBeenCalledTimes(1);
	});
});
