import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.gpakgirls.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.9 },
    { path: '/programs', priority: 0.9 },
    { path: '/impact', priority: 0.9 },
    { path: '/team', priority: 0.8 },
    { path: '/stories', priority: 0.8 },
    { path: '/accountability', priority: 0.8 },
    { path: '/get-involved', priority: 0.7 },
    { path: '/donate', priority: 0.8 },
    { path: '/walk-with-her', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
    { path: '/privacy', priority: 0.3 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
