import type { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata('canva-pro', 'es');

export default function CanvaProLayout({ children }: { children: React.ReactNode }) {
  return children;
}


