import type { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata('freepik', 'es');

export default function FreepikLayout({ children }: { children: React.ReactNode }) {
  return children;
}


