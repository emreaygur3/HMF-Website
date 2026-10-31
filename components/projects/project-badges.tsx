import type { Project } from "@/lib/projects"

const statusClass: Record<Project["status"], string> = {
  Tamamlandı: "bg-green-700 text-white",
  "Devam Ediyor": "bg-amber-400 text-stone-900",
}

/** Proje görselinin köşesindeki kategori ve durum etiketleri (liste ve detay sayfasında ortak) */
export function ProjectBadges({ project, size = "sm" }: { project: Project; size?: "sm" | "md" }) {
  const pad = size === "sm" ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
  return (
    <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
      <span className={`rounded-full bg-stone-900 font-semibold text-white ${pad}`}>{project.category}</span>
      <span className={`rounded-full font-semibold ${statusClass[project.status]} ${pad}`}>{project.status}</span>
    </div>
  )
}
