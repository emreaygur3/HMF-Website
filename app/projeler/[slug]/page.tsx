import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { FittedImage } from "@/components/ui/fitted-image"
import { JsonLd } from "@/components/seo/json-ld"
import { BeforeAfterSlider } from "@/components/projects/before-after-slider"
import { ProjectBadges } from "@/components/projects/project-badges"
import { ProjectCard } from "@/components/projects/project-card"
import { ArrowLink } from "@/components/ui/button"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
import { Section, SectionHeading } from "@/components/ui/section"
import { formatProjectDate, getProject, projects } from "@/lib/projects"
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

// Tailwind sınıfları derleme anında tarandığı için tam sınıf adları sabit tutulur
const infoCols = ["", "sm:grid-cols-1", "sm:grid-cols-2", "sm:grid-cols-3", "sm:grid-cols-2 lg:grid-cols-4"]

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

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Projeler", path: "/projeler" },
          { name: project.title, path: `/projeler/${project.slug}` },
        ])}
      />

      <PageHero
        title={project.title}
        subtitle={project.summary}
        back={{ href: "/projeler", label: "Tüm Projelere Dön" }}
        size="4xl"
      />

      <Section size="4xl" className="pt-4 sm:pt-6">
        {/* Kapak görseli: fotoğraf kırpılmadan sığdırılır */}
        <div className="relative h-72 overflow-hidden rounded-xl bg-stone-200 sm:h-[26rem] md:h-[34rem]">
          <FittedImage src={project.images[0]} alt={project.title} priority sizes="(min-width: 896px) 864px, 100vw" />
          <ProjectBadges project={project} size="md" />
        </div>

        {/* Önce / sonra karşılaştırması */}
        {project.comparison && (
          <div className="mt-12 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:p-8">
            <h2 className="text-center text-2xl font-bold text-stone-900">Önce / Sonra</h2>
            <p className="mb-6 mt-2 text-center text-stone-600">Farkı görmek için çizgiyi sağa sola sürükleyin</p>
            <BeforeAfterSlider before={project.comparison.before} after={project.comparison.after} alt={project.title} />
          </div>
        )}

        {/* Proje bilgileri */}
        <dl className={`mt-8 grid grid-cols-2 gap-4 ${infoCols[info.length]}`}>
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-stone-200 bg-stone-50 p-4 sm:p-5">
              <dt className="mb-1 flex items-center gap-2 text-sm font-semibold text-stone-900">
                <Icon size={18} aria-hidden="true" className="text-brand" />
                {label}
              </dt>
              <dd className="text-stone-600">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Açıklama */}
        <div className="mt-10 space-y-8">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-stone-900">Proje Hakkında</h2>
            <p className="leading-relaxed text-stone-600">{project.description}</p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-stone-900">Proje Amacı</h2>
            <p className="leading-relaxed text-stone-600">{project.objective}</p>
          </div>
          {project.status === "Tamamlandı" ? (
            <div>
              <h2 className="mb-3 text-2xl font-bold text-stone-900">Sonuçlar</h2>
              <p className="leading-relaxed text-stone-600">{project.results}</p>
            </div>
          ) : (
            <div>
              <h2 className="mb-3 text-2xl font-bold text-stone-900">Beklenen Sonuçlar</h2>
              <p className="leading-relaxed text-stone-600">{project.expectedResults}</p>
              <h3 className="mb-3 mt-6 text-xl font-bold text-stone-900">İlerleme</h3>
              <div
                className="h-2 w-full rounded-full bg-stone-200"
                role="progressbar"
                aria-valuenow={project.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Proje ilerlemesi"
              >
                <div className="h-2 rounded-full bg-brand" style={{ width: `${project.progress}%` }} />
              </div>
              <p className="mt-2 text-stone-600">
                %{project.progress} tamamlandı. {project.progressNote}
              </p>
            </div>
          )}
        </div>

        {/* Diğer görseller */}
        {project.images.length > 1 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-stone-900">Proje Görselleri</h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={image} className="relative h-72 overflow-hidden rounded-xl bg-stone-200 sm:h-80">
                  <FittedImage
                    src={image}
                    alt={`${project.title} - Görsel ${index + 2}`}
                    sizes="(min-width: 896px) 420px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {otherProjects.length > 0 && (
        <Section tone="muted">
          <SectionHeading title="Diğer Projelerimiz" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {otherProjects.map((other) => (
              <ProjectCard key={other.slug} project={other} headingLevel="h3" />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ArrowLink href="/projeler">Tüm Projeleri Gör</ArrowLink>
          </div>
        </Section>
      )}

      <CtaSection title="Benzer Bir Proje Yapmak İster Misiniz?" text="Uzman ekibimize projeniz hakkında bilgi verin." />
    </>
  )
}
