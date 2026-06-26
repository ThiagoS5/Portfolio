import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ContactForm } from "@/domains/contact/components/ContactForm";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function ContactSection() {
	const { t } = useTranslation();
	const { contact } = usePortfolioContent();

	return (
		<section
			aria-labelledby="contato-title"
			className="scroll-mt-36"
			id="contato"
		>
			<div className="grid gap-16 md:grid-cols-[0.8fr_1fr] md:items-start">
				<div className="space-y-10">
					<SectionHeading
						description={contact.section.description}
						eyebrow={contact.section.eyebrow}
						id="contato-title"
						level={1}
						number="04"
						title={contact.section.title}
					/>

					<address className="space-y-5 not-italic">
						{contact.links.map((link) => {
							const isExternal = link.href.startsWith("http");

							return (
								<a
									aria-label={t("contact.linkAria", {
										external: isExternal ? contact.externalSuffix : "",
										label: link.label,
										value: link.value,
									})}
									className="group flex items-center justify-between gap-4 border-border border-b py-5 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
									href={link.href}
									key={link.label}
									rel={isExternal ? "noopener noreferrer" : undefined}
									target={isExternal ? "_blank" : undefined}
								>
									<span>
										<span className="block font-mono text-[0.68rem] text-gold uppercase tracking-[0.1em]">
											{link.label}
										</span>
										<span className="text-base text-foreground">
											{link.value}
										</span>
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
