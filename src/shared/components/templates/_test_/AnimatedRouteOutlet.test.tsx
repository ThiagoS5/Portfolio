import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it } from "vitest";
import { AnimatedRouteOutlet } from "@/shared/components/templates/AnimatedRouteOutlet";

describe("AnimatedRouteOutlet", () => {
	it("renders the active child route content", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route element={<AnimatedRouteOutlet />}>
						<Route index element={<p>Conteudo da rota</p>} />
					</Route>
				</Routes>
			</MemoryRouter>,
		);

		expect(screen.getByText("Conteudo da rota")).toBeInTheDocument();
	});
});
