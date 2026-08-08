import { createPageMetadata } from '@/lib/seo';

import { HeroSection } from '@/sections/HeroSection';
import { IntroSection } from '@/sections/IntroSection';
import { HighlightsSection } from '@/sections/HighlightsSection';
import { WhyBookDirectSection } from '@/sections/WhyBookDirectSection';
import { LocationSection } from '@/sections/LocationSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ClosingCTASection } from '@/sections/ClosingCTASection';
import { FAQSection } from '@/components/sections/FAQSection';

export const metadata = createPageMetadata({
  title: 'Malhar Baug Resort — Peaceful Getaway in Alibag | Konkan Retreat',
  description:
    'Malhar Baug Resort in Alibag offers spacious rooms, private villas, a pool, and authentic home-style Konkan food. Book direct for best rates. Nagaon–Palhe, Maharashtra.',
  path: '/',
});

const faqs = [
  {
    question: 'Where is Malhar Baug Resort located?',
    answer:
      'Malhar Baug Resort is at H.No. 3116, Nagaon, Palhe, Alibag, Raigad, Maharashtra – 402204, in the quiet green Nagaon–Palhe area of Alibag — a short drive from Alibag Beach and Revdanda Fort.',
  },
  {
    question: 'How far is the resort from Mumbai and Pune?',
    answer:
      'It is roughly a 2.5–3 hour drive from Mumbai via the Mumbai–Goa highway and about a 3.5–4 hour drive from Pune. Nagaon Beach is just 2 km away.',
  },
  {
    question: 'What room types are available?',
    answer:
      'We offer three stay options: the Super Deluxe Room (sleeps 2–3), the Superior Villa (sleeps 4–6), and the Two-Bedroom Villa (sleeps up to 10–15). All are fully air-conditioned.',
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer:
      'Yes, breakfast is included with every stay. Lunch and dinner are charged separately or can be added on as a meal plan.',
  },
  {
    question: 'What are the check-in and check-out timings?',
    answer:
      'Check-in is from 12:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be requested subject to availability.',
  },
  {
    question: 'Is free parking available?',
    answer:
      'Yes, we offer free on-site self-parking with space for 15+ vehicles, so you can drive down comfortably from Mumbai or Pune.',
  },
  {
    question: 'Can we host small functions or birthdays at the resort?',
    answer:
      'Yes. Our open lawn is available on request for small functions, birthday celebrations, and office outings. Please contact us in advance to plan the details.',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <WhyBookDirectSection />
      <LocationSection />
      <TestimonialsSection />
      <ClosingCTASection />
      <FAQSection
        label="Resort FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything guests usually ask before staying at Malhar Baug Resort. Can’t find an answer? Call or WhatsApp us anytime."
        faqs={faqs}
      />
    </>
  );
}
