import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Malhar Baug Resort',
  url: 'https://www.malharbaugresort.com',
  address: 'H.No. 3116, Nagaon, Palhe, Alibag, Raigad, Maharashtra – 402204',
  phone: '+91 98765 43210',
  email: 'info@malharbaugresort.com',
};

/**
 * Builds Next.js `Metadata` for a statically-generated page.
 * Replaces the old client-side `useSEO` hook with server-rendered metadata
 * so every page ships its title/description/OG tags in the initial HTML.
 */
export function createPageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
