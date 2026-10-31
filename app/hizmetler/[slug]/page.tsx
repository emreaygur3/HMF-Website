import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
import { Section, SectionHeading } from "@/components/ui/section"
import { areaServed, breadcrumbJsonLd, businessRef, pageOpenGraph } from "@/lib/seo"
import { getService, services } from "@/lib/services"
import { siteConfig } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  // Arama sonuçlarında kesilmemesi için kısa tutulur (~160 karakter)
  const description = `${service.title} İzmir, Aliağa ve Ege'de: ${service.description.toLocaleLowerCase("tr-TR")}. 1998'den beri HMF Desen Yapı. Keşif ve teklif için ulaşın.`

  return {
    title: `${service.title} İzmir & Aliağa`,
    description,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: pageOpenGraph({
      title: `${service.title} | ${siteConfig.name}`,
      description,
      url: `/hizmetler/${service.slug}`,
      image: service.image,
    }),
  }
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    serviceType: service.title,
    areaServed,
    provider: businessRef,
    image: `${siteConfig.url}${service.image}`,
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
  }

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Hizmetler", path: "/hizmetler" },
          { name: service.title, path: `/hizmetler/${service.slug}` },
        ])}
      />

      <PageHero title={service.title} subtitle={service.description} back={{ href: "/hizmetler", label: "Hizmetlere Dön" }} />

      <Section className="pt-4 sm:pt-6">
        {/* Galeri */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {service.images.slice(0, 4).map((image, index) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100 md:aspect-video">
              <Image
                src={image}
                alt={`${service.title} - Görsel ${index + 1}`}
                fill
                priority={index < 2}
                sizes="(min-width: 1152px) 552px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: service.imagePositions?.[image] }}
              />
            </div>
          ))}
        </div>

        {/* Açıklama ve özellikler */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-stone-900 sm:text-3xl">Hakkında</h2>
            <p className="text-lg leading-relaxed text-stone-600">{service.fullDescription}</p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-stone-900 sm:text-3xl">Özellikler</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-stone-600">
                  <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Avantajları" />
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {service.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
              <h3 className="mb-2 text-xl font-bold text-stone-900">{benefit.title}</h3>
              <p className="text-stone-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section size="4xl">
        <SectionHeading title="Uygulama Süreci" />
        <ol className="space-y-4">
          {service.process.map((step, index) => (
            <li key={step} className="flex items-center gap-4 rounded-xl border border-stone-200 p-4 sm:gap-6 sm:p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                {index + 1}
              </span>
              <p className="text-base text-stone-700 sm:text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaSection
        title={`${service.title} İçin Teklif Alın`}
        text="Projeniz için uzman ekibimizle iletişime geçin ve en uygun çözümü birlikte bulalım."
        href={`/iletisim?hizmet=${service.slug}`}
      />
    </>
  )
}
