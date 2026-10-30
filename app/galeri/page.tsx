import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GalleryExplorer } from "@/components/gallery-explorer"
import { JsonLd } from "@/components/json-ld"
import { gallery } from "@/lib/gallery"
import { breadcrumbJsonLd, businessRef, pageOpenGraph } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const title = "Galeri: Taş Duvar, Kaplama ve Peyzaj Uygulamaları"
const description =
  "Aliağa, İzmir ve Ege'de yaptığımız taş duvar, şev taşı, kayrak, küp taşı, parke ve asfalt uygulamalarından saha fotoğrafları."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/galeri" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/galeri" }),
}

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `${siteConfig.name} Galeri`,
  description,
  url: `${siteConfig.url}/galeri`,
  author: businessRef,
  image: gallery.items.map((item) => ({
    "@type": "ImageObject",
    contentUrl: `${siteConfig.url}${item.src}`,
    name: item.alt,
  })),
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryJsonLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Galeri", path: "/galeri" }])} />

      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">Galeri</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sahadan gerçek uygulamalarımız. Hizmete göre filtreleyin, büyütmek için fotoğrafa dokunun.
          </p>
        </div>
      </section>

      <GalleryExplorer items={gallery.items} categories={gallery.categories} />

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Benzer Bir Uygulama mı Düşünüyorsunuz?</h2>
          <p className="text-lg mb-8 opacity-90">Keşif ve fiyat teklifi için bize ulaşın.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Teklif Alın
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
