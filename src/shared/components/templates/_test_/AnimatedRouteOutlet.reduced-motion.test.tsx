import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", async (importOriginal) => {
	const actual = await importOriginal<typeof import("framer-motion")>();

	return {
		...actual,
		useReducedMotion: () => true,
	};
});

const { AnimatedRouteOutlet } = await import(
	"@/shared/components/templates/AnimatedRouteOutlet"
);

describe("AnimatedRouteOutlet reduced motion", () => {
	it("renders route content when motion is reduced", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route element={<AnimatedRouteOutlet />}>
						<Route index element={<p>Conteudo sem movimento</p>} />
					</Route>
				</Routes>
			</MemoryRouter>,
		);

		expect(screen.getByText("Conteudo sem movimento")).toBeInTheDocument();
	});
});
