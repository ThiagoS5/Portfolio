import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function HomeHero() {
	const { hero } = usePortfolioContent();

	return (
		<div className="mx-auto max-w-2xl px-6 text-center">
			<div className="mb-6 inline-flex items-center gap-2.5">
				<span
					aria-hidden="true"
					className="size-[7px] rounded-full bg-gold shadow-[0_0_0_4px_var(--gold-soft)]"
				/>
				<span className="font-mono text-[0.72rem] text-gold uppercase tracking-[0.14em]">
					{hero.role}
				</span>
			</div>
			<h1 className="font-mono font-semibold text-5xl leading-[1.02] tracking-tight md:text-7xl">
				{hero.name}
			</h1>
			<p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground leading-7">
				{hero.tagline}
			</p>
			<ul className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-sm">
				{hero.stats.map((stat, index) => (
					<li className="flex items-center gap-4" key={stat.label}>
						{index > 0 ? (
							<span
								aria-hidden="true"
								className="size-1 rounded-full bg-gold"
							/>
						) : null}
						<span>
							<span className="font-semibold text-gold">{stat.value}</span>{" "}
							<span className="text-muted-foreground">{stat.label}</span>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
