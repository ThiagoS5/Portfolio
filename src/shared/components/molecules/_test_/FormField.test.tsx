import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FormField } from "@/shared/components/molecules/FormField";

describe("FormField", () => {
	it("associates an input with its visible label", () => {
		render(
			<FormField
				autoComplete="email"
				id="email"
				label="Email"
				name="email"
				placeholder="voce@email.com"
				required
				type="email"
			/>,
		);

		const input = screen.getByLabelText("Email");

		expect(input).toHaveAttribute("name", "email");
		expect(input).toHaveAttribute("type", "email");
		expect(input).toBeRequired();
	});

	it("renders a textarea variant with the same label contract", () => {
		render(
			<FormField
				id="message"
				label="Mensagem"
				name="message"
				placeholder="Conte sobre o projeto"
				variant="textarea"
			/>,
		);

		expect(screen.getByLabelText("Mensagem")).toHaveProperty(
			"tagName",
			"TEXTAREA",
		);
	});
});
