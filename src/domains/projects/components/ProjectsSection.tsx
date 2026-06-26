import { ProjectCard } from "@/domains/projects/components/ProjectCard";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function ProjectsSection() {
	const { projects } = usePortfolioContent();

	return (
		<section
			aria-labelledby="projetos-title"
			className="scroll-mt-36 space-y-12"
			id="projetos"
		>
			<SectionHeading
				description={projects.section.description}
				eyebrow={projects.section.eyebrow}
				id="projetos-title"
				level={1}
				number="02"
				title={projects.section.title}
			/>
			<ul
				aria-label={projects.listLabel}
				className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
			>
				{projects.items.map((project) => (
					<li className="min-w-0" key={project.title}>
						<ProjectCard {...project} />
					</li>
				))}
			</ul>
		</section>
	);
}
