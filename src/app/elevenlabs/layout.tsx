import type { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata('elevenlabs', 'es');

export default function ElevenlabsLayout({ children }: { children: React.ReactNode }) {
  return children;
}


