import { Pill } from "@/shared/components/atoms/Pill";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function AboutSection() {
	const { about } = usePortfolioContent();

	return (
		<section aria-labelledby="sobre-title" className="scroll-mt-36" id="sobre">
			<div className="grid gap-16 md:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] md:items-start">
				<div className="space-y-12">
					<header className="space-y-5">
						<h1
							className="font-light text-5xl leading-tight md:text-7xl"
							id="sobre-title"
						>
							{about.title}
						</h1>
						<p className="max-w-3xl text-muted-foreground text-xl leading-9">
							{about.intro}
						</p>
					</header>

					<div className="space-y-8 text-lg leading-9">
						{about.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>

				<aside aria-label={about.asideLabel} className="space-y-14 md:pt-2">
					<figure className="space-y-4">
						<div className="aspect-square w-full overflow-hidden rounded-[8px] border border-border bg-card shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_42px_rgba(0,0,0,0.16)]">
							<img
								alt={about.profile.alt}
								className="size-full object-cover"
								decoding="async"
								src={about.profile.src}
							/>
						</div>
						<figcaption className="text-muted-foreground text-sm leading-6">
							{about.profile.caption}
						</figcaption>
					</figure>

					<section aria-labelledby="tech-title" className="space-y-6">
						<h2
							className="font-semibold text-muted-foreground text-sm"
							id="tech-title"
						>
							{about.skillsTitle}
						</h2>
						<ul aria-label={about.skillsAria} className="flex flex-wrap gap-3">
							{about.skills.map((skill) => (
								<li key={skill}>
									<Pill>{skill}</Pill>
								</li>
							))}
						</ul>
					</section>

					<section aria-labelledby="education-title" className="space-y-5">
						<h2
							className="font-semibold text-muted-foreground text-sm"
							id="education-title"
						>
							{about.educationTitle}
						</h2>
						<div className="space-y-2">
							<p className="font-semibold text-xl">{about.education.degree}</p>
							<p className="text-muted-foreground">
								{about.education.institution}
							</p>
							<p className="text-muted-foreground text-sm">
								{about.education.period}
							</p>
						</div>
					</section>

					<section aria-labelledby="certifications-title" className="space-y-5">
						<h2
							className="font-semibold text-muted-foreground text-sm"
							id="certifications-title"
						>
							{about.certificationsTitle}
						</h2>
						<ul className="space-y-5">
							{about.certifications.map((certification) => (
								<li className="space-y-2" key={certification.title}>
									<p className="font-semibold">{certification.title}</p>
									<p className="text-muted-foreground text-sm">
										{certification.year}
									</p>
									<p className="text-muted-foreground text-sm leading-6">
										{certification.description}
									</p>
								</li>
							))}
						</ul>
					</section>
				</aside>
			</div>
		</section>
	);
}
