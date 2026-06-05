import { useId } from "react";
import { Pill } from "@/shared/components/atoms/Pill";

type ExperienceCardProps = {
	company: string;
	description: string;
	highlights?: string[];
	highlightsLabel?: string;
	highlightsTitle?: string;
	period: string;
	role: string;
	technologies: string[];
	technologiesLabel?: string;
};

export function ExperienceCard({
	company,
	description,
	highlights = [],
	highlightsLabel,
	highlightsTitle,
	period,
	role,
	technologies,
	technologiesLabel = `Tecnologias relacionadas a ${role}`,
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
					<h2 className="font-light text-2xl leading-tight" id={titleId}>
						{role}
					</h2>
					<p className="font-medium">{company}</p>
				</div>
				<p className="max-w-2xl text-muted-foreground leading-8">
					{description}
				</p>
				{highlights.length > 0 ? (
					<div className="space-y-3">
						{highlightsTitle ? (
							<h3 className="font-semibold text-sm">{highlightsTitle}</h3>
						) : null}
						<ul
							aria-label={highlightsLabel}
							className="list-disc space-y-3 pl-5 text-muted-foreground leading-7"
						>
							{highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</div>
				) : null}
				<ul aria-label={technologiesLabel} className="flex flex-wrap gap-2">
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
