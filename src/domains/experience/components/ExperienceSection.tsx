import { ExperienceCard } from "@/domains/experience/components/ExperienceCard";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { experiences } from "@/shared/data/portfolio";

export function ExperienceSection() {
	return (
		<section
			aria-labelledby="experiencia-title"
			className="scroll-mt-36 space-y-12"
			id="experiencia"
		>
			<SectionHeading
				description="Uma trajetória orientada por sistemas, documentação, acessibilidade e implementação cuidadosa."
				eyebrow="Experiência"
				id="experiencia-title"
				level={1}
				title="Experiência aplicada em produtos digitais."
			/>
			<ol className="space-y-12">
				{experiences.map((experience) => (
					<li key={experience.role}>
						<ExperienceCard {...experience} />
					</li>
				))}
			</ol>
		</section>
	);
}
