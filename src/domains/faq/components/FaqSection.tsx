import { FaqAccordionItem } from "@/domains/faq/components/FaqAccordionItem";
import { SectionHeading } from "@/shared/components/molecules/SectionHeading";
import { Accordion } from "@/shared/components/ui/accordion";
import { faqs } from "@/shared/data/portfolio";

export function FaqSection() {
	return (
		<section
			aria-labelledby="faq-title"
			className="scroll-mt-36 space-y-12"
			id="faq"
		>
			<div className="mx-auto max-w-3xl space-y-12">
				<SectionHeading
					description="Respostas curtas para alinhar expectativas antes de iniciar uma conversa."
					eyebrow="FAQ"
					id="faq-title"
					level={1}
					title="Perguntas frequentes."
				/>
				<Accordion
					aria-label="Lista de perguntas frequentes"
					className="border-border border-t"
					collapsible
					defaultValue="faq-0"
					type="single"
				>
					{faqs.map((faq, index) => (
						<FaqAccordionItem
							answer={faq.answer}
							key={faq.question}
							question={faq.question}
							value={`faq-${index}`}
						/>
					))}
				</Accordion>
			</div>
		</section>
	);
}
