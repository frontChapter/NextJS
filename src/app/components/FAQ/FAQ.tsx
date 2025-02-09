import { FAQDataType } from "./faqData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { faqData } from "@/configs/faqData";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-12">
        <h2 className="text-center text-3xl font-semibold text-foreground sm:text-5xl">
          سوالات متداول
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          {faqData.map(({ trigger, content }: FAQDataType, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-[16px] font-medium text-card-foreground">
                {trigger}
              </AccordionTrigger>
              <AccordionContent>
                {content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 max-w-[640px] text-balance text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
