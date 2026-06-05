import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/domains/contact/components/ContactForm";

describe("ContactForm", () => {
	it("renders required fields and submit action with accessible names", () => {
		render(<ContactForm />);

		expect(screen.getByLabelText("Nome")).toBeRequired();
		expect(screen.getByLabelText("Email")).toBeRequired();
		expect(screen.getByLabelText("Mensagem")).toBeRequired();
		expect(
			screen.getByRole("button", { name: /Enviar mensagem/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("form", { name: /Formulário de contato/i }),
		).toBeInTheDocument();
	});

	it("announces validation errors and marks invalid fields", async () => {
		render(<ContactForm />);

		fireEvent.submit(screen.getByRole("form", { name: /Formulário/i }));

		expect(await screen.findByText("Informe seu nome.")).toBeInTheDocument();
		expect(screen.getByText("Informe um email válido.")).toBeInTheDocument();
		expect(
			screen.getByText("Descreva a mensagem com pelo menos 10 caracteres."),
		).toBeInTheDocument();
		expect(screen.getByLabelText("Nome")).toHaveAttribute(
			"aria-invalid",
			"true",
		);
		expect(screen.getByLabelText("Email")).toHaveAttribute(
			"aria-invalid",
			"true",
		);
		expect(screen.getByLabelText("Mensagem")).toHaveAttribute(
			"aria-invalid",
			"true",
		);
	});

	it("builds a mailto action and announces the submission status", async () => {
		const consoleError = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		render(<ContactForm />);

		fireEvent.change(screen.getByLabelText("Nome"), {
			target: { value: "Thiago" },
		});
		fireEvent.change(screen.getByLabelText("Email"), {
			target: { value: "thiago@example.com" },
		});
		fireEvent.change(screen.getByLabelText("Mensagem"), {
			target: { value: "Vamos conversar sobre um projeto" },
		});
		fireEvent.submit(screen.getByRole("form", { name: /Formulário/i }));

		expect(
			await screen.findByText(
				"Abrindo seu cliente de email para finalizar o envio.",
			),
		).toBeInTheDocument();

		consoleError.mockRestore();
	});
});
