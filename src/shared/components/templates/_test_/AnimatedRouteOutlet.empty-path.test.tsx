import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("react-router", () => ({
	useLocation: () => ({ pathname: "" }),
	useOutlet: () => <p>Conteudo sem pathname</p>,
}));

const { AnimatedRouteOutlet } = await import(
	"@/shared/components/templates/AnimatedRouteOutlet"
);

describe("AnimatedRouteOutlet empty path", () => {
	it("renders outlet content when pathname is empty", () => {
		render(<AnimatedRouteOutlet />);

		expect(screen.getByText("Conteudo sem pathname")).toBeInTheDocument();
	});
});
