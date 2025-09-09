import type { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata('midjourney', 'es');

export default function MidjourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}


