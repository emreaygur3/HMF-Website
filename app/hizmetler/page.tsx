import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services"
import { pageOpenGraph } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const title = "Doğal Taş ve Peyzaj Hizmetleri İzmir & Aliağa"
const description =
  "Taş duvar, şev taşı, kayrak, granürlü taş, küp taşı ve begonit, karo, parke ve bordür, asfalt ve yol yapımı. Aliağa, İzmir, Ege ve Türkiye genelinde."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hizmetler" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/hizmetler" }),
}

const steps = [
  { step: "1", title: "Danışma", description: "Projenizi dinliyor ve ihtiyaçlarınızı belirliyoruz" },
  { step: "2", title: "Tasarım", description: "En uygun malzeme ve tasarımı seçiyoruz" },
  { step: "3", title: "Uygulama", description: "Profesyonel ekibimizle hızlı ve kaliteli işçilik" },
  { step: "4", title: "Teslim", description: "Sonucu ve bakım talimatlarını sunuyoruz" },
]

export default function Services() {
  return (
    <>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Doğal taş ve dekoratif kaplama konusunda sunduğumuz kapsamlı hizmetleri keşfedin
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  href={`/hizmetler/${service.slug}`}
                  key={service.slug}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all group"
                >
                  <div className="relative overflow-hidden h-48 bg-slate-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: service.imagePositions?.[service.image] }}
                    />
                  </div>

                  <div className="p-8">
                    <div className="inline-block p-3 bg-blue-600 rounded mb-4">
                      <Icon size={24} className="text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h2>
                    <p className="text-slate-600 mb-6">{service.description}</p>

                    {/* Service Details */}
                    <ul className="space-y-3 mb-6">
                      {service.details.slice(0, 4).map((detail) => (
                        <li key={detail} className="flex gap-3 items-start">
                          <span className="text-slate-900 font-bold mt-1" aria-hidden="true">▸</span>
                          <span className="text-sm text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all text-sm">
                      Detaylarını Gör
                      <ArrowRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">İş Sürecimiz</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((process) => (
              <div key={process.step} className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-sm text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Projeniz İçin Teklif Alın</h2>
          <p className="text-lg mb-8 text-gray-300">
            Uzman ekibimize detaylar hakkında bilgi verin. En kısa sürede size dönüş yapacağız.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            İletişim Formu
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>

    </>
  )
}
