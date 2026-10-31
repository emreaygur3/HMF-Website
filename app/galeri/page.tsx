import type { Metadata } from "next"
import { GalleryExplorer } from "@/components/gallery/gallery-explorer"
import { JsonLd } from "@/components/seo/json-ld"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
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

      <PageHero
        title="Galeri"
        subtitle="Sahadan gerçek uygulamalarımız. Hizmete göre filtreleyin, büyütmek için fotoğrafa dokunun."
      />

      <GalleryExplorer items={gallery.items} categories={gallery.categories} />

      <CtaSection
        title="Benzer Bir Uygulama mı Düşünüyorsunuz?"
        text="Keşif ve fiyat teklifi için bize ulaşın."
        label="Teklif Alın"
      />
    </>
  )
}
