import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

describe("Label", () => {
	it("labels its associated form control", () => {
		render(
			<>
				<Label htmlFor="name">Nome</Label>
				<Input id="name" name="name" />
			</>,
		);

		expect(screen.getByLabelText("Nome")).toHaveAttribute("name", "name");
	});
});
