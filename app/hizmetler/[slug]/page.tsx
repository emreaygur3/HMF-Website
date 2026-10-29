import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { getService, services } from "@/lib/services"
import { areaServed, breadcrumbJsonLd, businessRef } from "@/lib/seo"
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

  return {
    title: `${service.title} İzmir & Aliağa`,
    description: `${service.fullDescription} Aliağa, Menemen ve tüm İzmir'de, Ege'de ve Türkiye genelinde hizmet.`,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.fullDescription,
      url: `/hizmetler/${service.slug}`,
      images: [{ url: service.image }],
    },
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

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Hizmetlere Dön
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance">{service.title}</h1>
          <p className="text-xl text-gray-200">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {service.images.slice(0, 4).map((image, index) => (
              <div key={image} className="relative overflow-hidden rounded-lg aspect-square md:aspect-video">
                <Image
                  src={image}
                  alt={`${service.title} - Görsel ${index + 1}`}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: service.imagePositions?.[image] }}
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Hakkında</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">{service.fullDescription}</p>

            {/* Details List */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Özellikler</h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-12">
              {service.details.map((detail) => (
                <li key={detail} className="flex gap-3 items-start">
                  <span className="text-slate-900 font-bold mt-1 flex-shrink-0" aria-hidden="true">
                    ▸
                  </span>
                  <span className="text-slate-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Avantajları</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Uygulama Süreci</h2>
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-slate-700">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{service.title} İçin Teklif Alın</h2>
          <p className="text-lg mb-8 text-gray-300">
            Projeleriniz için uzman ekibimizle iletişime geçin ve en uygun çözümü birlikte bulun.
          </p>
          <Link
            href={`/iletisim?hizmet=${service.slug}`}
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  )
}
