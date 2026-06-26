type SectionHeadingProps = {
	description?: string;
	eyebrow: string;
	id: string;
	level?: 1 | 2;
	number?: string;
	title: string;
};

export function SectionHeading({
	description,
	eyebrow,
	id,
	level = 2,
	number,
	title,
}: SectionHeadingProps) {
	const HeadingTag = level === 1 ? "h1" : "h2";

	return (
		<header className="space-y-6">
			<div className="flex items-center gap-3.5">
				{number ? (
					<span className="font-mono text-[0.78rem] text-gold tracking-[0.1em]">
						( {number} )
					</span>
				) : null}
				<span className="font-mono text-[0.78rem] text-muted-foreground uppercase tracking-[0.16em]">
					{eyebrow}
				</span>
				<span aria-hidden="true" className="h-px flex-1 bg-border" />
			</div>
			<HeadingTag
				className="max-w-2xl font-medium font-mono text-3xl leading-tight tracking-tight md:text-4xl"
				id={id}
			>
				{title}
			</HeadingTag>
			{description ? (
				<p className="max-w-2xl text-lg text-muted-foreground leading-8">
					{description}
				</p>
			) : null}
		</header>
	);
}
