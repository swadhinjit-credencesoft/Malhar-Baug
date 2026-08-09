import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  CalendarCheck,
} from 'lucide-react';

import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import {
  ADDRESS_LINE,
  BOOKING_ENGINE_URL,
  CONTACT_EMAIL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from '@/lib/site';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Address',
    value: ADDRESS_LINE,
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Clock,
    label: 'Front Desk',
    value: 'Open 24 hours · Check-in 12 PM · Check-out 11 AM',
    href: null,
  },
];

export function ContactSection() {
  return (
    <div className="space-y-20">
      {/* Header */}
      <AnimateOnScroll className="max-w-3xl mx-auto text-center">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-accent font-semibold">
          Contact & Booking
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold leading-tight mt-4 mb-6">
          We&apos;d Love to Welcome You to Malhar Baug
        </h2>
        <p className="font-sans text-lg text-muted-foreground leading-relaxed">
          Reach out any time — our front desk is available 24 hours. Call or message us on
          WhatsApp for the fastest response, or drop us an email and we&apos;ll get back to you
          within a few hours.
        </p>
      </AnimateOnScroll>

      {/* Contact details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <>
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                {item.label}
              </p>
              <p className="font-serif text-lg font-bold text-foreground break-words">
                {item.value}
              </p>
            </>
          );

          return (
            <AnimateOnScroll
              key={item.label}
              className={`group bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 ${
                item.href ? 'hover:-translate-y-1' : ''
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.href ? <a href={item.href} className="block h-full">{content}</a> : content}
            </AnimateOnScroll>
          );
        })}
      </div>

      {/* CTA + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <AnimateOnScroll className="lg:col-span-5">
          <div className="h-full bg-primary text-primary-foreground rounded-2xl p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-bold text-white mb-4">Book Your Stay</h3>
              <p className="font-sans text-white/80 leading-relaxed mb-8">
                Check live availability and lock in the best-direct rate in seconds through our
                online booking engine — or call us and we&apos;ll arrange everything for you.
              </p>
              <a
                href={BOOKING_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#d4a853] hover:bg-[#d4a853]/90 text-zinc-900 px-6 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl mb-6"
              >
                <CalendarCheck className="w-4 h-4 mr-2" />
                Book Online Now
              </a>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white px-6 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-6 py-3.5 rounded-full font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <p className="relative z-10 mt-8 text-xs text-white/60 flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Front desk open 24 hours, 7 days a week</span>
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="lg:col-span-7">
          <div className="h-full min-h-[420px] rounded-2xl overflow-hidden shadow-lg border border-border relative">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              title="Malhar Baug Resort location on Google Maps"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl shadow-md px-5 py-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:space-x-3">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div className="min-w-0 w-full sm:w-auto">
                <p className="font-serif font-bold text-foreground">Malhar Baug Resort</p>
                <p className="text-xs text-muted-foreground truncate">{ADDRESS_LINE}</p>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto shrink-0 inline-flex items-center space-x-1.5 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
