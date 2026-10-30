import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
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

export default function ServiceAreas() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Hizmet Bölgeleri", path: "/hizmet-bolgeleri" }])} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">Hizmet Bölgelerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Menemen merkezli olarak Aliağa ve tüm İzmir&apos;de, Ege&apos;de ve Türkiye genelinde hizmet veriyoruz
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          {areaGroups.map((group) => (
            <div key={group.title} className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold text-primary mb-2">{group.title}</h2>
              <p className="text-foreground/70 mb-3">{group.text}</p>
              {group.items.length > 0 && <p className="text-foreground font-medium">{group.items.join(" · ")}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground/80 mb-6">Bölgenizde bir projeniz mi var? Konumunuzu paylaşın, size dönüş yapalım.</p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold hover:bg-primary/90 transition-colors"
          >
            İletişime Geç
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
