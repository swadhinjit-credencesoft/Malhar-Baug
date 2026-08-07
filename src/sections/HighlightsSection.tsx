import { Waves, Car, Wifi, UtensilsCrossed, Home, Clock } from 'lucide-react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { SectionLabel } from '../components/ui/SectionLabel';

const highlights = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Well-maintained pool open 7 AM – 7 PM for a refreshing dip'
  },
  {
    icon: Car,
    title: 'Free Self-Parking',
    description: 'Ample on-site secure parking for 15+ vehicles'
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property'
  },
  {
    icon: UtensilsCrossed,
    title: 'Home-Style Meals',
    description: 'Fresh vegetarian and non-vegetarian Konkan meals on request'
  },
  {
    icon: Home,
    title: 'Villas for Groups',
    description: 'Spacious villas accommodating groups up to 10–15 guests'
  },
  {
    icon: Clock,
    title: '24-Hour Front Desk',
    description: "We're always here whenever you need assistance"
  }
];

export function HighlightsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimateOnScroll>
            <SectionLabel>Resort Features</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-6">
              Everything You Need for a Perfect Weekend
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimateOnScroll 
                key={index}
                className="bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {highlight.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
