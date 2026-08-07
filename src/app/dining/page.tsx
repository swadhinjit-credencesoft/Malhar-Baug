import Link from 'next/link';
import { UtensilsCrossed, AlertCircle } from 'lucide-react';

import { createPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/PageHero';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const metadata = createPageMetadata({
  title: 'Dining — Home-Style Konkan Food at Malhar Baug Resort',
  description:
    'Enjoy authentic home-style Konkan vegetarian and non-vegetarian meals at Malhar Baug Resort, Alibag. Fish thali, solkadhi, and seasonal specialties. Inform kitchen 2–3 hrs in advance.',
  path: '/dining',
});

export default function DiningPage() {
  return (
    <>
      <PageHero
        title="Dining"
        subtitle="Home-style Konkan cooking, made fresh for you"
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <AnimateOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                What to Expect
              </h2>

              <ul className="space-y-6">
                {[
                  'Home-style vegetarian and non-vegetarian meals cooked with local ingredients.',
                  'Konkan specialties — fresh fish thali, solkadhi, and seasonal curries.',
                  'Meals arranged in advance — please inform the kitchen at least 2–3 hours ahead.',
                  'Meal plan: Breakfast is included in the room rate; lunch & dinner are charged separately or bundled as an add-on.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <UtensilsCrossed className="w-4 h-4 text-accent" />
                    </div>
                    <p className="font-sans text-lg text-foreground/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll className="h-full min-h-[400px]">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-border group">
                <img
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80"
                  alt="Konkan Fish Thali"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-10">
              Meal Plan
            </h2>

            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-secondary text-foreground">
                      <th className="py-4 px-6 font-serif font-bold text-lg border-b border-border">
                        Meal
                      </th>
                      <th className="py-4 px-6 font-serif font-bold text-lg border-b border-border">
                        Time
                      </th>
                      <th className="py-4 px-6 font-serif font-bold text-lg border-b border-border">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-background/50 transition-colors">
                      <td className="py-5 px-6 font-medium text-foreground">Breakfast</td>
                      <td className="py-5 px-6 text-muted-foreground whitespace-nowrap">
                        8:00 – 10:00 AM
                      </td>
                      <td className="py-5 px-6 text-muted-foreground">Included with stay</td>
                    </tr>
                    <tr className="hover:bg-background/50 transition-colors">
                      <td className="py-5 px-6 font-medium text-foreground">Lunch</td>
                      <td className="py-5 px-6 text-muted-foreground whitespace-nowrap">
                        1:00 – 2:30 PM
                      </td>
                      <td className="py-5 px-6 text-muted-foreground">
                        Veg ₹250 / Non-veg ₹350 per head
                      </td>
                    </tr>
                    <tr className="hover:bg-background/50 transition-colors">
                      <td className="py-5 px-6 font-medium text-foreground">Evening Snacks</td>
                      <td className="py-5 px-6 text-muted-foreground whitespace-nowrap">
                        5:00 – 6:00 PM
                      </td>
                      <td className="py-5 px-6 text-muted-foreground">Tea, chai, light snacks</td>
                    </tr>
                    <tr className="hover:bg-background/50 transition-colors">
                      <td className="py-5 px-6 font-medium text-foreground">Dinner</td>
                      <td className="py-5 px-6 text-muted-foreground whitespace-nowrap">
                        8:00 – 9:30 PM
                      </td>
                      <td className="py-5 px-6 text-muted-foreground">
                        Veg ₹250 / Non-veg ₹400 per head — Konkan specialties
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 bg-secondary p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-border">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Please inform the resort in advance of any dietary preferences or restrictions so
                  the kitchen can accommodate you.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Kitchen
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
