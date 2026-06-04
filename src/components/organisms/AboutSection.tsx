import { Pill } from "@/components/atoms/Pill";
import { aboutParagraphs, coreTechnologies } from "@/data/portfolio";

export function AboutSection() {
	return (
		<section aria-labelledby="sobre-title" className="scroll-mt-36" id="sobre">
			<div className="grid gap-16 md:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] md:items-start">
				<div className="space-y-12">
					<header className="space-y-5">
						<h1
							className="font-light text-5xl leading-tight md:text-7xl"
							id="sobre-title"
						>
							Sobre Mim
						</h1>
						<p className="max-w-3xl text-muted-foreground text-xl leading-9">
							A interseção entre design minimalista e engenharia de software de
							ponta.
						</p>
					</header>

					<div className="space-y-8 text-lg leading-9">
						{aboutParagraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>

				<aside
					aria-label="Informações complementares"
					className="space-y-14 md:pt-2"
				>
					<section aria-labelledby="tech-title" className="space-y-6">
						<h2
							className="font-semibold text-muted-foreground text-sm"
							id="tech-title"
						>
							Tecnologias core
						</h2>
						<ul
							aria-label="Tecnologias principais"
							className="flex flex-wrap gap-3"
						>
							{coreTechnologies.map((technology) => (
								<li key={technology}>
									<Pill>{technology}</Pill>
								</li>
							))}
						</ul>
					</section>

					<section aria-labelledby="education-title" className="space-y-5">
						<h2
							className="font-semibold text-muted-foreground text-sm"
							id="education-title"
						>
							Formação acadêmica
						</h2>
						<div className="space-y-2">
							<p className="font-semibold text-xl">Ciência da Computação</p>
							<p className="text-muted-foreground">
								Universidade Federal do Estado
							</p>
							<p className="text-muted-foreground text-sm">
								<time dateTime="2018">2018</time> -{" "}
								<time dateTime="2022">2022</time>
							</p>
						</div>
					</section>
				</aside>
			</div>
		</section>
	);
}
