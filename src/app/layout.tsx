import type { Metadata, Viewport } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookingBar } from '@/components/ui/BookingBar';
import { siteConfig } from '@/lib/seo';

import { Providers } from './providers';

import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--app-font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--app-font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Malhar Baug Resort — Peaceful Getaway in Alibag | Konkan Retreat',
  description:
    'Malhar Baug Resort in Alibag offers spacious rooms, private villas, a pool, and authentic home-style Konkan food. Book direct for best rates. Nagaon–Palhe, Maharashtra.',
  keywords: [
    'Malhar Baug Resort',
    'Alibag resort',
    'Nagaon Palhe resort',
    'rooms in Alibag',
    'villas in Alibag',
    'Konkan food',
    'beach resort Maharashtra',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Malhar Baug Resort — Peaceful Getaway in Alibag',
    description:
      'Spacious rooms, private villas, a pool, and authentic home-style Konkan food in Alibag. Book direct for best rates.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malhar Baug Resort — Peaceful Getaway in Alibag',
    description:
      'Spacious rooms, private villas, a pool, and authentic home-style Konkan food in Alibag.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${lato.variable} ${playfair.variable} min-h-[100dvh] flex flex-col bg-background antialiased`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <BookingBar />
        </Providers>
      </body>
    </html>
  );
}
