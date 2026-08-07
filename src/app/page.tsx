import { createPageMetadata } from '@/lib/seo';

import { HeroSection } from '@/sections/HeroSection';
import { IntroSection } from '@/sections/IntroSection';
import { HighlightsSection } from '@/sections/HighlightsSection';
import { WhyBookDirectSection } from '@/sections/WhyBookDirectSection';
import { LocationSection } from '@/sections/LocationSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ClosingCTASection } from '@/sections/ClosingCTASection';

export const metadata = createPageMetadata({
  title: 'Malhar Baug Resort — Peaceful Getaway in Alibag | Konkan Retreat',
  description:
    'Malhar Baug Resort in Alibag offers spacious rooms, private villas, a pool, and authentic home-style Konkan food. Book direct for best rates. Nagaon–Palhe, Maharashtra.',
  path: '/',
});

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
    </>
  );
}
