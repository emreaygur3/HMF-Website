import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site"
import { serviceLinks, services } from "@/lib/services"
import { areaServed, pageOpenGraph } from "@/lib/seo"
import "./globals.css"

const geist = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist-sans", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HMF Desen Yapı | İzmir Aliağa Doğal Taş, Taş Duvar ve Kaplama",
    template: "%s | HMF Desen Yapı",
  },
  description: siteConfig.description,
  keywords: [
    "doğal taş",
    "doğal taş uygulama",
    "taş duvar",
    "taş duvar ustası",
    "dekoratif taş kaplama",
    "şev taşı",
    "istinat duvarı",
    "kayrak taş kaplama",
    "granürlü taş",
    "parke bordür",
    "küp taşı",
    "begonit",
    "karo döşeme",
    "asfalt yol yapımı",
    "asfalt serimi",
    "Aliağa asfalt",
    "İzmir yol yapımı",
    "peyzaj tasarımı",
    "İzmir doğal taş",
    "İzmir taş ustası",
    "Aliağa taş duvar",
    "Aliağa doğal taş",
    "Menemen taş duvar",
    "Foça taş ustası",
    "Bergama şev taşı",
    "Ege doğal taş",
    "HMF Desen Yapı",
  ],
  category: "construction",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Ana sayfanın paylaşım bilgisi; diğer sayfalar pageOpenGraph ile kendi bilgilerini verir
  openGraph: pageOpenGraph({
    title: "HMF Desen Yapı | İzmir Aliağa Doğal Taş, Taş Duvar ve Kaplama",
    description:
      "1998'den beri Aliağa, Menemen ve tüm İzmir'de; Ege'de ve Türkiye genelinde doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleri.",
    url: "/",
  }),
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "TR-35",
    "geo.placename": "Menemen, İzmir",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#1c1917",
}

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description:
    "İzmir Menemen merkezli; Aliağa, Foça, Bergama ve tüm İzmir'de, Ege Bölgesi'nde ve Türkiye genelinde doğal taş duvar, şev taşı, kayrak taş kaplama, granürlü taş, parke ve bordür, küp taşı ve begonit, karo, asfalt ve yol yapımı uygulamaları.",
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.jpg`,
  logo: `${siteConfig.url}/logo-512.png`,
  telephone: siteConfig.phones[0].tel,
  contactPoint: siteConfig.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.tel,
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: "Turkish",
  })),
  email: siteConfig.email,
  foundingDate: String(siteConfig.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.district,
    addressRegion: siteConfig.address.city,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed,
  knowsAbout: services.map((service) => service.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Doğal Taş ve Peyzaj Hizmetleri",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        url: `${siteConfig.url}/hizmetler/${service.slug}`,
      },
    })),
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={geist.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <JsonLd data={businessJsonLd} />
        <Navigation services={serviceLinks} />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
