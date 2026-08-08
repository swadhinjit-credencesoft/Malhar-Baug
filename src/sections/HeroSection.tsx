'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BOOKING_ENGINE_URL } from '@/lib/site';

const heroSlides = [
  {
    src: '/ExteriorPhotos/heroimg1.jpeg',
    alt: 'Malhar Baug Resort exterior view',
    tagline: 'Your Peaceful Getaway in Alibag',
    description:
      'Spacious rooms, private villas, a sparkling pool, and home-style Konkan food — just a short drive from Alibag&apos;s beaches.',
  },
  {
    src: '/ExteriorPhotos/heroimg2.jpeg',
    alt: 'Malhar Baug Resort grounds',
    tagline: 'Family-Friendly Stays in the Green Heart of Nagaon',
    description:
      'Air-conditioned rooms and villas, open green grounds, and warm personal service — all at family-friendly prices.',
  },
  {
    src: '/ExteriorPhotos/heroimg3.jpeg',
    alt: 'Malhar Baug Resort pool and gardens',
    tagline: 'Home-Style Konkan Hospitality by the Coast',
    description:
      'Fresh fish thali, solkadhi, and seasonal Konkan specials — minutes from Alibag Beach, Revdanda Fort, and Nagaon.',
  },
];

const ROTATION_INTERVAL = 3000;

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const current = heroSlides[active];

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Rotating Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            'absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url('${slide.src}')` }}
          role="img"
          aria-label={slide.alt}
          aria-hidden={index !== active}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-black/5" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center mt-16">
        <div className="inline-block mb-6">
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[#d4a853] font-semibold">
            Alibag · Maharashtra
          </span>
        </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white font-bold mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Malhar Baug Resort
        </h1>

        <div
          key={active}
          className="animate-in fade-in duration-1000"
        >
          <h2 className="font-serif italic text-2xl md:text-3xl text-white/95 mb-8 font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            {current.tagline}
          </h2>

          <p className="font-sans text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            {current.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#d4a853] hover:bg-[#d4a853]/90 text-zinc-900 px-8 py-3.5 rounded-full font-medium text-base transition-all hover:scale-105 shadow-lg"
          >
            Check Availability
          </a>

          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group flex items-center justify-center space-x-2 border border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-medium text-base transition-all"
          >
            <CalendarCheck className="w-4 h-4 group-hover:animate-pulse" />
            <span>Book Direct</span>
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            className={cn(
              'h-2.5 rounded-full transition-all duration-300',
              index === active ? 'w-8 bg-[#d4a853]' : 'w-2.5 bg-white/60 hover:bg-white',
            )}
          />
        ))}
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
