import type { MetadataRoute } from 'next'
import { challenges } from '@/lib/challenges'
import { news } from '@/lib/news'

const BASE_URL = 'https://www.gpakgirls.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.9 },
    { path: '/our-model', priority: 0.9 },
    { path: '/programs', priority: 0.9 },
    { path: '/challenges', priority: 0.8 },
    ...challenges.map((c) => ({ path: `/challenges/${c.slug}`, priority: 0.7 })),
    { path: '/impact', priority: 0.9 },
    { path: '/team', priority: 0.8 },
    { path: '/stories', priority: 0.8 },
    { path: '/news', priority: 0.8 },
    { path: '/accountability', priority: 0.8 },
    { path: '/get-involved', priority: 0.7 },
    { path: '/donate', priority: 0.8 },
    { path: '/walk-with-her', priority: 0.8 },
    { path: '/giving-circles', priority: 0.7 },
    { path: '/planned-giving', priority: 0.6 },
    { path: '/contact', priority: 0.7 },
    { path: '/privacy', priority: 0.3 },
  ]

  const pages = routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const posts = news.map((p) => ({
    url: `${BASE_URL}/news/${p.slug}`,
    lastModified: new Date(`${p.date}T00:00:00Z`),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...pages, ...posts]
}
