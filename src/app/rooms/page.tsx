import Link from 'next/link';
import { Users, AirVent, Bath, Tv, Wifi, Check, BedDouble } from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

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

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="Rooms & Villas"
        subtitle="Comfortable, air-conditioned stays for every group size"
        backgroundImage="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Shared Amenities Strip */}
          <div className="mb-20 overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex justify-center min-w-max space-x-6 mx-auto">
              {sharedAmenities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center space-x-2 text-muted-foreground px-4 py-2 bg-white rounded-full border border-border/60 shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Room 1 */}
            <AnimateOnScroll className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl overflow-hidden border border-border shadow-sm group">
              <div className="h-64 lg:h-auto aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
                  alt="Super Deluxe Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Super Deluxe Room
                </h2>
                <div className="flex items-center space-x-2 text-muted-foreground mb-6">
                  <Users className="w-5 h-5" />
                  <span>Sleeps 2–3 guests</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Air conditioning',
                    'Private bathroom with hot water',
                    'Work desk',
                    'Flat-screen TV',
                    'Free toiletries',
                    'Free Wi-Fi',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start space-x-3 text-foreground/80">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="font-serif text-2xl font-bold text-primary">
                      ₹2,500{' '}
                      <span className="text-base font-sans font-normal text-muted-foreground">
                        / night
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Inclusive of breakfast</p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto text-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Room 2 */}
            <AnimateOnScroll className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl overflow-hidden border border-border shadow-sm group">
              <div className="order-1 lg:order-2 h-64 lg:h-auto aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-[#d4a853] text-zinc-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular
                </div>
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                  alt="Superior Villa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Superior Villa
                </h2>
                <div className="flex items-center space-x-2 text-muted-foreground mb-6">
                  <Users className="w-5 h-5" />
                  <span>Sleeps 4–6 guests</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Separate sitting area',
                    'AC bedrooms',
                    'Attached bathrooms',
                    'Ideal for small families',
                    'Premium toiletries',
                    'Free Wi-Fi',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start space-x-3 text-foreground/80">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="font-serif text-2xl font-bold text-primary">
                      ₹4,500{' '}
                      <span className="text-base font-sans font-normal text-muted-foreground">
                        / night
                      </span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto text-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Book This Villa
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Room 3 */}
            <AnimateOnScroll className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl overflow-hidden border border-border shadow-sm group">
              <div className="h-64 lg:h-auto aspect-[4/3] lg:aspect-auto overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                  Best for Groups
                </div>
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
                  alt="Two-Bedroom Villa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Two-Bedroom Villa
                </h2>
                <div className="flex items-center space-x-2 text-muted-foreground mb-6">
                  <Users className="w-5 h-5" />
                  <span>Sleeps up to 10–15 guests</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Two spacious bedrooms',
                    'Shared kitchen access',
                    'Communal sitting area',
                    'Best for families & office outings',
                    'Extra guest charge: ₹500/head above 8 guests',
                    'Free Wi-Fi & Parking',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start space-x-3 text-foreground/80">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                    <p className="font-serif text-2xl font-bold text-primary">
                      ₹7,500{' '}
                      <span className="text-base font-sans font-normal text-muted-foreground">
                        / night
                      </span>
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto text-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Book This Villa
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimateOnScroll className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">
              Resort Policies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-sans font-bold text-lg mb-2 text-foreground">
                  Check-in / Check-out
                </h3>
                <p className="text-muted-foreground">
                  Check-in: 12:00 PM
                  <br />
                  Check-out: 11:00 AM
                </p>
              </div>

              <div>
                <h3 className="font-sans font-bold text-lg mb-2 text-foreground">
                  ID Requirements
                </h3>
                <p className="text-muted-foreground">
                  Valid govt-issued photo ID required per guest (Aadhar, Passport, etc. PAN cards
                  may not be accepted in some cases).
                </p>
              </div>

              <div>
                <h3 className="font-sans font-bold text-lg mb-2 text-foreground">
                  Payment Terms
                </h3>
                <p className="text-muted-foreground">
                  25% advance payment required to confirm the booking. Balance amount payable on
                  arrival.
                </p>
              </div>

              <div>
                <h3 className="font-sans font-bold text-lg mb-2 text-foreground">
                  Cancellation Policy
                </h3>
                <p className="text-muted-foreground">
                  Free cancellation up to 48 hours before check-in. 50% charge within 48 hours.
                  No-show forfeits full amount.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
