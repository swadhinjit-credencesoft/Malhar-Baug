import { MapPin, ExternalLink } from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { FAQSection } from '@/components/sections/FAQSection';

export const metadata = createPageMetadata({
  title: 'Nearby Attractions — Alibag Beaches & Forts near Malhar Baug Resort',
  description:
    'Explore Alibag Beach, Revdanda Fort, Nagaon Beach, Kolaba Fort, and more — all within 15–25 mins of Malhar Baug Resort in Nagaon–Palhe, Alibag.',
  path: '/attractions',
});

const attractions = [
  {
    name: 'Nagaon Beach',
    distance: '2 km',
    time: '5 min drive',
    description: 'The closest beach to the resort. Clean, flat sands popular for water sports.',
    image: '/ExteriorPhotos/ext4.jpeg',
  },
  {
    name: 'Akshi Beach',
    distance: '5 km',
    time: '10 min drive',
    description:
      'A quieter, serene beach lined with suru (casuarina) trees. Great for peaceful walks.',
    image: '/ExteriorPhotos/ext7.jpeg',
  },
  {
    name: 'Varsoli Beach',
    distance: '6 km',
    time: '12 min drive',
    description: 'Known for its white sand and dense casuarina groves.',
    image: '/ExteriorPhotos/exte6.jpeg',
  },
  {
    name: 'Revdanda Beach Fort',
    distance: '8.1 km',
    time: '~15 min drive',
    description:
      'Historic Portuguese fort ruins right on the beach, blending history with coastal views.',
    image: '/ExteriorPhotos/entry.jpeg',
  },
  {
    name: 'Alibag Beach',
    distance: '8.7 km',
    time: '15–20 min drive',
    description: 'The main town beach, offering black sands and views of the Kolaba Fort.',
    image: '/ExteriorPhotos/ext1.jpeg',
  },
  {
    name: 'Local Hanuman Temple',
    distance: '8–9 km',
    time: '15 min drive',
    description: 'A popular local spiritual site with peaceful surroundings.',
    image: '/ExteriorPhotos/temple.jpeg',
  },
  {
    name: 'Kolaba Fort',
    distance: '14 km',
    time: '25 min drive',
    description: 'Historic sea fort accessible by foot or horse cart during low tide.',
    image: '/ExteriorPhotos/mainentry.jpeg',
  },
];

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        title="Nearby Attractions"
        subtitle="Alibag's beaches, forts, and temples at your doorstep"
        backgroundImage="/ExteriorPhotos/heroimg3.jpeg"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((place, index) => (
              <AnimateOnScroll
                key={index}
                className="bg-primary/5 rounded-2xl overflow-hidden border border-primary/10 flex flex-col group"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif text-xl font-bold text-primary">{place.name}</h3>
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white text-primary border border-primary/20 shadow-sm">
                      {place.distance}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white text-primary border border-primary/20 shadow-sm">
                      {place.time}
                    </span>
                  </div>

                  <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-auto">
                    {place.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimateOnScroll className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plan Your Day Out
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-10">
              Our central location in Nagaon–Palhe makes it easy to explore both North and South
              Alibag. We&apos;re happy to help arrange local transport if needed.
            </p>
            <a
              href="https://maps.google.com/?q=H.No.+3116,+Nagaon,+Palhe,+Alibag,+Raigad,+Maharashtra+402204"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-colors shadow-sm"
            >
              <span>View Map & Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQSection
        label="Attractions FAQ"
        title="Questions About Nearby Places"
        subtitle="How close are Alibag’s beaches and forts to the resort, and how to plan your day out."
        faqs={[
          {
            question: 'Which is the closest beach to Malhar Baug Resort?',
            answer:
              'Nagaon Beach is the closest at just 2 km (about a 5-minute drive). Akshi Beach is 5 km and Varsoli Beach is 6 km away.',
          },
          {
            question: 'How far is Alibag Beach?',
            answer:
              'Alibag Beach, the main town beach, is about 8.7 km away — a 15–20 minute drive from the resort.',
          },
          {
            question: 'How far is Revdanda Fort?',
            answer:
              'Revdanda Beach Fort is about 8.1 km away, roughly a 15-minute drive. It’s a historic Portuguese fort ruin right on the beach.',
          },
          {
            question: 'Can you help arrange transport to visit these places?',
            answer:
              'Yes, we can help arrange local transport on request (charges apply). Our team is happy to plan a day trip covering beaches and forts.',
          },
          {
            question: 'What is the best time to visit Alibag?',
            answer:
              'October to March is the most pleasant time to visit. Weekends are popular, so we recommend booking in advance for the best-direct rates.',
          },
          {
            question: 'Is Kolaba Fort worth visiting?',
            answer:
              'Yes. Kolaba Fort (about 14 km away) is a historic sea fort accessible by foot or horse cart during low tide — a highlight of any Alibag trip.',
          },
        ]}
      />
    </>
  );
}
