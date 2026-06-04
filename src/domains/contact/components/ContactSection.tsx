import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/domains/contact/components/ContactForm";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { contactLinks } from "@/shared/data/portfolio";

export function ContactSection() {
	return (
		<section
			aria-labelledby="contato-title"
			className="scroll-mt-36"
			id="contato"
		>
			<div className="grid gap-16 md:grid-cols-[0.8fr_1fr] md:items-start">
				<div className="space-y-10">
					<SectionHeading
						description="Envie uma mensagem com contexto, prazo e objetivo. A resposta vem com próximos passos objetivos."
						eyebrow="Contatos"
						id="contato-title"
						level={1}
						title="Vamos transformar uma ideia em interface."
					/>

					<address className="space-y-5 not-italic">
						{contactLinks.map((link) => {
							const isExternal = link.href.startsWith("http");

							return (
								<a
									aria-label={`${link.label}: ${link.value}${
										isExternal ? " (abre em nova aba)" : ""
									}`}
									className="group flex items-center justify-between gap-4 border-border border-b py-4 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
									href={link.href}
									key={link.label}
									rel={isExternal ? "noopener noreferrer" : undefined}
									target={isExternal ? "_blank" : undefined}
								>
									<span>
										<span className="block font-semibold text-xs">
											{link.label}
										</span>
										<span className="text-lg">{link.value}</span>
									</span>
									<ArrowUpRight
										aria-hidden="true"
										className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</a>
							);
						})}
					</address>
				</div>

				<div className="rounded-[8px] border border-border bg-card p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_42px_rgba(0,0,0,0.16)] md:p-8">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}
