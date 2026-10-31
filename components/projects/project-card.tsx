import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectBadges } from "@/components/projects/project-badges"
import { formatProjectDate, type Project } from "@/lib/projects"

/** Proje kartı: Projeler listesi ve proje detayındaki "Diğer Projelerimiz" bölümünde ortak */
export function ProjectCard({ project, headingLevel: Heading = "h2" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const cover = project.images[0]
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-all hover:border-brand/40 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden bg-stone-200 sm:h-64">
        <Image
          src={cover}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: project.imagePositions?.[cover] }}
        />
        <ProjectBadges project={project} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-xl font-bold text-stone-900">{project.title}</Heading>
        <p className="mt-2 text-sm text-stone-600">{project.summary}</p>
        {project.date && (
          <p className="mt-2 text-xs text-stone-500">
            {project.location} · <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
          </p>
        )}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-brand transition-all group-hover:gap-3">
          Detayları Gör
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
