import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatDate, type NewsPost } from '@/lib/news'

export default function NewsCard({ post }: { post: NewsPost }) {
  const isLogo = post.image.includes('/partners/')
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary-300 hover:shadow-md transition">
      <Link href={`/news/${post.slug}`} className="relative block aspect-video bg-white" tabIndex={-1} aria-hidden="true">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={isLogo ? 'object-contain p-10' : 'object-cover'}
        />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">
          {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
          <Link href={`/news/${post.slug}`} className="hover:text-primary-700">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.summary}</p>
        <Link
          href={`/news/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Read more <span className="sr-only">about {post.title}</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
