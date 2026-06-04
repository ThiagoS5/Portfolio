type SectionHeadingProps = {
	description?: string;
	eyebrow: string;
	id: string;
	level?: 1 | 2;
	title: string;
};

export function SectionHeading({
	description,
	eyebrow,
	id,
	level = 2,
	title,
}: SectionHeadingProps) {
	const HeadingTag = level === 1 ? "h1" : "h2";

	return (
		<header className="space-y-4">
			<p className="font-semibold text-muted-foreground text-sm">{eyebrow}</p>
			<HeadingTag
				className="max-w-3xl font-light text-4xl leading-tight md:text-6xl"
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
