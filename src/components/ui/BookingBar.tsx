import { Phone } from 'lucide-react';
import { BOOKING_ENGINE_URL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export function BookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2 text-primary-foreground">
          <Phone className="w-4 h-4" />
          <a href={PHONE_TEL} className="text-sm font-medium">
            {PHONE_DISPLAY}
          </a>
        </div>
        <a
          href={BOOKING_ENGINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-full font-medium text-sm transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
