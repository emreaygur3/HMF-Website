import { serviceAreas } from "@/lib/regions"
import { siteConfig } from "@/lib/site"

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
