import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata = createPageMetadata({
  title: 'Contact & Booking — Malhar Baug Resort Alibag',
  description:
    'Contact Malhar Baug Resort to book rooms, check availability, or ask about group rates. Call +91 98765 43210. Address: H.No. 3116, Nagaon, Palhe, Alibag 402204.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Booking"
        subtitle="Get in touch to check availability or plan your stay"
        backgroundImage="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <ContactSection />
          </div>
        </div>
      </section>
    </>
  );
}
