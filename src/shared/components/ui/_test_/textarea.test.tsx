import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "@/shared/components/ui/textarea";

describe("Textarea", () => {
	it("renders a textbox with forwarded attributes", () => {
		render(<Textarea aria-label="Mensagem" name="message" required />);

		const textarea = screen.getByRole("textbox", { name: "Mensagem" });

		expect(textarea).toHaveAttribute("name", "message");
		expect(textarea).toBeRequired();
	});
});
