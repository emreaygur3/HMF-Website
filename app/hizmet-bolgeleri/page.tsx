import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import { JsonLd } from "@/components/seo/json-ld"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { serviceAreas } from "@/lib/regions"
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const title = "Hizmet Bölgeleri: Aliağa, İzmir, Ege ve Türkiye"
const description =
  "HMF Desen Yapı; Menemen merkezli olarak Aliağa, Foça, Bergama ve İzmir'in tüm ilçelerinde, Ege Bölgesi'nde ve Türkiye genelinde doğal taş uygulamaları yapar."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hizmet-bolgeleri" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/hizmet-bolgeleri" }),
}

const areaGroups = [
  {
    title: "İzmir",
    text: "Menemen'deki merkezimize yakın olan Aliağa başta olmak üzere İzmir'in tüm ilçelerinde hizmet veriyoruz.",
    items: serviceAreas.izmir,
  },
  {
    title: "Ege Bölgesi",
    text: "Ege'deki villa, otel, site ve peyzaj projelerinde ekibimizi sahaya yönlendiriyoruz.",
    items: serviceAreas.ege,
  },
  {
    title: "Türkiye Geneli",
    text: "Konut, ticari ve kamu projelerinde Türkiye genelinde hizmet veriyoruz. Her projeyi yerinde değerlendirip ihtiyaca en uygun çözümü sunuyoruz.",
    items: [],
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" }])} />

      <PageHero
        title="Hizmet Bölgelerimiz"
        subtitle="Menemen merkezli olarak Aliağa ve tüm İzmir'de, Ege'de ve Türkiye genelinde hizmet veriyoruz"
      />

      <Section size="4xl" className="pt-4 sm:pt-6">
        <div className="space-y-4 sm:space-y-6">
          {areaGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-stone-200 p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-900">
                <MapPin size={22} aria-hidden="true" className="text-brand" />
                {group.title}
              </h2>
              <p className="mt-2 text-stone-600">{group.text}</p>
              {group.items.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Bölgenizde Bir Projeniz mi Var?"
        text="Konumunuzu ve projenizi paylaşın, keşif için size dönüş yapalım."
      />
    </>
  )
}
