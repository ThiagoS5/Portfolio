import { ProjectCard } from "@/domains/projects/components/ProjectCard";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { projects } from "@/shared/data/portfolio";

export function ProjectsSection() {
	return (
		<section
			aria-labelledby="projetos-title"
			className="scroll-mt-36 space-y-12"
			id="projetos"
		>
			<SectionHeading
				description="Projetos selecionados que exploram composição visual, clareza de uso e componentes reaproveitáveis."
				eyebrow="Projetos"
				id="projetos-title"
				level={1}
				title="Trabalhos recentes com interfaces limpas e objetivas."
			/>
			<ul
				aria-label="Lista de projetos selecionados"
				className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
			>
				{projects.map((project) => (
					<li className="min-w-0" key={project.title}>
						<ProjectCard {...project} />
					</li>
				))}
			</ul>
		</section>
	);
}
