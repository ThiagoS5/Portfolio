import { fireEvent, render, screen } from "@testing-library/react";
import { Code2 } from "lucide-react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

import { IconButton } from "@/shared/components/atoms/IconButton";

describe("IconButton", () => {
	it("renders an accessible route link", () => {
		render(
			<MemoryRouter>
				<IconButton
					icon={<Code2 aria-hidden="true" />}
					label="Projetos"
					to="/projetos"
				/>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link", { name: "Projetos" });

		expect(link).toHaveAttribute("href", "/projetos");
		expect(link).not.toHaveAttribute("aria-current");
	});

	it("marks the current page and preserves click behavior", () => {
		const handleClick = vi.fn();

		render(
			<MemoryRouter>
				<IconButton
					icon={<Code2 aria-hidden="true" />}
					isActive
					label="Projetos"
					onClick={handleClick}
					to="/projetos"
				/>
			</MemoryRouter>,
		);

		const link = screen.getByRole("link", { name: "Projetos" });

		expect(link).toHaveAttribute("aria-current", "page");

		fireEvent.click(link);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
