'use client';

import { useState } from 'react';
import { Mail, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface EmailDiscountFormProps {
  className?: string;
  variant?: 'default' | 'compact';
}

export default function EmailDiscountForm({ className = '', variant = 'default' }: EmailDiscountFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'exhausted'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Por favor, ingresa tu email');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Por favor, ingresa un email válido');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/send-discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          setStatus('exhausted');
          setMessage(data.message || 'Los descuentos se han agotado');
        } else {
          setStatus('error');
          setMessage(data.message || 'Error al enviar el código. Por favor, intenta nuevamente.');
        }
        return;
      }

      setStatus('success');
      setMessage('¡Código de descuento enviado! Revisa tu correo.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Por favor, intenta nuevamente.');
    }
  };

  if (variant === 'compact') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
            disabled={status === 'loading' || status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success' || status === 'exhausted'}
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              'Obtener 10% OFF'
            )}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : status === 'exhausted' ? 'text-yellow-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 border border-pink-500/40 rounded-2xl p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4">
          <Mail className="w-8 h-8 text-pink-300" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Obtén un 10% de Descuento</h3>
        <p className="text-gray-300">
          Déjanos tu email y te enviaremos un código de descuento exclusivo
        </p>
        <p className="text-sm text-gray-400 mt-2">Descuentos limitados</p>
      </div>

      {status === 'exhausted' ? (
        <div className="text-center py-4">
          <XCircle className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
          <p className="text-yellow-400 font-semibold">Los descuentos se han agotado</p>
          <p className="text-gray-400 text-sm mt-2">
            Únete a nuestro grupo de Telegram para futuras promociones
          </p>
          <a
            href="https://t.me/+Vz4lFgy59zo5OGFk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Unirse a Telegram
          </a>
        </div>
      ) : status === 'success' ? (
        <div className="text-center py-4">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
          <p className="text-green-400 font-semibold mb-2">¡Código enviado!</p>
          <p className="text-gray-300 text-sm">
            Revisa tu correo electrónico para obtener tu código de descuento
          </p>
          <a
            href="https://t.me/+Vz4lFgy59zo5OGFk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Únete también a Telegram
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition"
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              'Obtener mi 10% de descuento'
            )}
          </button>
          {message && status === 'error' && (
            <p className="text-red-400 text-sm text-center">{message}</p>
          )}
        </form>
      )}
    </div>
  );
}

