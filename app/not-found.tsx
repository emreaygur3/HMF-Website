import type { Metadata } from "next"
import { ArrowLink, ButtonLink } from "@/components/ui/button"
import { Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="bg-stone-50 pb-24 pt-36 sm:pt-40">
      <Container size="2xl" className="text-center">
        <p className="mb-4 text-6xl font-bold text-stone-300">404</p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Sayfa Bulunamadı</h1>
        <p className="mt-4 text-stone-600">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
        <ButtonLink href="/" className="mt-8">
          Anasayfaya Dön
        </ButtonLink>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6">
          <ArrowLink href="/hizmetler">Hizmetlerimiz</ArrowLink>
          <ArrowLink href="/galeri">Galeri</ArrowLink>
          <ArrowLink href="/iletisim">İletişim</ArrowLink>
        </div>
      </Container>
    </section>
  )
}
