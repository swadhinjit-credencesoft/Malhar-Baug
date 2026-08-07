'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Dining', href: '/dining' },
  { name: 'Attractions', href: '/attractions' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-sm py-3'
          : 'bg-white/95 backdrop-blur-sm py-4',
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 22c4-4 8-9 8-14a8 8 0 1 0-16 0c0 5 4 10 8 14z" />
              <path d="M12 22V12" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-foreground">
                Malhar Baug
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent mt-1">
                Resort
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'font-sans text-sm font-medium transition-colors hover:text-accent relative',
                  pathname === link.href ? 'text-accent' : 'text-foreground/80',
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[60px] bg-white border-t border-border shadow-lg transition-all duration-300 ease-in-out lg:hidden origin-top',
          isMobileMenuOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-0 pointer-events-none',
        )}
      >
        <div className="flex flex-col py-4 px-6 space-y-4 max-h-[calc(100vh-60px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'py-3 text-lg font-medium border-b border-border/50',
                pathname === link.href ? 'text-accent' : 'text-foreground',
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-6">
            <Link
              href="/contact"
              className="flex justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium text-base transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
