import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"
import { services } from "@/lib/services"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/hakkimizda", "/hizmetler", "/hizmet-bolgeleri", "/projeler", "/iletisim"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }))

  const servicePages = services.map((service) => ({
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const projectPages = projects.map((project) => ({
    url: `${siteConfig.url}/projeler/${project.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }))

  return [...staticPages, ...servicePages, ...projectPages]
}
