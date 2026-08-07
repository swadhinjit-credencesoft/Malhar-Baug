import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 lg:pb-8 pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sidebar-primary"
              >
                <path d="M12 22c4-4 8-9 8-14a8 8 0 1 0-16 0c0 5 4 10 8 14z" />
                <path d="M12 22V12" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">
                  Malhar Baug
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-sidebar-primary mt-1">
                  Resort
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              Your peaceful getaway in Alibag. Spacious rooms, private villas, a pool, and
              authentic home-style Konkan food.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Rooms & Villas', href: '/rooms' },
                { name: 'Amenities', href: '/amenities' },
                { name: 'Dining', href: '/dining' },
                { name: 'Nearby Attractions', href: '/attractions' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-sidebar-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/80">
                <MapPin className="w-5 h-5 text-sidebar-primary shrink-0" />
                <span>H.No. 3116, Nagaon, Palhe, Alibag, Raigad, Maharashtra – 402204</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/80">
                <Phone className="w-5 h-5 text-sidebar-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/80">
                <Mail className="w-5 h-5 text-sidebar-primary shrink-0" />
                <a
                  href="mailto:info@malharbaugresort.com"
                  className="hover:text-white transition-colors"
                >
                  info@malharbaugresort.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-white">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full py-2 px-4 w-fit"
              >
                <Facebook className="w-4 h-4" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full py-2 px-4 w-fit"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-white/60">
          <p>© 2025 Malhar Baug Resort. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="italic">Designed with care for our guests</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
