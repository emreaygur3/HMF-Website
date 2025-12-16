import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate-900 mb-4">404</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil, taşınmış veya silinmiş olabilir. 
          Lütfen ana sayfaya dönün veya arama yapın.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors border-2 border-slate-200"
          >
            <Search size={20} />
            Hizmetleri İncele
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-4">Hızlı Bağlantılar:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/hakkimizda" className="text-blue-600 hover:underline text-sm">
              Hakkımızda
            </Link>
            <Link href="/projeler" className="text-blue-600 hover:underline text-sm">
              Projeler
            </Link>
            <Link href="/iletisim" className="text-blue-600 hover:underline text-sm">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
