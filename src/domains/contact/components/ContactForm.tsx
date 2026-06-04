import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

import { FormField } from "@/shared/components/molecules/FormField";
import { Button } from "@/shared/components/ui/button";

const contactSchema = z.object({
	email: z.string().trim().email("Informe um email valido."),
	message: z
		.string()
		.trim()
		.min(10, "Descreva a mensagem com pelo menos 10 caracteres."),
	name: z.string().trim().min(2, "Informe seu nome."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
	const [status, setStatus] = useState("");
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<ContactFormData>({
		defaultValues: {
			email: "",
			message: "",
			name: "",
		},
		resolver: zodResolver(contactSchema),
	});

	function handleValidSubmit({ email, message, name }: ContactFormData) {
		const subject = encodeURIComponent(`Contato pelo portfolio - ${name}`);
		const body = encodeURIComponent(`${message}\n\nResposta para: ${email}`);

		window.location.href = `mailto:thiago.dev@email.com?subject=${subject}&body=${body}`;
		setStatus("Abrindo seu cliente de email para finalizar o envio.");
	}

	return (
		<form
			aria-describedby="contact-form-help contact-form-status"
			aria-labelledby="contact-form-title"
			className="space-y-8"
			noValidate
			onSubmit={handleSubmit(handleValidSubmit, () => setStatus(""))}
		>
			<h2 className="sr-only" id="contact-form-title">
				Formulario de contato
			</h2>
			<p className="sr-only" id="contact-form-help">
				Todos os campos sao obrigatorios. Ao enviar, seu cliente de email sera
				aberto com a mensagem preenchida.
			</p>
			<FormField
				autoComplete="name"
				error={errors.name?.message}
				id="name"
				label="Nome"
				name="name"
				placeholder="Seu nome"
				registration={register("name")}
				required
			/>
			<FormField
				autoComplete="email"
				error={errors.email?.message}
				id="email"
				label="Email"
				name="email"
				placeholder="voce@email.com"
				registration={register("email")}
				required
				type="email"
			/>
			<FormField
				error={errors.message?.message}
				id="message"
				label="Mensagem"
				name="message"
				placeholder="Conte brevemente sobre o projeto"
				registration={register("message")}
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
