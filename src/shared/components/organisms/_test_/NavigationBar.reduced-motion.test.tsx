import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", async (importOriginal) => {
	const actual = await importOriginal<typeof import("framer-motion")>();

	return {
		...actual,
		useReducedMotion: () => true,
	};
});

const { NavigationBar } = await import(
	"@/shared/components/organisms/NavigationBar"
);

describe("NavigationBar reduced motion", () => {
	it("keeps expandable navigation accessible without motion", () => {
		render(
			<MemoryRouter initialEntries={["/projetos"]}>
				<NavigationBar />
			</MemoryRouter>,
		);

		const trigger = screen.getByRole("button", {
			name: /Expandir menu.*Projetos/i,
		});

		fireEvent.click(trigger);

		const menu = document.getElementById(
			String(trigger.getAttribute("aria-controls")),
		);

		expect(trigger).toHaveAttribute("aria-expanded", "true");
		expect(
			within(menu as HTMLElement).getByRole("link", { name: "FAQ" }),
		).toHaveAttribute("href", "/faq");
	});
});
