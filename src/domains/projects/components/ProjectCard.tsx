import { Code2, ExternalLink } from "lucide-react";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Pill } from "@/shared/components/atoms/Pill";
import { Button } from "@/shared/components/ui/button";

type ProjectCardProps = {
	codeUrl: string;
	demoUrl?: string;
	description: string;
	previewAlt?: string;
	previewImage?: string;
	technologies: string[];
	title: string;
};

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
			className="group flex h-full transform-gpu flex-col gap-6 rounded-[8px] border border-border bg-card p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_42px_rgba(0,0,0,0.16)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_22px_54px_rgba(0,0,0,0.24)] motion-reduce:transform-none motion-reduce:transition-none"
		>
			<div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-muted">
				{previewImage ? (
					<img
						alt={previewAlt ?? ""}
						className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
						src={previewImage}
					/>
				) : (
					<div
						aria-hidden="true"
						className="flex size-full items-end justify-end bg-muted p-5"
					>
						<div className="h-20 w-28 rounded-[8px] border border-border bg-background" />
					</div>
				)}
			</div>

			<div className="flex flex-1 flex-col gap-5">
				<div className="space-y-3">
					<h2 className="font-light text-2xl leading-tight" id={titleId}>
						{title}
					</h2>
					<p className="text-muted-foreground text-sm leading-7">
						{description}
					</p>
				</div>

				<ul
					aria-label={t("projects.technologiesLabel", { title })}
					className="mt-auto flex flex-wrap gap-2"
				>
					{technologies.map((technology) => (
						<li key={technology}>
							<Pill variant="outline">{technology}</Pill>
						</li>
					))}
				</ul>

				<div className="flex gap-2 pt-2">
					<Button asChild className="rounded-full" size="sm" variant="outline">
						<a
							aria-label={t("projects.actions.codeAria", { title })}
							href={codeUrl}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Code2 aria-hidden="true" className="size-4" />
							{t("projects.actions.code")}
						</a>
					</Button>
					{demoUrl ? (
						<Button asChild className="rounded-full" size="sm">
							{isInternalDemo ? (
								<Link
									aria-label={t("projects.actions.demoAria", { title })}
									to={demoUrl}
								>
									<ExternalLink aria-hidden="true" className="size-4" />
									{t("projects.actions.demo")}
								</Link>
							) : (
								<a
									aria-label={t("projects.actions.demoExternalAria", { title })}
									href={demoUrl}
									rel="noopener noreferrer"
									target="_blank"
								>
									<ExternalLink aria-hidden="true" className="size-4" />
									{t("projects.actions.demo")}
								</a>
							)}
						</Button>
					) : null}
				</div>
			</div>
		</article>
	);
}
