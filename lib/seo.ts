import type { Metadata } from "next"
import { serviceAreas } from "@/lib/regions"
import { siteConfig } from "@/lib/site"

type OpenGraph = NonNullable<Metadata["openGraph"]>

/**
 * Sayfa bazında Open Graph. Next.js alt sayfadaki openGraph'ı üst düzeyle birleştirmez,
 * bu yüzden site geneli alanlar (siteName, locale, varsayılan görsel) burada eklenir.
 */
export function pageOpenGraph(og: { title: string; description: string; url: string; image?: string }): OpenGraph {
  return {
    title: og.title,
    description: og.description,
    url: og.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: og.image
      ? [{ url: og.image }]
      : [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  }
}

/** Schema.org areaServed: önce İzmir ilçeleri, sonra Ege illeri ve Türkiye. */
export const areaServed = [
  { "@type": "City", name: "İzmir" },
  ...serviceAreas.izmir.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "AdministrativeArea", name: "İzmir" },
  })),
  ...serviceAreas.ege.map((name) => ({ "@type": "AdministrativeArea", name })),
  { "@type": "Place", name: "Ege Bölgesi" },
  { "@type": "Country", name: serviceAreas.country },
]

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Anasayfa", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

export const businessRef = {
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
}
