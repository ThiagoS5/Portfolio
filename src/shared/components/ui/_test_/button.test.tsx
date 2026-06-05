import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/shared/components/ui/button";

describe("Button", () => {
	it("renders a native button by default", () => {
		render(<Button>Enviar</Button>);

		expect(screen.getByRole("button", { name: "Enviar" })).toHaveAttribute(
			"data-slot",
			"button",
		);
	});

	it("can render as a child link", () => {
		render(
			<Button asChild>
				<a href="/projetos">Projetos</a>
			</Button>,
		);

		expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute(
			"href",
			"/projetos",
		);
	});
});
