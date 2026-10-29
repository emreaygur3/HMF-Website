import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="pt-40 pb-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-6xl font-bold text-primary/20 mb-4">404</p>
        <h1 className="text-4xl font-bold text-primary mb-4">Sayfa Bulunamadı</h1>
        <p className="text-foreground/70 mb-8">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <ArrowLeft size={20} aria-hidden="true" />
            Anasayfaya Dön
          </Link>
          <Link href="/hizmetler" className="text-primary font-semibold hover:underline">
            Hizmetlerimiz
          </Link>
          <Link href="/projeler" className="text-primary font-semibold hover:underline">
            Projelerimiz
          </Link>
        </div>
      </div>
    </section>
  )
}
