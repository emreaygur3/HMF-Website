import { projects } from "@/lib/projects"
import { services } from "@/lib/services"

export type GalleryCategory = { id: string; label: string }

export type GalleryItem = {
  src: string
  alt: string
  /** Fotoğrafın ait olduğu hizmet veya proje başlığı */
  caption: string
  category: string
  href: string
  position?: string
}

const PROJECTS_CATEGORY: GalleryCategory = { id: "projeler", label: "Projeler" }

/**
 * Sitedeki tüm hizmet ve proje fotoğraflarını tek listede toplar.
 * Aynı fotoğraf birden çok yerde kullanılıyorsa yalnızca ilk geçtiği yerde gösterilir;
 * fotoğrafı olmayan kategoriler filtrede görünmez.
 */
function buildGallery() {
  const seen = new Set<string>()
  const items: GalleryItem[] = []
  const add = (item: GalleryItem) => {
    if (seen.has(item.src)) return
    seen.add(item.src)
    items.push(item)
  }

  for (const service of services) {
    service.images.forEach((src, index) =>
      add({
        src,
        alt: `${service.title} uygulaması ${index + 1} - HMF Desen Yapı`,
        caption: service.title,
        category: service.slug,
        href: `/hizmetler/${service.slug}`,
        position: service.imagePositions?.[src],
      }),
    )
  }

  for (const project of projects) {
    project.images.forEach((src, index) =>
      add({
        src,
        alt: `${project.title} (${project.location}) - fotoğraf ${index + 1}`,
        caption: project.title,
        category: PROJECTS_CATEGORY.id,
        href: `/projeler/${project.slug}`,
        position: project.imagePositions?.[src],
      }),
    )
  }

  const used = new Set(items.map((item) => item.category))
  const categories: GalleryCategory[] = [
    ...services.map((service) => ({ id: service.slug, label: service.title })),
    PROJECTS_CATEGORY,
  ].filter((category) => used.has(category.id))

  return { items, categories }
}

export const gallery = buildGallery()
