import type { Metadata } from "next"
import { ServiceCard } from "@/components/services/service-card"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
import { Section, SectionHeading } from "@/components/ui/section"
import { pageOpenGraph } from "@/lib/seo"
import { services } from "@/lib/services"
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
  { title: "Danışma", description: "Projenizi dinliyor ve ihtiyaçlarınızı belirliyoruz" },
  { title: "Tasarım", description: "En uygun malzeme ve tasarımı seçiyoruz" },
  { title: "Uygulama", description: "Profesyonel ekibimizle hızlı ve kaliteli işçilik" },
  { title: "Teslim", description: "Sonucu ve bakım talimatlarını sunuyoruz" },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        subtitle="Doğal taş ve dekoratif kaplama konusunda sunduğumuz kapsamlı hizmetleri keşfedin"
      />

      <Section className="pt-4 sm:pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} showDetails headingLevel="h2" />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="İş Sürecimiz" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-stone-200 bg-white p-6 text-center">
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mb-2 text-lg font-bold text-stone-900">{step.title}</h3>
              <p className="text-sm text-stone-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaSection text="Uzman ekibimize projenizin detaylarını iletin, en kısa sürede size dönüş yapalım." />
    </>
  )
}
