import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormFieldProps = {
	autoComplete?: string;
	descriptionId?: string;
	id: string;
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	type?: string;
	variant?: "input" | "textarea";
};

const fieldClasses =
	"min-h-12 rounded-none border-x-0 border-t-0 border-b border-input bg-transparent px-0 text-base focus-visible:border-foreground focus-visible:ring-0";

export function FormField({
	autoComplete,
	descriptionId,
	id,
	label,
	name,
	placeholder,
	required = false,
	type = "text",
	variant = "input",
}: FormFieldProps) {
	return (
		<div className="space-y-3">
			<Label className="font-medium text-sm" htmlFor={id}>
				{label}
			</Label>
			{variant === "textarea" ? (
				<Textarea
					aria-describedby={descriptionId}
					aria-required={required}
					className={cn(fieldClasses, "min-h-32 resize-y")}
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			) : (
				<Input
					aria-describedby={descriptionId}
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
		</div>
	);
}
