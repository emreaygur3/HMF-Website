"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { formatProjectDate, projects, type ProjectStatus } from "@/lib/projects"

const statuses: ("Tümü" | ProjectStatus)[] = ["Tümü", "Tamamlandı", "Devam Ediyor"]

// Türkçe büyük/küçük harf dönüşümü ("İ" → "i", "I" → "ı") için locale kullanılır.
const normalize = (text: string) => text.toLocaleLowerCase("tr-TR")

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

  return (
    <>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar - Centered */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-lg">
              <label htmlFor="project-search" className="sr-only">
                Proje ara
              </label>
              <Search className="absolute left-3 top-3.5 text-muted-foreground" size={20} aria-hidden="true" />
              <input
                id="project-search"
                type="search"
                placeholder="Proje ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Status Filter Buttons - Centered */}
          <div className="flex flex-wrap gap-3 justify-center" role="group" aria-label="Duruma göre filtrele">
            {statuses
              // Hiç projesi olmayan durum filtresi gösterilmez
              .filter((status) => status === "Tümü" || projects.some((p) => p.status === status))
              .map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setSelectedStatus(status)}
                aria-pressed={selectedStatus === status}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedStatus === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                {status} ({projects.filter((p) => status === "Tümü" || p.status === status).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-slate-50" aria-live="polite">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  href={`/projeler/${project.slug}`}
                  key={project.slug}
                  className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden h-64 bg-slate-200">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: project.imagePositions?.[project.images[0]] }}
                    />
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold text-center ${
                          project.status === "Tamamlandı" ? "bg-green-700 text-white" : "bg-amber-400 text-slate-900"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-primary mb-2">{project.title}</h2>
                    <p className={`text-foreground/70 text-sm ${project.date ? "mb-2" : "mb-4"}`}>{project.summary}</p>
                    {project.date && (
                      <p className="text-foreground/50 text-xs mb-4">
                        Tarih: <time dateTime={project.date}>{formatProjectDate(project.date)}</time>
                      </p>
                    )}
                    <div className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                      Detayları Gör
                      <ArrowRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">Arama kriterinize uygun proje bulunamadı.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
