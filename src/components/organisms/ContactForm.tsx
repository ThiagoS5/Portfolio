import { Send } from "lucide-react";
import { type FormEvent, useState } from "react";

import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/ui/button";

export function ContactForm() {
	const [status, setStatus] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = String(formData.get("name") ?? "");
		const email = String(formData.get("email") ?? "");
		const message = String(formData.get("message") ?? "");
		const subject = encodeURIComponent(`Contato pelo portfólio - ${name}`);
		const body = encodeURIComponent(`${message}\n\nResposta para: ${email}`);

		window.location.href = `mailto:thiago.dev@email.com?subject=${subject}&body=${body}`;
		setStatus("Abrindo seu cliente de email para finalizar o envio.");
	}

	return (
		<form
			aria-describedby="contact-form-help contact-form-status"
			aria-labelledby="contact-form-title"
			className="space-y-8"
			onSubmit={handleSubmit}
		>
			<h3 className="sr-only" id="contact-form-title">
				Formulário de contato
			</h3>
			<p className="sr-only" id="contact-form-help">
				Todos os campos são obrigatórios. Ao enviar, seu cliente de email será
				aberto com a mensagem preenchida.
			</p>
			<FormField
				autoComplete="name"
				id="name"
				label="Nome"
				name="name"
				placeholder="Seu nome"
				required
			/>
			<FormField
				autoComplete="email"
				id="email"
				label="Email"
				name="email"
				placeholder="voce@email.com"
				required
				type="email"
			/>
			<FormField
				id="message"
				label="Mensagem"
				name="message"
				placeholder="Conte brevemente sobre o projeto"
				required
				variant="textarea"
			/>
			<div className="flex flex-col items-start gap-4">
				<Button className="rounded-full px-6" type="submit">
					<Send aria-hidden="true" className="size-4" />
					Enviar mensagem
				</Button>
				<p
					aria-atomic="true"
					aria-live="polite"
					className="min-h-6 text-muted-foreground text-sm"
					id="contact-form-status"
				>
					{status}
				</p>
			</div>
		</form>
	);
}
