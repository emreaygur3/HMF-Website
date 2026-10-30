import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectExplorer } from "@/components/project-explorer"
import { siteConfig, stats } from "@/lib/site"
import { pageOpenGraph } from "@/lib/seo"

const title = "Projeler"
const description =
  "HMF Desen Yapı'nın İzmir ve çevresinde tamamladığı ve devam eden doğal taş, cephe kaplama ve peyzaj projeleri."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projeler" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/projeler" }),
}

const projectStats = [
  { number: stats.projects, label: "Tamamlanan Proje" },
  { number: stats.cities, label: "Şehirde Hizmet" },
  { number: stats.years, label: "Yıl Deneyim" },
  { number: stats.satisfaction, label: "Müşteri Memnuniyeti" },
]

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">Projelerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gerçekleştirdiğimiz başarılı projeleri ve tasarımları keşfedin
          </p>
        </div>
      </section>

      <ProjectExplorer />

      {/* Project Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Proje İstatistikleri</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {projectStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-lg text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siz de Başarı Hikayesinin Parçası Olun</h2>
          <p className="text-lg mb-8 opacity-90">
            Projenizi bizimle gerçekleştirmek ve kaliteli hizmetimizden yararlanmak için bize ulaşın.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            İletişime Geç
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
