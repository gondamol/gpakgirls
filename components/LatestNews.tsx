import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { news } from '@/lib/news'

export default function LatestNews() {
  return (
    <section className="section bg-gray-50 border-t border-gray-100" aria-labelledby="latest-news-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 id="latest-news-heading" className="section-heading mb-2">
              Latest News
            </h2>
            <p className="text-lg text-gray-600">New stories and programme updates from our work.</p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700 whitespace-nowrap"
          >
            All news <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
