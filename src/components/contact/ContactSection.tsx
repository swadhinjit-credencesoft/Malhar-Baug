'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: '',
  roomPref: 'Not Sure Yet',
  requests: '',
};

export function ContactSection() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 600);
  };

  return (
    <>
      <div className="lg:col-span-7 xl:col-span-8">
        <AnimateOnScroll className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Send Us an Inquiry
          </h2>

          {isSubmitted ? (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Thank you, {formData.name}!
              </h3>
              <p className="font-sans text-muted-foreground">
                Your inquiry has been received. Our team will contact you shortly at{' '}
                {formData.phone} to confirm availability and finalize your booking.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData(emptyForm);
                }}
                className="mt-8 text-primary font-medium hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="checkIn" className="text-sm font-medium text-foreground block">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="checkOut" className="text-sm font-medium text-foreground block">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium text-foreground block">
                    No. of Guests *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="30"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="roomPref" className="text-sm font-medium text-foreground block">
                  Room Preference
                </label>
                <select
                  id="roomPref"
                  name="roomPref"
                  value={formData.roomPref}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option value="Super Deluxe Room">Super Deluxe Room</option>
                  <option value="Superior Villa">Superior Villa</option>
                  <option value="Two-Bedroom Villa">Two-Bedroom Villa</option>
                  <option value="Not Sure Yet">Not Sure Yet / Let&apos;s Discuss</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="requests" className="text-sm font-medium text-foreground block">
                  Special Requests / Dietary Needs
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  rows={4}
                  value={formData.requests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us about any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>

      {/* Right: Details & Map */}
      <div className="lg:col-span-5 xl:col-span-4 space-y-8">
        <AnimateOnScroll className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg border border-primary-border">
          <h3 className="font-serif text-2xl font-bold mb-8 text-white">Contact Details</h3>

          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#d4a853]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/60 mb-1">Address</p>
                <p className="font-sans text-white leading-relaxed text-sm">
                  H.No. 3116, Nagaon, Palhe, Alibag, Raigad, Maharashtra – 402204
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#d4a853]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/60 mb-1">Phone & WhatsApp</p>
                <a
                  href="tel:+919876543210"
                  className="block font-sans text-white hover:text-[#d4a853] transition-colors mb-1"
                >
                  +91 98765 43210
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-xs bg-[#25D366]/20 text-[#25D366] px-2 py-1 rounded-md font-medium border border-[#25D366]/30 hover:bg-[#25D366]/30 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#d4a853]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/60 mb-1">Email</p>
                <a
                  href="mailto:info@malharbaugresort.com"
                  className="font-sans text-white hover:text-[#d4a853] transition-colors text-sm break-all"
                >
                  info@malharbaugresort.com
                </a>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#d4a853]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/60 mb-1">Front Desk</p>
                <p className="font-sans text-white text-sm">Open 24 hours</p>
              </div>
            </li>
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll className="rounded-2xl overflow-hidden shadow-sm border border-border bg-white p-6 relative min-h-[250px] flex flex-col items-center justify-center text-center group">
          <div
            className="absolute inset-0 bg-secondary/50"
            style={{
              backgroundImage: 'radial-gradient(#1a4a3a 1px, transparent 1px)',
              backgroundSize: '16px 16px',
              opacity: 0.1,
            }}
          ></div>

          <MapPin className="w-12 h-12 text-primary mb-4 relative z-10 animate-bounce" />
          <h4 className="font-serif font-bold text-xl text-foreground mb-4 relative z-10">
            Find Us on the Map
          </h4>

          <a
            href="https://maps.google.com/?q=H.No.+3116,+Nagaon,+Palhe,+Alibag,+Raigad,+Maharashtra+402204"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center space-x-2 bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/30 text-foreground px-6 py-2.5 rounded-full font-medium transition-all group-hover:-translate-y-1"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </a>
        </AnimateOnScroll>
      </div>
    </>
  );
}
