import {
  Waves,
  UtensilsCrossed,
  Wifi,
  Car,
  Clock,
  ConciergeBell,
  TreePine,
  Sparkles,
  Map,
  Users,
  Building2,
  PartyPopper,
} from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FAQSection } from '@/components/sections/FAQSection';

export const metadata = createPageMetadata({
  title: 'Amenities & Facilities — Malhar Baug Resort Alibag',
  description:
    'Malhar Baug Resort features a swimming pool, free Wi-Fi, home-style meals, free parking, 24hr front desk, and peaceful green grounds. Ideal for families and groups in Alibag.',
  path: '/amenities',
});

const amenities = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Well-maintained pool, open 7:00 AM – 7:00 PM daily',
    image: '/ExteriorPhotos/ext4.jpeg',
  },
  {
    icon: UtensilsCrossed,
    title: 'Communal Kitchen',
    description: 'Shared kitchen available on request for large groups',
    image: '/ExteriorPhotos/dining.jpeg',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property',
    image: '/ExteriorPhotos/ext7.jpeg',
  },
  {
    icon: Car,
    title: 'Free Self-Parking',
    description: 'On-site parking, space for 15+ vehicles',
    image: '/ExteriorPhotos/parkingarea.jpeg',
  },
  {
    icon: Clock,
    title: '24-Hour Front Desk',
    description: 'Assistance whenever you need it',
    image: '/ExteriorPhotos/mainentry.jpeg',
  },
  {
    icon: ConciergeBell,
    title: 'Room Service',
    description: 'Available 7:00 AM – 10:00 PM',
    image: '/ExteriorPhotos/din1.jpeg',
  },
  {
    icon: TreePine,
    title: 'Green Grounds',
    description: 'Landscaped garden and open lawn for relaxation',
    image: '/ExteriorPhotos/outer.jpeg',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Included with all room types',
    image: '/ExteriorPhotos/ext1.jpeg',
  },
  {
    icon: Map,
    title: 'Local Transport',
    description: 'Pickup/drop assistance available on request (charges apply)',
    image: '/ExteriorPhotos/entry.jpeg',
  },
];

const occasions = [
  {
    icon: Users,
    title: 'Family Holidays & Staycations',
    description: 'Rooms and villas sized for every family, with green space for kids to run free.',
  },
  {
    icon: Building2,
    title: 'Office Outings & Group Getaways',
    description: 'Team-friendly accommodation and group meal plans, all under one roof.',
  },
  {
    icon: PartyPopper,
    title: 'Small Functions & Celebrations',
    description: 'Birthday and function lawns available on request for intimate gatherings.',
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Amenities & Facilities"
        subtitle="Everything you need for a relaxed stay, on-site"
        backgroundImage="/ExteriorPhotos/playing.jpeg"
      />

      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>On-Site Facilities</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-4">
              Everything You Need, Right at the Resort
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Thoughtfully maintained facilities so your stay feels effortless — swim, eat, rest,
              and explore at your own pace.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                  style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-colors duration-500 group-hover:from-black/85" />

                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#d4a853] text-zinc-900 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-serif text-2xl font-bold text-white mb-2 drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-white/85 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="border-white/30 text-[#d4a853]">Made for You</SectionLabel>
            <h2 className="font-serif text-4xl font-bold mb-4 text-white">Great For</h2>
            <p className="font-sans text-white/70 text-lg">
              Whatever brings you to Alibag, Malhar Baug is ready for it.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {occasions.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-colors"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#d4a853] text-zinc-900 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-semibold mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection
        label="Amenities FAQ"
        title="Questions About Facilities"
        subtitle="Quick answers about the pool, Wi-Fi, parking, and services available to every guest."
        faqs={[
          {
            question: 'What are the swimming pool timings?',
            answer:
              'The pool is open daily from 7:00 AM to 7:00 PM and is well maintained for a relaxing swim.',
          },
          {
            question: 'Is Wi-Fi available at the resort?',
            answer:
              'Yes, high-speed free Wi-Fi is available throughout the property for all guests.',
          },
          {
            question: 'Is parking free?',
            answer:
              'Yes, free on-site self-parking is available with space for 15+ vehicles.',
          },
          {
            question: 'What are the room service and front desk hours?',
            answer:
              'Our front desk is open 24 hours. Room service is available from 7:00 AM to 10:00 PM.',
          },
          {
            question: 'Can large groups use the kitchen?',
            answer:
              'A shared communal kitchen is available on request for large groups. Please inform us in advance so we can arrange it.',
          },
          {
            question: 'Can the resort arrange local transport?',
            answer:
              'Yes, pickup and drop assistance can be arranged on request (charges apply). We are happy to help plan day trips around Alibag.',
          },
        ]}
      />
    </>
  );
}
