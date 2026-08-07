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
} from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

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
  },
  {
    icon: UtensilsCrossed,
    title: 'Communal Kitchen',
    description: 'Shared kitchen available on request for large groups',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property',
  },
  {
    icon: Car,
    title: 'Free Self-Parking',
    description: 'On-site parking, space for 15+ vehicles',
  },
  {
    icon: Clock,
    title: '24-Hour Front Desk',
    description: 'Assistance whenever you need it',
  },
  {
    icon: ConciergeBell,
    title: 'Room Service',
    description: 'Available 7:00 AM – 10:00 PM',
  },
  {
    icon: TreePine,
    title: 'Green Grounds',
    description: 'Landscaped garden and open lawn for relaxation',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Included with all room types',
  },
  {
    icon: Map,
    title: 'Local Transport',
    description: 'Pickup/drop assistance available on request (charges apply)',
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Amenities & Facilities"
        subtitle="Everything you need for a relaxed stay, on-site"
        backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground">{item.description}</p>
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

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl font-bold mb-12 text-white">Great For</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'Family Holidays & Staycations',
                'Office Outings & Group Getaways',
                'Small Functions & Birthday Celebrations (lawn available on request)',
              ].map((text, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl flex items-center justify-center min-h-[160px]"
                >
                  <p className="font-serif text-xl text-white font-medium">{text}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
