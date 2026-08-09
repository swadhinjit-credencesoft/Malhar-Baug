import { MapPin, Navigation } from 'lucide-react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { SectionLabel } from '../components/ui/SectionLabel';

export function LocationSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <AnimateOnScroll>
            <SectionLabel>Our Location</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ideally Located
            </h2>
            
            <div className="flex items-start space-x-4 mb-10 text-muted-foreground bg-white p-6 rounded-xl border border-border shadow-sm">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
              <p className="font-sans text-lg">
                H.No. 3116, Nagaon, Palhe, Alibag, Raigad, Maharashtra – 402204
              </p>
            </div>

            <h3 className="font-serif text-xl font-semibold mb-6 text-foreground">Nearby Attractions</h3>
            <ul className="space-y-4 mb-10">
              {[
                { name: "Alibag Beach", dist: "8.7 km (15–20 min drive)" },
                { name: "Revdanda Beach Fort", dist: "8.1 km (~15 min drive)" },
                { name: "Nagaon Beach", dist: "2 km (5 min drive)" },
                { name: "Akshi Beach", dist: "5 km (10 min drive)" },
                { name: "Local Hanuman Temple", dist: "8–9 km" },
              ].map((place, i) => (
                <li key={i} className="flex justify-between items-center gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0">
                  <span className="font-sans font-medium text-foreground">{place.name}</span>
                  <span className="font-sans text-sm text-muted-foreground text-right">{place.dist}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://maps.google.com/?q=H.No.+3116,+Nagaon,+Palhe,+Alibag,+Raigad,+Maharashtra+402204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll className="h-full min-h-[400px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-md relative bg-secondary border border-border flex flex-col items-center justify-center p-8 group">
              {/* Map placeholder pattern */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#1a4a3a 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              <MapPin className="w-16 h-16 text-primary mb-6 animate-bounce" />
              
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Malhar Baug Resort</h3>
              
              <a 
                href="https://maps.google.com/?q=H.No.+3116,+Nagaon,+Palhe,+Alibag,+Raigad,+Maharashtra+402204"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 bg-white text-primary px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all group-hover:scale-105 border border-primary/20"
              >
                View on Google Maps
              </a>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
