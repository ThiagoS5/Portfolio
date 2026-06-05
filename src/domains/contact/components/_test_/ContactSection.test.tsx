import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContactSection } from "@/domains/contact/components/ContactSection";

describe("ContactSection", () => {
	it("renders contact links and the contact form", () => {
		render(<ContactSection />);

		expect(
			screen.getByRole("heading", {
				level: 1,
				name: /Vamos transformar uma ideia/i,
			}),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /Email:/i })).toHaveAttribute(
			"href",
			"mailto:thimarqueti@gmail.com",
		);
		expect(screen.getByRole("link", { name: /LinkedIn:/i })).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/thiago-marqueti-soares/",
		);
		expect(screen.getByLabelText("Nome")).toBeInTheDocument();
	});
});
