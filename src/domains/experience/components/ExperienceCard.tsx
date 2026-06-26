import { useId } from "react";
import { Pill } from "@/shared/components/atoms/Pill";

type ExperienceCardProps = {
	company: string;
	description: string;
	highlights?: string[];
	highlightsLabel?: string;
	highlightsTitle?: string;
	metrics?: string[];
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
	metrics = [],
	period,
	role,
	technologies,
	technologiesLabel = `Tecnologias relacionadas a ${role}`,
}: ExperienceCardProps) {
	const titleId = useId();

	return (
		<article
			aria-labelledby={titleId}
			className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start"
		>
			<div className="space-y-5 md:sticky md:top-24">
				<p className="font-mono text-gold text-sm">{period}</p>
				<div className="space-y-1">
					<h2
						className="font-medium font-mono text-2xl leading-tight"
						id={titleId}
					>
						{role}
					</h2>
					<p className="text-muted-foreground">{company}</p>
				</div>
				<p className="max-w-sm text-muted-foreground leading-7">
					{description}
				</p>
				<ul aria-label={technologiesLabel} className="flex flex-wrap gap-2">
					{technologies.map((technology) => (
						<li key={technology}>
							<Pill variant="outline">{technology}</Pill>
						</li>
					))}
				</ul>
			</div>

			{highlights.length > 0 ? (
				<div>
					{highlightsTitle ? (
						<h3 className="sr-only">{highlightsTitle}</h3>
					) : null}
					<ul
						aria-label={highlightsLabel}
						className="divide-y divide-border border-border border-t"
					>
						{highlights.map((highlight, index) => (
							<li
								className="grid grid-cols-[60px_1fr] items-baseline gap-4 py-4"
								key={highlight}
							>
								<span className="font-mono font-semibold text-gold text-sm">
									{metrics[index] ?? "—"}
								</span>
								<span className="text-muted-foreground text-sm leading-7">
									{highlight}
								</span>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</article>
	);
}
