'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  label?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  label = 'FAQ',
  title = 'Frequently Asked Questions',
  subtitle,
  className,
}: FAQSectionProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={cn('py-20 lg:py-24 bg-secondary', className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <AnimateOnScroll className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold leading-tight mb-5">
              {title}
            </h2>
            {subtitle && (
              <p className="font-sans text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
            )}
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border bg-white rounded-2xl mb-4 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="font-serif text-lg font-semibold text-foreground hover:no-underline px-6 py-5 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
