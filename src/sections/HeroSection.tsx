'use client';

import Link from 'next/link';
import { ChevronDown, Phone } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85')`,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center mt-16">
        <AnimateOnScroll>
          <div className="inline-block mb-6">
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d4a853] font-semibold">
              Alibag · Maharashtra
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white font-bold mb-4 drop-shadow-sm">
            Malhar Baug Resort
          </h1>

          <h2 className="font-serif italic text-2xl md:text-3xl text-white/95 mb-8 font-light">
            Your Peaceful Getaway in Alibag
          </h2>

          <p className="font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Spacious rooms, private villas, a sparkling pool, and home-style Konkan food — just a
            short drive from Alibag&apos;s beaches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#d4a853] hover:bg-[#d4a853]/90 text-zinc-900 px-8 py-3.5 rounded-full font-medium text-base transition-all hover:scale-105 shadow-lg"
            >
              Check Availability
            </Link>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto group flex items-center justify-center space-x-2 border border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-medium text-base transition-all"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span>Call to Book: +91 98765 43210</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="text-white/70 hover:text-white transition-colors p-2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
