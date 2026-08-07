import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  className?: string;
}

export function PageHero({ title, subtitle, backgroundImage, className }: PageHeroProps) {
  return (
    <div
      className={cn(
        'relative min-h-[50vh] flex flex-col justify-center items-center py-20 overflow-hidden',
        className,
      )}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/20" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <div className="flex items-center space-x-2 text-white/70 text-sm font-sans mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{title}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-white/90">{subtitle}</p>
      </div>
    </div>
  );
}
