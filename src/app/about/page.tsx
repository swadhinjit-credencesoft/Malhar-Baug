import { Heart } from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const metadata = createPageMetadata({
  title: 'About Malhar Baug Resort — Our Story | Alibag',
  description:
    'Malhar Baug Resort was built on a simple idea: a comfortable, home-style getaway in the quiet green surroundings of Nagaon, Alibag. Learn our story.',
  path: '/about',
});

const promises = [
  {
    title: 'Clean, Spacious Rooms',
    description: 'AC rooms and villas thoughtfully designed for your comfort and rest.',
  },
  {
    title: 'Genuine Home Cooking',
    description: 'Authentic Konkan food made fresh daily, just like home.',
  },
  {
    title: 'Warm, Attentive Staff',
    description: "Personal service with a family touch, ensuring you're always looked after.",
  },
  {
    title: 'Peaceful Green Setting',
    description: "Away from the city rush, tucked comfortably in nature's lap.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A Homely Escape in Alibag's Green Heart"
        backgroundImage="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Malhar Baug Resort — A Homely Escape in Alibag
              </h2>

              <div className="space-y-6 font-sans text-lg text-muted-foreground leading-relaxed">
                <p>
                  Malhar Baug Resort has been welcoming families and groups to Alibag, built around
                  a simple idea: a comfortable, affordable, home-style getaway set in the quiet
                  green surroundings of Nagaon. What started as a small family property has grown
                  into a favorite weekend retreat for guests from Mumbai and Pune.
                </p>
                <p>
                  We are a family-run resort that takes pride in personal service, genuine Konkan
                  hospitality, and a peaceful setting that lets you truly disconnect from city life.
                  Whether you&apos;re here to swim, feast on fresh fish thali, or simply sit under
                  the trees, we treat you as guests in our own home.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="h-full">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border group relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
                  alt="Family and guests enjoying nature"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-primary/90"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimateOnScroll className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Promise
            </h2>
            <p className="font-sans text-lg text-white/80">
              When you stay at Malhar Baug, you aren&apos;t just booking a room. You&apos;re
              experiencing our standard of hospitality.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promises.map((promise, index) => (
              <AnimateOnScroll
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-serif text-2xl font-bold text-white mb-3 flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-sans shrink-0">
                    {index + 1}
                  </span>
                  <span>{promise.title}</span>
                </h3>
                <p className="font-sans text-white/70 leading-relaxed pl-11">
                  {promise.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Heart className="w-8 h-8 text-accent fill-accent" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Run with love by our family, for your family.
            </h3>
            <p className="font-sans text-muted-foreground">
              We look forward to welcoming you to Malhar Baug Resort.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
