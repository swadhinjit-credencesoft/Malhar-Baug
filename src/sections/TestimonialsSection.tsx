import { Star } from 'lucide-react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { SectionLabel } from '../components/ui/SectionLabel';

const testimonials = [
  {
    quote: "Great location and amenities — friendly staff and good rates. The perfect weekend getaway for our family.",
    author: "Siddharth",
    rating: 5
  },
  {
    quote: "The home-style veg and non-veg food is tasty — just inform them in advance. Rooms are clean and spacious.",
    author: "Mangesh Chavan",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimateOnScroll>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-6">
              Guest Love
            </h2>
            
            <div className="inline-flex items-center space-x-2 bg-background px-4 py-2 rounded-full border border-border">
              <span className="font-medium text-foreground text-sm">4.2</span>
              <div className="flex text-[#d4a853]">
                {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
              <span className="text-sm text-muted-foreground">on Google · 46 Reviews</span>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll 
              key={index}
              className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-8 left-8 text-8xl font-serif leading-none text-[#d4a853]/10">"</div>
              
              <div className="relative z-10">
                <div className="flex text-[#d4a853] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center space-x-4 border-t border-border/50 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-serif font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground">{testimonial.author}</h4>
                    <span className="text-sm text-muted-foreground">Verified Guest</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
