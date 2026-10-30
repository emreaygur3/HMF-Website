import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react"
import { formatProjectDate, getProject, projects } from "@/lib/projects"
import { FittedImage } from "@/components/fitted-image"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd, pageOpenGraph } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  // Arama sonuçlarında kesilmemesi için kısa tutulur (~160 karakter)
  const description = `${project.summary} (${project.location}). HMF Desen Yapı proje detayları ve fotoğrafları.`

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projeler/${project.slug}` },
    openGraph: pageOpenGraph({
      title: `${project.title} | ${siteConfig.name}`,
      description,
      url: `/projeler/${project.slug}`,
      image: project.images[0],
    }),
  }
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const info = [
    { icon: Calendar, label: "Tarih", value: project.date && formatProjectDate(project.date) },
    { icon: MapPin, label: "Konum", value: project.location },
    { icon: Users, label: "Ekip", value: project.team },
    { icon: Clock, label: "Süre", value: project.duration },
  ].filter((item) => item.value)

  // Tailwind sınıfları derleme anında tarandığı için tam sınıf adları sabit tutulur
  const infoCols = ["", "md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"][info.length]

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Projeler", path: "/projeler" },
          { name: project.title, path: `/projeler/${project.slug}` },
        ])}
      />

      {/* Back Button */}
      <section className="pt-32 pb-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold mb-6"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Tüm Projelere Dön
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg mb-8 h-[26rem] md:h-[34rem] bg-slate-200">
            <FittedImage
              src={project.images[0]}
              alt={project.title}
              priority
              sizes="(min-width: 896px) 864px, 100vw"
            />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                {project.category}
              </span>
              <span
                className={`px-4 py-2 rounded-full font-semibold text-center ${
                  project.status === "Tamamlandı" ? "bg-green-700 text-white" : "bg-amber-400 text-slate-900"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 text-balance">{project.title}</h1>

          {/* Project Info Grid */}
          <dl className={`grid ${infoCols} gap-6 mb-12`}>
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white p-6 rounded-lg border border-border">
                <dt className="flex items-center gap-2 text-primary mb-2">
                  <Icon size={20} aria-hidden="true" />
                  <span className="font-semibold">{label}</span>
                </dt>
                <dd className="text-foreground/70">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Description */}
          <div className="bg-white p-8 rounded-lg border border-border mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Proje Hakkında</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">{project.description}</p>

            <h3 className="text-xl font-bold text-primary mb-3">Proje Amacı</h3>
            <p className="text-foreground/80 leading-relaxed mb-8">{project.objective}</p>

            {project.status === "Tamamlandı" ? (
              <>
                <h3 className="text-xl font-bold text-primary mb-3">Sonuçlar</h3>
                <p className="text-foreground/80 leading-relaxed">{project.results}</p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-bold text-primary mb-3">Beklenen Sonuçlar</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">{project.expectedResults}</p>
                <h3 className="text-xl font-bold text-primary mb-3">İlerleme</h3>
                <div className="mb-2">
                  <div
                    className="w-full bg-slate-200 rounded-full h-2"
                    role="progressbar"
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Proje ilerlemesi"
                  >
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <p className="text-foreground/80">
                  %{project.progress} tamamlandı. {project.progressNote}
                </p>
              </>
            )}
          </div>

          {/* Gallery */}
          {project.images.length > 1 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Proje Görselleri</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.slice(1).map((image, index) => (
                  <div key={image} className="relative rounded-lg overflow-hidden bg-slate-200 h-80">
                    <FittedImage
                      src={image}
                      alt={`${project.title} - Görsel ${index + 2}`}
                      sizes="(min-width: 896px) 420px, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Benzer Bir Proje Yapmak İster Misiniz?</h2>
            <p className="mb-6 opacity-90">Uzman ekibimize projeniz hakkında bilgi verin.</p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              İletişime Geç
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Diğer Projelerimiz</h2>
          <ul className="grid sm:grid-cols-3 gap-4 mb-10">
            {otherProjects.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/projeler/${other.slug}`}
                  className="block bg-slate-50 rounded-lg border border-border p-4 font-semibold text-primary hover:shadow-md transition-shadow"
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Tüm Projeleri Gör
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
