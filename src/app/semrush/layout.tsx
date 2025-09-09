import type { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata('semrush', 'es');

export default function SemrushLayout({ children }: { children: React.ReactNode }) {
  return children;
}


