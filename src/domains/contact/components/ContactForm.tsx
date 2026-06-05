import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod/v4";
import { FormField } from "@/shared/components/molecules/FormField";
import { Button } from "@/shared/components/ui/button";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

type ContactFormMessages = {
	email: string;
	message: string;
	name: string;
};

function createContactSchema(messages: ContactFormMessages) {
	return z.object({
		email: z.string().trim().email(messages.email),
		message: z.string().trim().min(10, messages.message),
		name: z.string().trim().min(2, messages.name),
	});
}

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactForm() {
	const { t } = useTranslation();
	const { contact } = usePortfolioContent();
	const [status, setStatus] = useState("");
	const contactSchema = useMemo(
		() => createContactSchema(contact.form.errors),
		[contact.form.errors],
	);
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
		const subject = encodeURIComponent(
			t("contact.form.mailtoSubject", { name }),
		);
		const body = encodeURIComponent(
			t("contact.form.mailtoBody", { email, message }),
		);

		window.location.href = `mailto:${contact.form.email}?subject=${subject}&body=${body}`;
		setStatus(contact.form.status);
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
				{contact.form.title}
			</h2>
			<p className="sr-only" id="contact-form-help">
				{contact.form.help}
			</p>
			<FormField
				autoComplete="name"
				error={errors.name?.message}
				id="name"
				label={contact.form.labels.name}
				name="name"
				placeholder={contact.form.placeholders.name}
				registration={register("name")}
				required
			/>
			<FormField
				autoComplete="email"
				error={errors.email?.message}
				id="email"
				label={contact.form.labels.email}
				name="email"
				placeholder={contact.form.placeholders.email}
				registration={register("email")}
				required
				type="email"
			/>
			<FormField
				error={errors.message?.message}
				id="message"
				label={contact.form.labels.message}
				name="message"
				placeholder={contact.form.placeholders.message}
				registration={register("message")}
				required
				variant="textarea"
			/>
			<div className="flex flex-col items-start gap-4">
				<Button className="rounded-full px-6" type="submit">
					<Send aria-hidden="true" className="size-4" />
					{contact.form.button}
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
