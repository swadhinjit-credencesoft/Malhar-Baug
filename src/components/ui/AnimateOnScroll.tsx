'use client';

import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  threshold = 0.12,
  className,
  ...props
}: AnimateOnScrollProps) {
  const { ref, isIntersecting } = useAnimateOnScroll(threshold);

  return (
    <div
      ref={ref}
      className={cn('animate-on-scroll', isIntersecting && 'animated', className)}
      {...props}
    >
      {children}
    </div>
  );
}
