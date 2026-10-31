"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { ProjectCard } from "@/components/projects/project-card"
import { Container } from "@/components/ui/section"
import { projects, type ProjectStatus } from "@/lib/projects"

const statuses: ("Tümü" | ProjectStatus)[] = ["Tümü", "Tamamlandı", "Devam Ediyor"]

// Türkçe büyük/küçük harf dönüşümü ("İ" → "i", "I" → "ı") için locale kullanılır.
const normalize = (text: string) => text.toLocaleLowerCase("tr-TR")

const countFor = (status: (typeof statuses)[number]) =>
  projects.filter((p) => status === "Tümü" || p.status === status).length

export function ProjectExplorer() {
  const [selectedStatus, setSelectedStatus] = useState<(typeof statuses)[number]>("Tümü")
  const [searchQuery, setSearchQuery] = useState("")

  const query = normalize(searchQuery.trim())
  const filteredProjects = projects.filter((project) => {
    const statusMatch = selectedStatus === "Tümü" || project.status === selectedStatus
    const searchMatch =
      !query ||
      [project.title, project.summary, project.category, project.location].some((field) =>
        normalize(field).includes(query),
      )
    return statusMatch && searchMatch
  })

  // Hiç projesi olmayan durum filtresi gösterilmez
  const visibleStatuses = statuses.filter((status) => countFor(status) > 0)

  return (
    <section className="bg-stone-50 pb-16 pt-8 sm:pb-20">
      <Container>
        <div className="mb-8 flex flex-col items-center gap-4 sm:mb-10">
          <div className="relative w-full max-w-lg">
            <label htmlFor="project-search" className="sr-only">
              Proje ara
            </label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={20} aria-hidden="true" />
            <input
              id="project-search"
              type="search"
              placeholder="Proje ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-stone-300 bg-white py-3 pl-10 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>

          {visibleStatuses.length > 2 && (
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Duruma göre filtrele">
              {visibleStatuses.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedStatus(status)}
                  aria-pressed={selectedStatus === status}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selectedStatus === status
                      ? "border-brand bg-brand text-white"
                      : "border-stone-200 bg-white text-stone-700 hover:border-brand/50"
                  }`}
                >
                  {status} ({countFor(status)})
                </button>
              ))}
            </div>
          )}
        </div>

        <div aria-live="polite">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-lg text-stone-600">Arama kriterinize uygun proje bulunamadı.</p>
          )}
        </div>
      </Container>
    </section>
  )
}
