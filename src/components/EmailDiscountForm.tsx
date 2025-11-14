'use client';

import { useState } from 'react';
import { Mail, CheckCircle, XCircle, Loader2, Sparkles, Gift, ArrowRight } from 'lucide-react';

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
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
          <form onSubmit={handleSubmit} className="relative flex gap-2 bg-gray-900 p-1 rounded-lg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 bg-gray-800 border-2 border-transparent rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success' || status === 'exhausted'}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-bold shadow-lg hover:shadow-xl hover:scale-105 transform transition flex items-center gap-2"
            >
              {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <>
                  <Gift className="w-5 h-5" />
                  10% OFF
                </>
              )}
            </button>
          </form>
        </div>
        {message && (
          <p className={`mt-3 text-sm font-medium ${status === 'success' ? 'text-green-400' : status === 'exhausted' ? 'text-yellow-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-blue-600/30 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
      
      {/* Glowing border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
      
      <div className="relative bg-gray-900/95 backdrop-blur-sm border-2 border-pink-500/50 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          {/* Animated icon with sparkles */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full shadow-2xl">
              <Gift className="w-10 h-10 text-white animate-bounce" />
              <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              🎁 Obtén un 10% de Descuento
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 rounded-full">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-pink-300">Código Exclusivo PROMO10</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-200 mb-2 font-medium">
            Déjanos tu email y te enviaremos tu código de descuento
          </p>
          <p className="text-sm text-yellow-400 font-semibold flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Solo 5 descuentos disponibles
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          </p>
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
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full pl-12 pr-4 py-4 bg-gray-800/80 border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/30 transition-all text-lg"
              disabled={status === 'loading'}
            />
          </div>
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group relative w-full overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transform"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            {status === 'loading' ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>Enviando código...</span>
              </>
            ) : (
              <>
                <Gift className="w-6 h-6" />
                <span>¡Quiero mi 10% de descuento!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
          
          {message && status === 'error' && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-400 text-sm text-center font-medium">{message}</p>
            </div>
          )}
          
          <p className="text-center text-xs text-gray-400">
            Al suscribirte, también recibirás una invitación para unirte a nuestro grupo de Telegram
          </p>
        </form>
      )}
      </div>
    </div>
  );
}

