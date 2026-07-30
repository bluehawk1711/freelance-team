/**
 * Global TypeScript types and interfaces
 */

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[]>;
}

export interface SectionProps {
  className?: string;
  id?: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}
