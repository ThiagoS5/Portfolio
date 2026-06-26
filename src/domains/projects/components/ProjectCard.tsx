import { useId } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Pill } from "@/shared/components/atoms/Pill";

type ProjectCardProps = {
	codeUrl: string;
	demoUrl?: string;
	description: string;
	previewAlt?: string;
	previewImage?: string;
	technologies: string[];
	title: string;
};

const linkClasses =
	"font-mono text-[0.78rem] tracking-wide transition-colors focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ProjectCard({
	codeUrl,
	demoUrl,
	description,
	previewAlt,
	previewImage,
	technologies,
	title,
}: ProjectCardProps) {
	const titleId = useId();
	const { t } = useTranslation();
	const isInternalDemo = demoUrl?.startsWith("/") ?? false;

	return (
		<article
			aria-labelledby={titleId}
			className="group flex h-full transform-gpu flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-gold/60 motion-reduce:transform-none motion-reduce:transition-none dark:hover:border-[#CBA85C]/70"
		>
			{previewImage ? (
				<div className="aspect-[16/10] overflow-hidden bg-secondary">
					<img
						alt={previewAlt ?? ""}
						className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
						src={previewImage}
					/>
				</div>
			) : (
				<div
					aria-hidden="true"
					className="flex aspect-[16/10] items-center overflow-hidden bg-secondary p-5"
				>
					<pre className="m-0 font-mono text-[11px] text-muted-foreground leading-[1.8]">
						<span className="text-gold">$</span> node toEpub.js ./pdfs{"\n"}
						<span>→ converting 12 files...</span>
						{"\n"}
						<span>→ calibre ebook-convert</span>
						{"\n"}
						<span className="text-gold-strong">✓ done</span>{" "}
						<span className="text-foreground">12 .epub</span>
					</pre>
				</div>
			)}

			<div className="flex flex-1 flex-col gap-4 p-5">
				<h2
					className="font-medium font-mono text-lg leading-tight"
					id={titleId}
				>
					{title}
				</h2>
				<p className="flex-1 text-muted-foreground text-sm leading-7">
					{description}
				</p>

				<ul
					aria-label={t("projects.technologiesLabel", { title })}
					className="flex flex-wrap gap-2"
				>
					{technologies.map((technology) => (
						<li key={technology}>
							<Pill variant="outline">{technology}</Pill>
						</li>
					))}
				</ul>

				<div className="flex gap-5 border-border border-t pt-4">
					<a
						aria-label={t("projects.actions.codeAria", { title })}
						className={`${linkClasses} text-muted-foreground hover:text-gold`}
						href={codeUrl}
						rel="noopener noreferrer"
						target="_blank"
					>
						<span aria-hidden="true">↗</span>{" "}
						<span>{t("projects.actions.code")}</span>
					</a>
					{demoUrl ? (
						isInternalDemo ? (
							<Link
								aria-label={t("projects.actions.demoAria", { title })}
								className={`${linkClasses} text-gold hover:text-gold-strong`}
								to={demoUrl}
							>
								<span aria-hidden="true">→</span>{" "}
								<span>{t("projects.actions.demo")}</span>
							</Link>
						) : (
							<a
								aria-label={t("projects.actions.demoExternalAria", { title })}
								className={`${linkClasses} text-gold hover:text-gold-strong`}
								href={demoUrl}
								rel="noopener noreferrer"
								target="_blank"
							>
								<span aria-hidden="true">→</span>{" "}
								<span>{t("projects.actions.demo")}</span>
							</a>
						)
					) : null}
				</div>
			</div>
		</article>
	);
}
