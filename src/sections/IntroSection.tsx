import Link from 'next/link';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { SectionLabel } from '../components/ui/SectionLabel';

export function IntroSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <AnimateOnScroll className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="aspect-[4/5] lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80" 
                  alt="Malhar Baug Resort Garden" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative corner element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl z-[-1]" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="order-1 lg:order-2">
            <SectionLabel>About the Resort</SectionLabel>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-6">
              A Homely Escape in Alibag's Green Heart
            </h2>
            
            <p className="font-sans text-muted-foreground text-lg mb-6 leading-relaxed">
              Tucked in the green, quiet Nagaon–Palhe area of Alibag, Malhar Baug Resort is built for families, friend groups, and office outings who want a relaxed, home-style stay without the city price tag.
            </p>
            
            <p className="font-sans text-muted-foreground text-lg mb-10 leading-relaxed">
              Choose from Super Deluxe Rooms, Superior Villas, and Two-Bedroom Villas — all air-conditioned, all a short drive from Alibag Beach and Revdanda Fort.
            </p>
            
            <Link 
              href="/rooms"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-full font-medium text-base transition-colors shadow-sm"
            >
              Explore Rooms
            </Link>
          </AnimateOnScroll>
          
        </div>
      </div>
    </section>
  );
}
