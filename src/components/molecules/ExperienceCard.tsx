import { useId } from "react";

import { Pill } from "@/components/atoms/Pill";

type ExperienceCardProps = {
	company: string;
	description: string;
	period: string;
	role: string;
	technologies: string[];
};

export function ExperienceCard({
	company,
	description,
	period,
	role,
	technologies,
}: ExperienceCardProps) {
	const titleId = useId();

	return (
		<article
			aria-labelledby={titleId}
			className="grid gap-8 border-border border-t pt-10 md:grid-cols-[180px_1fr]"
		>
			<p className="font-medium text-muted-foreground text-sm">{period}</p>
			<div className="space-y-5">
				<div className="space-y-2">
					<h3 className="font-light text-2xl leading-tight" id={titleId}>
						{role}
					</h3>
					<p className="font-medium">{company}</p>
				</div>
				<p className="max-w-2xl text-muted-foreground leading-8">
					{description}
				</p>
				<ul
					aria-label={`Tecnologias relacionadas a ${role}`}
					className="flex flex-wrap gap-2"
				>
					{technologies.map((technology) => (
						<li key={technology}>
							<Pill variant="outline">{technology}</Pill>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
