import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { ContactSection } from '@/components/contact/ContactSection';
import { FAQSection } from '@/components/sections/FAQSection';

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
        backgroundImage="/ExteriorPhotos/mainentry.jpeg"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ContactSection />
        </div>
      </section>

      <FAQSection
        label="Booking FAQ"
        title="Questions About Booking & Payments"
        subtitle="Everything you need to know before reserving your stay at Malhar Baug Resort."
        faqs={[
          {
            question: 'How do I book a room at Malhar Baug Resort?',
            answer:
              'Book directly through our online booking engine, or call or WhatsApp us at +91 98765 43210 and our front desk will confirm availability and rates instantly.',
          },
          {
            question: 'Is an advance payment required?',
            answer:
              'Yes, a 25% advance payment is required to confirm a booking. The balance is payable on arrival.',
          },
          {
            question: 'What is the fastest way to reach you?',
            answer:
              'Calling or messaging us on WhatsApp at +91 98765 43210 is the fastest way — our front desk is open 24 hours and usually replies within minutes during the day.',
          },
          {
            question: 'What are the check-in and check-out timings?',
            answer:
              'Check-in is from 12:00 PM and check-out is at 11:00 AM. Early arrival or late departure can be requested subject to availability.',
          },
          {
            question: 'Do you help with local transport?',
            answer:
              'Yes, pickup and drop assistance can be arranged on request (charges apply), and we’re happy to plan day trips to Alibag’s beaches and forts.',
          },
          {
            question: 'Can you host group bookings and functions?',
            answer:
              'Yes. We welcome office outings, family functions, and birthdays, with group meal plans and a lawn available on request. Contact us to plan the details.',
          },
        ]}
      />
    </>
  );
}
