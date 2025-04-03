'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function ReelsDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDownloadUrl('');

    try {
      // Aquí iría la lógica para obtener el video
      // Por ahora simulamos una respuesta exitosa
      const response = await fetch('/api/download-reel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Error al descargar el reel');
      }

      const data = await response.json();
      setDownloadUrl(data.downloadUrl);
    } catch (err) {
      setError('Error al procesar la URL. Por favor, verifica que sea un reel de Instagram válido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Descargador de Reels de Instagram
          </h1>
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
                  URL del Reel
                </label>
                <input
                  type="text"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.instagram.com/reel/..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Descargar Reel
                  </>
                )}
              </button>
            </form>

            {downloadUrl && (
              <div className="mt-8 text-center">
                <a
                  href={downloadUrl}
                  download
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                  Descargar MP4
                </a>
              </div>
            )}
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            <h2 className="text-xl font-semibold mb-4 text-white">Instrucciones:</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Copia la URL del reel de Instagram que quieres descargar</li>
              <li>Pega la URL en el campo de arriba</li>
              <li>Haz clic en "Descargar Reel"</li>
              <li>Espera a que se procese el video</li>
              <li>Haz clic en "Descargar MP4" para guardar el video</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 