import { FaqAccordionItem } from "@/domains/faq/components/FaqAccordionItem";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { Accordion } from "@/shared/components/ui/accordion";
import { usePortfolioContent } from "@/shared/i18n/usePortfolioContent";

export function FaqSection() {
	const { faq } = usePortfolioContent();

	return (
		<section
			aria-labelledby="faq-title"
			className="scroll-mt-36 space-y-12"
			id="faq"
		>
			<div className="mx-auto max-w-3xl space-y-12">
				<SectionHeading
					description={faq.section.description}
					eyebrow={faq.section.eyebrow}
					id="faq-title"
					level={1}
					number="05"
					title={faq.section.title}
				/>
				<Accordion
					aria-label={faq.listLabel}
					className="border-border border-t"
					collapsible
					defaultValue="faq-0"
					type="single"
				>
					{faq.items.map((item, index) => (
						<FaqAccordionItem
							answer={item.answer}
							cta={item.cta}
							key={item.question}
							question={item.question}
							value={`faq-${index}`}
						/>
					))}
				</Accordion>
			</div>
		</section>
	);
}
