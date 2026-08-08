import { Waves, Car, Wifi, UtensilsCrossed, Home, Clock } from 'lucide-react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { SectionLabel } from '../components/ui/SectionLabel';

const highlights = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Well-maintained pool open 7 AM – 7 PM for a refreshing dip',
    image: '/ExteriorPhotos/ext4.jpeg',
  },
  {
    icon: Car,
    title: 'Free Self-Parking',
    description: 'Ample on-site secure parking for 15+ vehicles',
    image: '/ExteriorPhotos/parkingarea.jpeg',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property',
    image: '/ExteriorPhotos/ext7.jpeg',
  },
  {
    icon: UtensilsCrossed,
    title: 'Home-Style Meals',
    description: 'Fresh vegetarian and non-vegetarian Konkan meals on request',
    image: '/ExteriorPhotos/dining.jpeg',
  },
  {
    icon: Home,
    title: 'Villas for Groups',
    description: 'Spacious villas accommodating groups up to 10–15 guests',
    image: '/ExteriorPhotos/ext2.jpeg',
  },
  {
    icon: Clock,
    title: '24-Hour Front Desk',
    description: "We're always here whenever you need assistance",
    image: '/ExteriorPhotos/mainentry.jpeg',
  },
];

export function HighlightsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Resort Features</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-5">
            Everything You Need for a Perfect Weekend
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Thoughtful facilities and warm service — so your weekend in Alibag is effortless from
            arrival to departure.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimateOnScroll
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-colors duration-500 group-hover:from-black/85" />

                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#d4a853] text-zinc-900 flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 drop-shadow-sm">
                      {highlight.title}
                    </h3>
                    <p className="font-sans text-sm text-white/85 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
