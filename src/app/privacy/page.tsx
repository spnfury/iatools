import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Política de Privacidad | iatools.shop',
  description: 'Conoce cómo protegemos tus datos personales y tu privacidad en iatools.shop.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <PrivacyPolicy />
    </div>
  );
}


