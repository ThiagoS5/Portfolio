import { render, screen } from "@testing-library/react";
import { Code2 } from "lucide-react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", async (importOriginal) => {
	const actual = await importOriginal<typeof import("framer-motion")>();

	return {
		...actual,
		useReducedMotion: () => true,
	};
});

const { IconButton } = await import("@/shared/components/atoms/IconButton");

describe("IconButton reduced motion", () => {
	it("keeps the link accessible when motion is reduced", () => {
		render(
			<MemoryRouter>
				<IconButton
					icon={<Code2 aria-hidden="true" />}
					label="Projetos"
					to="/projetos"
				/>
			</MemoryRouter>,
		);

		expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute(
			"href",
			"/projetos",
		);
	});
});
