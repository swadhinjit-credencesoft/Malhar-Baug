import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Malhar Baug Resort',
  url: 'https://www.malharbaugresort.com',
  description:
    'Malhar Baug Resort in Alibag offers spacious rooms, private villas, a pool, and authentic home-style Konkan food. Book direct for best rates. Nagaon–Palhe, Maharashtra.',
  address: 'H.No. 3116, Nagaon, Palhe, Alibag, Raigad, Maharashtra – 402204',
  addressLocality: 'Alibag',
  addressRegion: 'Maharashtra',
  postalCode: '402204',
  addressCountry: 'IN',
  phone: '+919822349813',
  email: 'info@malharbaugresort.com',
  checkInTime: '12:00',
  checkOutTime: '11:00',
  priceRange: '₹₹',
  image: 'https://www.malharbaugresort.com/ExteriorPhotos/heroimg1.jpeg',
  logo: 'https://www.malharbaugresort.com/favicon.svg',
  sameAs: ['https://facebook.com', 'https://instagram.com'],
};

/**
 * Builds Next.js `Metadata` for a statically-generated page.
 * Every page ships title/description/canonical/OG/Twitter tags in the initial HTML.
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
      images: [{ url: siteConfig.image, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.image],
    },
    category: 'travel',
    keywords: [
      'Malhar Baug Resort',
      'Alibag resort',
      'Nagaon Palhe resort',
      'rooms in Alibag',
      'villas in Alibag',
      'Konkan food',
      'beach resort Maharashtra',
    ],
  };
}

/**
 * Builds the Google-friendly `Hotel` JSON-LD used across the site
 * for Local Search / rich results.
 */
export function buildHotelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    image: [siteConfig.image],
    logo: siteConfig.logo,
    checkinTime: siteConfig.checkInTime,
    checkoutTime: siteConfig.checkOutTime,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'H.No. 3116, Nagaon, Palhe',
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    ],
    sameAs: siteConfig.sameAs,
  };
}

/**
 * Builds the `WebSite` + `Organization` JSON-LD.
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: siteConfig.logo,
        },
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: siteConfig.sameAs,
      },
    ],
  };
}

/**
 * Builds the `BreadcrumbList` JSON-LD for a given trail.
 */
export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
