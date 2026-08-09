import { BadgePercent, Users, Headphones } from 'lucide-react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { SectionLabel } from '../components/ui/SectionLabel';
import { BOOKING_ENGINE_URL, PHONE_DISPLAY } from '../lib/site';

const benefits = [
  {
    icon: BadgePercent,
    title: 'Best Price Guarantee',
    desc: 'Save up to 10% vs OTA rates when you book directly with us.',
  },
  {
    icon: Users,
    title: 'Flexible Group Bookings',
    desc: 'Custom packages for families, office outings & functions.',
  },
  {
    icon: Headphones,
    title: 'Direct Support',
    desc: 'WhatsApp or phone support for all your special requests.',
  },
];

export function WhyBookDirectSection() {
  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative leaf pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimateOnScroll className="max-w-2xl mx-auto text-center mb-14">
          <SectionLabel className="border-[#d4a853]/50 text-[#d4a853]">Book Direct</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
            Why Book Direct?
          </h2>
          <p className="font-sans text-lg text-white/70 leading-relaxed">
            Skip the middleman and enjoy the best rates, flexible plans, and our personal attention
            from booking to checkout.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-14">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <AnimateOnScroll
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#d4a853]/40 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d4a853]/15 border border-[#d4a853]/30 text-[#d4a853] flex items-center justify-center mb-6 group-hover:bg-[#d4a853] group-hover:text-zinc-900 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="font-sans text-white/75 leading-relaxed text-sm md:text-base">
                  {benefit.desc}
                </p>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll className="text-center">
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-[#d4a853] hover:bg-[#d4a853]/90 text-zinc-900 px-6 sm:px-10 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:scale-105"
          >
            Book Now — {PHONE_DISPLAY}
          </a>
          <p className="mt-5 text-sm text-white/60">
            Best-direct rates · Instant confirmation · Personal support
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
