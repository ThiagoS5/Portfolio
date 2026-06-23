import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/shared/components/ui/accordion";

type FaqAccordionItemProps = {
	answer: string;
	cta?: {
		ariaLabel: string;
		href: string;
		label: string;
	};
	question: string;
	value: string;
};

export function FaqAccordionItem({
	answer,
	cta,
	question,
	value,
}: FaqAccordionItemProps) {
	return (
		<AccordionItem className="border-border py-4" value={value}>
			<AccordionTrigger className="font-light text-lg leading-8 hover:no-underline">
				{question}
			</AccordionTrigger>
			<AccordionContent className="max-w-2xl pb-2 text-base text-muted-foreground leading-8">
				{answer}
				{cta ? (
					<>
						{" "}
						<a
							aria-label={cta.ariaLabel}
							className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
							href={cta.href}
							rel="noreferrer"
							target="_blank"
						>
							{cta.label}
						</a>
						.
					</>
				) : null}
			</AccordionContent>
		</AccordionItem>
	);
}
