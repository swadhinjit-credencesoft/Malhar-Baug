import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <span 
      className={cn(
        "inline-block mb-4 px-3 py-1 rounded-full border border-accent text-accent uppercase font-sans text-xs tracking-widest font-medium",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
