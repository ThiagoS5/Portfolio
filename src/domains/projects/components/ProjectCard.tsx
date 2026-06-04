import { Code2, ExternalLink } from "lucide-react";
import { useId } from "react";
import { Link } from "react-router";

import { Pill } from "@/shared/components/atoms/Pill";
import { Button } from "@/shared/components/ui/button";

type ProjectCardProps = {
	codeUrl: string;
	demoUrl: string;
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
	const isInternalDemo = demoUrl.startsWith("/");

	return (
		<article
			aria-labelledby={titleId}
			className="group flex h-full flex-col gap-6 rounded-[8px] border border-border bg-card p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_42px_rgba(0,0,0,0.16)] transition duration-300 hover:border-foreground/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_54px_rgba(0,0,0,0.24)]"
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
					aria-label={`Tecnologias usadas em ${title}`}
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
							aria-label={`Abrir código do projeto ${title} em nova aba`}
							href={codeUrl}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Code2 aria-hidden="true" className="size-4" />
							Código
						</a>
					</Button>
					<Button asChild className="rounded-full" size="sm">
						{isInternalDemo ? (
							<Link
								aria-label={`Abrir demonstração do projeto ${title}`}
								to={demoUrl}
							>
								<ExternalLink aria-hidden="true" className="size-4" />
								Demo
							</Link>
						) : (
							<a
								aria-label={`Abrir demonstração do projeto ${title} em nova aba`}
								href={demoUrl}
								rel="noopener noreferrer"
								target="_blank"
							>
								<ExternalLink aria-hidden="true" className="size-4" />
								Demo
							</a>
						)}
					</Button>
				</div>
			</div>
		</article>
	);
}
