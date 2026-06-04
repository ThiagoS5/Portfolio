import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Pill } from "@/shared/components/atoms/Pill";

describe("Pill", () => {
	it("renders text content and forwards attributes", () => {
		render(<Pill data-testid="technology">React</Pill>);

		expect(screen.getByTestId("technology")).toHaveTextContent("React");
	});

	it("supports the outline variant without changing semantics", () => {
		render(<Pill variant="outline">A11y</Pill>);

		expect(screen.getByText("A11y")).toBeInTheDocument();
	});
});
