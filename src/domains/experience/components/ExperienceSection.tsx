import { ExperienceCard } from "@/domains/experience/components/ExperienceCard";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function ExperienceSection() {
	const { experience } = usePortfolioContent();

	return (
		<section
			aria-labelledby="experiencia-title"
			className="scroll-mt-36 space-y-12"
			id="experiencia"
		>
			<SectionHeading
				description={experience.section.description}
				eyebrow={experience.section.eyebrow}
				id="experiencia-title"
				level={1}
				title={experience.section.title}
			/>
			<ol className="space-y-12">
				{experience.items.map((item) => (
					<li key={`${item.company}-${item.role}`}>
						<ExperienceCard
							{...item}
							highlightsLabel={experience.achievementLabel.replace(
								"{{role}}",
								item.role,
							)}
							highlightsTitle={experience.achievementTitle}
							technologiesLabel={experience.technologiesLabel.replace(
								"{{role}}",
								item.role,
							)}
						/>
					</li>
				))}
			</ol>
		</section>
	);
}
