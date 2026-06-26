import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function AboutSection() {
	const { about } = usePortfolioContent();

	return (
		<section aria-labelledby="sobre-title" className="scroll-mt-36" id="sobre">
			<div className="mb-10 flex items-center gap-3.5">
				<span className="font-mono text-[0.78rem] text-gold tracking-[0.1em]">
					( 01 )
				</span>
				<span className="font-mono text-[0.78rem] text-muted-foreground uppercase tracking-[0.16em]">
					{about.eyebrow}
				</span>
				<span aria-hidden="true" className="h-px flex-1 bg-border" />
			</div>

			<div className="grid gap-16 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:items-start">
				<div className="space-y-11">
					<h1
						className="max-w-xl font-medium font-mono text-3xl leading-tight tracking-tight md:text-4xl"
						id="sobre-title"
					>
						{about.heading.pre}
						<span className="text-gold">{about.heading.highlight}</span>
						{about.heading.post}
					</h1>

					<div className="max-w-2xl space-y-5 text-lg text-muted-foreground leading-8">
						{about.paragraphs.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>

					<section aria-labelledby="stack-title" className="space-y-6">
						<h2
							className="font-mono text-[0.72rem] text-gold uppercase tracking-[0.12em]"
							id="stack-title"
						>
							{about.stackTitle}
						</h2>
						<div className="grid gap-7 sm:grid-cols-2">
							{about.stack.map((group) => (
								<div key={group.title}>
									<h3 className="mb-3 font-mono text-[0.68rem] text-muted-foreground uppercase tracking-[0.08em]">
										{group.title}
									</h3>
									<ul className="space-y-1.5 font-mono text-muted-foreground text-sm">
										{group.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>
				</div>

				<aside aria-label={about.asideLabel} className="space-y-9 md:pt-1">
					<figure className="space-y-3">
						<div className="aspect-square w-full overflow-hidden rounded-xl border border-input bg-card">
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

					<section aria-labelledby="education-title" className="space-y-2">
						<h2
							className="font-mono text-[0.72rem] text-muted-foreground uppercase tracking-[0.12em]"
							id="education-title"
						>
							{about.educationTitle}
						</h2>
						<p className="font-medium text-base">{about.education.degree}</p>
						<p className="text-muted-foreground text-sm">
							{about.education.institution}
						</p>
						<p className="text-muted-foreground text-sm">
							{about.education.period}
						</p>
					</section>

					<section aria-labelledby="certifications-title" className="space-y-4">
						<h2
							className="font-mono text-[0.72rem] text-muted-foreground uppercase tracking-[0.12em]"
							id="certifications-title"
						>
							{about.certificationsTitle}
						</h2>
						<ul className="space-y-4">
							{about.certifications.map((certification) => (
								<li
									className="border-gold-soft border-l-2 pl-3.5"
									key={certification.title}
								>
									<p className="font-medium text-foreground text-sm">
										{certification.title}
									</p>
									<p className="text-muted-foreground text-xs">
										{certification.year}
									</p>
									<p className="mt-1 text-muted-foreground text-xs leading-5">
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
