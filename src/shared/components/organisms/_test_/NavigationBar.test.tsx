import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";

import { NavigationBar } from "@/shared/components/organisms/NavigationBar";

function renderNavigation(initialPath = "/") {
	return render(
		<MemoryRouter initialEntries={[initialPath]}>
			<NavigationBar />
		</MemoryRouter>,
	);
}

describe("NavigationBar", () => {
	it("renders the primary navigation landmark and home links", () => {
		renderNavigation();

		expect(
			screen.getByRole("navigation", { name: /Navega/i }),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Sobre mim" })).toHaveAttribute(
			"href",
			"/sobre-mim",
		);
		expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute(
			"href",
			"/projetos",
		);
		expect(screen.getByRole("link", { name: "FAQ" })).toHaveAttribute(
			"href",
			"/faq",
		);
		expect(
			screen.queryByRole("button", { name: /Abrir menu/i }),
		).not.toBeInTheDocument();
	});

	it("toggles the mobile navigation menu with aria-expanded", () => {
		renderNavigation("/contatos");

		const trigger = screen.getByRole("button", { name: /Abrir menu/i });
		const menuId = trigger.getAttribute("aria-controls");

		expect(trigger).toHaveAttribute("aria-expanded", "false");
		expect(menuId).toBeTruthy();

		fireEvent.click(trigger);

		expect(trigger).toHaveAttribute("aria-expanded", "true");

		const menu = document.getElementById(String(menuId));

		expect(menu).toBeInTheDocument();
		expect(
			within(menu as HTMLElement).getByRole("link", { name: "FAQ" }),
		).toBeInTheDocument();
	});

	it("closes the mobile menu when a navigation item is selected", () => {
		renderNavigation("/contatos");

		const trigger = screen.getByRole("button", { name: /Abrir menu/i });

		fireEvent.click(trigger);

		const menu = document.getElementById(
			String(trigger.getAttribute("aria-controls")),
		);

		fireEvent.click(
			within(menu as HTMLElement).getByRole("link", { name: "FAQ" }),
		);

		expect(trigger).toHaveAttribute("aria-expanded", "false");
	});

	it("toggles and closes the desktop route menu with Escape", () => {
		renderNavigation("/projetos");

		const trigger = screen.getByRole("button", {
			name: /Expandir menu.*Projetos/i,
		});
		const menuId = trigger.getAttribute("aria-controls");

		expect(trigger).toHaveAttribute("aria-current", "page");
		expect(trigger).toHaveAttribute("aria-expanded", "false");
		expect(screen.queryByRole("link", { name: "FAQ" })).not.toBeInTheDocument();

		fireEvent.click(trigger);

		expect(trigger).toHaveAttribute("aria-expanded", "true");
		expect(menuId).toBeTruthy();

		const menu = document.getElementById(String(menuId));

		expect(menu).toBeInTheDocument();
		expect(
			within(menu as HTMLElement).getByRole("link", { name: "FAQ" }),
		).toHaveAttribute("href", "/faq");

		fireEvent.keyDown(document, { key: "Escape" });

		expect(trigger).toHaveAttribute("aria-expanded", "false");
	});

	it("keeps the desktop route menu open for non Escape keys", () => {
		renderNavigation("/projetos");

		const trigger = screen.getByRole("button", {
			name: /Expandir menu.*Projetos/i,
		});

		fireEvent.click(trigger);
		fireEvent.keyDown(document, { key: "Enter" });

		expect(trigger).toHaveAttribute("aria-expanded", "true");
	});

	it("closes the desktop menu when an inactive route is selected", () => {
		renderNavigation("/projetos");

		const trigger = screen.getByRole("button", {
			name: /Expandir menu.*Projetos/i,
		});

		fireEvent.click(trigger);

		const menu = document.getElementById(
			String(trigger.getAttribute("aria-controls")),
		);

		fireEvent.click(
			within(menu as HTMLElement).getByRole("link", { name: "FAQ" }),
		);

		expect(
			screen.getByRole("button", { name: /Expandir menu.*FAQ/i }),
		).toHaveAttribute("aria-expanded", "false");
	});
});
