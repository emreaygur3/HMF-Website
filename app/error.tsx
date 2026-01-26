'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-slate-100 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="text-red-600" size={48} />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Bir Hata Oluştu</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin 
          veya ana sayfaya dönün.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-md mx-auto">
            <p className="text-sm text-red-800 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <RefreshCw size={20} />
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors border-2 border-slate-200"
          >
            <Home size={20} />
            Ana Sayfaya Dön
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-2">Sorun devam ederse:</p>
          <Link 
            href="/iletisim" 
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  )
}
