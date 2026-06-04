import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Input } from "@/shared/components/ui/input";

describe("Input", () => {
	it("renders an input with forwarded accessibility attributes", () => {
		render(<Input aria-label="Email" name="email" required type="email" />);

		const input = screen.getByRole("textbox", { name: "Email" });

		expect(input).toHaveAttribute("name", "email");
		expect(input).toBeRequired();
	});
});
