import type { UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { cn } from "@/shared/lib/utils";

type FormFieldProps = {
	autoComplete?: string;
	descriptionId?: string;
	error?: string;
	id: string;
	label: string;
	name: string;
	placeholder: string;
	registration?: UseFormRegisterReturn;
	required?: boolean;
	type?: string;
	variant?: "input" | "textarea";
};

const fieldClasses =
	"min-h-12 rounded-lg border border-input bg-card px-4 text-base focus-visible:border-gold focus-visible:ring-0";

export function FormField({
	autoComplete,
	descriptionId,
	error,
	id,
	label,
	name,
	placeholder,
	registration,
	required = false,
	type = "text",
	variant = "input",
}: FormFieldProps) {
	const errorId = error ? `${id}-error` : undefined;
	const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");

	return (
		<div className="space-y-3">
			<Label
				className="font-mono text-muted-foreground text-xs tracking-wide"
				htmlFor={id}
			>
				{label}
			</Label>
			{variant === "textarea" ? (
				<Textarea
					{...registration}
					aria-describedby={describedBy || undefined}
					aria-invalid={error ? true : undefined}
					aria-required={required}
					className={cn(fieldClasses, "min-h-32 resize-y")}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			) : (
				<Input
					{...registration}
					aria-describedby={describedBy || undefined}
					aria-invalid={error ? true : undefined}
					aria-required={required}
					autoComplete={autoComplete}
					className={fieldClasses}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					type={type}
				/>
			)}
			{error ? (
				<p className="text-destructive text-sm" id={errorId} role="alert">
					{error}
				</p>
			) : null}
		</div>
	);
}
