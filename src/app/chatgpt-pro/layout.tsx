import type { Metadata } from 'next';
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata('chatgpt-pro', 'es');

export default function ChatgptProLayout({ children }: { children: React.ReactNode }) {
  return children;
}


