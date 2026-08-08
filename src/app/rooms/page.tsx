import {
  Users,
  AirVent,
  Bath,
  Tv,
  Wifi,
  Check,
  BedDouble,
  CalendarClock,
  ShieldCheck,
  CreditCard,
  Undo2,
  Sparkles,
  KeyRound,
} from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { FAQSection } from '@/components/sections/FAQSection';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { BOOKING_ENGINE_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata = createPageMetadata({
  title: 'Rooms & Villas — Malhar Baug Resort Alibag',
  description:
    'Choose from Super Deluxe Rooms, Superior Villas, and Two-Bedroom Villas at Malhar Baug Resort, Alibag. All AC with private bathrooms. Book direct for best rates.',
  path: '/rooms',
});

const sharedAmenities = [
  { icon: AirVent, label: 'Air Conditioning' },
  { icon: Bath, label: 'Hot Water' },
  { icon: Bath, label: 'Free Toiletries' },
  { icon: Tv, label: 'Flat-screen TV' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: BedDouble, label: 'Daily Housekeeping' },
];

interface Room {
  name: string;
  tagline: string;
  sleeps: string;
  price: string;
  note?: string;
  image: string;
  badge?: { label: string; className: string };
  features: string[];
}

const rooms: Room[] = [
  {
    name: 'Super Deluxe Room',
    tagline: 'Comfortable and cosy for couples and small families',
    sleeps: 'Sleeps 2–3 guests',
    price: '₹2,500',
    note: 'Inclusive of breakfast',
    image: '/ExteriorPhotos/ext1.jpeg',
    features: [
      'Air conditioning',
      'Private bathroom with hot water',
      'Work desk',
      'Flat-screen TV',
      'Free toiletries',
      'Free Wi-Fi',
    ],
  },
  {
    name: 'Superior Villa',
    tagline: 'A little more space for growing families',
    sleeps: 'Sleeps 4–6 guests',
    price: '₹4,500',
    image: '/ExteriorPhotos/ext2.jpeg',
    badge: { label: 'Most Popular', className: 'bg-[#d4a853] text-zinc-900' },
    features: [
      'Separate sitting area',
      'AC bedrooms',
      'Attached bathrooms',
      'Ideal for small families',
      'Premium toiletries',
      'Free Wi-Fi',
    ],
  },
  {
    name: 'Two-Bedroom Villa',
    tagline: 'The perfect base for groups and celebrations',
    sleeps: 'Sleeps up to 10–15 guests',
    price: '₹7,500',
    image: '/ExteriorPhotos/ext3.jpeg',
    badge: { label: 'Best for Groups', className: 'bg-primary text-white' },
    features: [
      'Two spacious bedrooms',
      'Shared kitchen access',
      'Communal sitting area',
      'Best for families & office outings',
      'Extra guest charge: ₹500/head above 8 guests',
      'Free Wi-Fi & Parking',
    ],
  },
];

const policies = [
  {
    icon: CalendarClock,
    title: 'Check-in / Check-out',
    body: (
      <>
        Check-in: 12:00 PM
        <br />
        Check-out: 11:00 AM
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'ID Requirements',
    body: (
      <>
        Valid govt-issued photo ID required per guest (Aadhar, Passport, etc. PAN cards may not
        be accepted in some cases).
      </>
    ),
  },
  {
    icon: CreditCard,
    title: 'Payment Terms',
    body: (
      <>
        25% advance payment required to confirm the booking. Balance amount payable on arrival.
      </>
    ),
  },
  {
    icon: Undo2,
    title: 'Cancellation Policy',
    body: (
      <>
        Free cancellation up to 48 hours before check-in. 50% charge within 48 hours. No-show
        forfeits full amount.
      </>
    ),
  },
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms & Villas"
        subtitle="Comfortable, air-conditioned stays for every group size"
        backgroundImage="/ExteriorPhotos/heroimg2.jpeg"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Rooms & Villas', path: '/rooms' },
        ]}
      />

      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Stay Options</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-4">
              Rooms & Villas for Every Kind of Getaway
            </h2>
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Every stay includes a private bathroom, hot water, and the warmth of home-style
              Konkan hospitality.
            </p>
          </AnimateOnScroll>

          {/* Shared Amenities Strip */}
          <div className="mb-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sharedAmenities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl border border-border px-4 py-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="space-y-16 lg:space-y-20">
            {rooms.map((room, index) => (
              <AnimateOnScroll
                key={room.name}
                className="group bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div
                    className={cn(
                      'relative overflow-hidden h-72 sm:h-96 lg:h-auto lg:min-h-[480px]',
                      index % 2 === 1 && 'lg:order-2',
                    )}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    {room.badge && (
                      <span
                        className={cn(
                          'absolute top-5 left-5 z-10 inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md',
                          room.badge.className,
                        )}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{room.badge.label}</span>
                      </span>
                    )}
                    <div className="absolute bottom-5 left-5 z-10">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                        {room.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col">
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-5">
                      {room.name}
                    </h2>

                    <div className="inline-flex items-center gap-2 text-muted-foreground mb-8 w-fit">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-sans font-medium">{room.sleeps}</span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10">
                      {room.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3 text-foreground/80"
                        >
                          <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="font-sans text-sm leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto border-t border-border pt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                        <p className="font-serif text-3xl font-bold text-primary">
                          {room.price}
                          <span className="text-base font-sans font-normal text-muted-foreground ml-1">
                            / night
                          </span>
                        </p>
                        {room.note && (
                          <p className="text-xs text-accent font-medium mt-1.5">{room.note}</p>
                        )}
                      </div>
                      <a
                        href={BOOKING_ENGINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-9 py-3.5 rounded-full font-semibold transition-colors shadow-sm w-full sm:w-auto"
                      >
                        <KeyRound className="w-4 h-4" />
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll className="max-w-4xl mx-auto">
            <SectionLabel className="block text-center">Good to Know</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold text-center mb-12">
              Resort Policies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {policies.map((policy, i) => {
                const Icon = policy.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-2 text-foreground">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{policy.body}</p>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQSection
        label="Rooms FAQ"
        title="Questions About Rooms & Booking"
        subtitle="Answers on room types, inclusions, pricing, and booking terms at Malhar Baug Resort."
        faqs={[
          {
            question: 'What room types does Malhar Baug Resort offer?',
            answer:
              'We offer a Super Deluxe Room (sleeps 2–3), a Superior Villa (sleeps 4–6), and a Two-Bedroom Villa (sleeps up to 10–15). Every room is fully air-conditioned with a private bathroom and hot water.',
          },
          {
            question: 'What is included in the room rate?',
            answer:
              'The room rate includes breakfast, air conditioning, hot water, free toiletries, flat-screen TV, free Wi-Fi, and daily housekeeping. Lunch and dinner are charged separately or available as an add-on meal plan.',
          },
          {
            question: 'How much advance payment is required to confirm a booking?',
            answer:
              'A 25% advance payment is required to confirm your booking. The balance is payable on arrival.',
          },
          {
            question: 'What is the cancellation policy?',
            answer:
              'Cancellation is free up to 48 hours before check-in. A 50% charge applies within 48 hours, and a no-show forfeits the full amount.',
          },
          {
            question: 'Is there an extra guest charge?',
            answer:
              'The Two-Bedroom Villa accommodates up to 8 guests comfortably; an extra guest charge of ₹500 per head applies above 8 guests.',
          },
          {
            question: 'Are the rooms suitable for families with children?',
            answer:
              'Absolutely. We are a family-friendly resort with spacious villas, green grounds, and a lawn — ideal for families, children, and group outings.',
          },
        ]}
      />
    </>
  );
}
