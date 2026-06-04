import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { ThemeToggle } from "@/shared/components/atoms/ThemeToggle";

describe("ThemeToggle", () => {
	beforeEach(() => {
		window.localStorage.clear();
		document.documentElement.className = "";
		document.documentElement.removeAttribute("style");
	});

	it("starts in dark mode and exposes an accessible pressed state", () => {
		render(<ThemeToggle />);

		const button = screen.getByRole("button", { name: "Ativar tema claro" });

		expect(button).toHaveAttribute("aria-pressed", "true");
		expect(document.documentElement).toHaveClass("dark");
		expect(window.localStorage.getItem("theme")).toBe("dark");
	});

	it("toggles to light mode when activated", () => {
		render(<ThemeToggle />);

		fireEvent.click(screen.getByRole("button", { name: "Ativar tema claro" }));

		const button = screen.getByRole("button", { name: "Ativar tema escuro" });

		expect(button).toHaveAttribute("aria-pressed", "false");
		expect(document.documentElement).not.toHaveClass("dark");
		expect(window.localStorage.getItem("theme")).toBe("light");
	});

	it("respects the stored light theme on first render", () => {
		window.localStorage.setItem("theme", "light");

		render(<ThemeToggle />);

		expect(
			screen.getByRole("button", { name: "Ativar tema escuro" }),
		).toHaveAttribute("aria-pressed", "false");
		expect(document.documentElement).not.toHaveClass("dark");
	});

	it("toggles from stored light mode back to dark mode", () => {
		window.localStorage.setItem("theme", "light");

		render(<ThemeToggle />);

		fireEvent.click(screen.getByRole("button", { name: "Ativar tema escuro" }));

		expect(
			screen.getByRole("button", { name: "Ativar tema claro" }),
		).toHaveAttribute("aria-pressed", "true");
		expect(document.documentElement).toHaveClass("dark");
		expect(window.localStorage.getItem("theme")).toBe("dark");
	});
});
