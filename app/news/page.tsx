import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Newspaper } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { news, formatDate, type NewsPost } from '@/lib/news'

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'The latest from GPAK Girls: new stories, programme updates and partners in our work with teen mothers and adolescent girls in western Kenya.',
  alternates: { canonical: '/news' },
}

export default function NewsPage() {
  const [latest, ...rest] = news
  return (
    <main>
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              <span>News & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What’s New at GPAK Girls</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              New stories, programme updates and the partners who walk with us.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="sr-only">Latest update</h2>
            <div className="mb-12">
              <FeaturedPost post={latest} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More updates</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Be Part of the Next Update</h2>
            <p className="text-lg text-gray-600 mb-8">
              A monthly gift keeps mentor mothers walking with girls through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/walk-with-her" className="btn-primary px-8 py-3">
                Walk With Her Monthly
              </Link>
              <Link
                href="/get-involved"
                className="inline-block border-2 border-primary-600 text-primary-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Other Ways to Help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeaturedPost({ post }: { post: NewsPost }) {
  return (
    <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="lg:col-span-3">
        <NewsCardImage post={post} />
      </div>
      <div className="lg:col-span-2 p-6 lg:p-10 flex flex-col justify-center">
        <FeaturedText post={post} />
      </div>
    </div>
  )
}

function NewsCardImage({ post }: { post: NewsPost }) {
  return (
    <Link href={`/news/${post.slug}`} className="relative block aspect-video h-full" tabIndex={-1} aria-hidden="true">
      <Image src={post.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
    </Link>
  )
}

function FeaturedText({ post }: { post: NewsPost }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-3">
        Latest · {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
        <Link href={`/news/${post.slug}`} className="hover:text-primary-700">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">{post.summary}</p>
      <Link
        href={`/news/${post.slug}`}
        className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
      >
        Read the full update <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </>
  )
}
