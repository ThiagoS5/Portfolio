import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

type FaqAccordionItemProps = {
	answer: string;
	question: string;
	value: string;
};

export function FaqAccordionItem({
	answer,
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
			</AccordionContent>
		</AccordionItem>
	);
}
