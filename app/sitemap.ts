import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hmfdesenyapi.com'

  // Service slugs
  const services = [
    'derzli-ve-derzsiz-tas-duvar',
    'sev-tasi-yapimi',
    'kayrak-tas-kaplama',
    'granurlu-taslar',
    'parke-ve-bordur',
    'renkli-ve-desenli-tas',
  ]

  // Project IDs (1-8 based on current data)
  const projectIds = Array.from({ length: 8 }, (_, i) => i + 1)

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projeler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Service detail pages
    ...services.map((slug) => ({
      url: `${baseUrl}/hizmetler/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Project detail pages
    ...projectIds.map((id) => ({
      url: `${baseUrl}/projeler/${id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
