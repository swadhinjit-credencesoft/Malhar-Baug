import Link from 'next/link';
import { Check } from 'lucide-react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';

export function WhyBookDirectSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative leaf pattern bg */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16">
              Why Book Direct?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 text-left">
              {[
                {
                  title: "Best Price Guarantee",
                  desc: "Save up to 10% vs OTA rates when you book directly with us."
                },
                {
                  title: "Flexible Group Bookings",
                  desc: "Custom packages for families, office outings & functions."
                },
                {
                  title: "Direct Support",
                  desc: "WhatsApp or phone support for all your special requests."
                }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="w-12 h-12 rounded-full bg-[#d4a853]/20 flex items-center justify-center mb-6">
                    <Check className="w-6 h-6 text-[#d4a853]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-white/80 leading-relaxed text-sm md:text-base">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#d4a853] hover:bg-[#d4a853]/90 text-zinc-900 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:scale-105"
            >
              Book Now — +91 98765 43210
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
