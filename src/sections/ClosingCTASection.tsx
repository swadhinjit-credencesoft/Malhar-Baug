import Link from 'next/link';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { BOOKING_ENGINE_URL } from '../lib/site';

export function ClosingCTASection() {
  return (
    <section className="py-24 bg-accent text-accent-foreground text-center px-4">
      <div className="container mx-auto max-w-3xl">
        <AnimateOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Unwind?
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
            Check dates and book your stay at Malhar Baug Resort today. Experience the warmth of Alibag hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-accent hover:bg-white/90 px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Check Availability
            </a>
            
            <Link 
              href="/contact"
              className="w-full sm:w-auto bg-transparent border border-white/50 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-medium text-base transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
