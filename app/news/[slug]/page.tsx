import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import StoryVideoGrid from '@/components/StoryVideoGrid'
import { news, formatDate } from '@/lib/news'
import { posterSrc, videoSrc } from '@/lib/storyVideos'

type Props = { params: { slug: string } }

const partnerLogos = [
  { name: 'Christ Greater Exploits Church (CGEC)', src: '/images/partners/cgec.jpg' },
  { name: 'Lake Region Community Development Initiative (LARCOD)', src: '/images/partners/larcod.png' },
  { name: 'Devine Women Foundation Inc', src: '/images/partners/devine-women-foundation.jpg' },
  { name: 'Doro Mabaan Community Primary School', src: '/images/partners/doro-mabaan-school.jpg' },
]

export function generateStaticParams() {
  return news.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = news.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { title: post.title, description: post.summary, images: [post.image], type: 'article' },
  }
}

export default function NewsPostPage({ params }: Props) {
  const post = news.find((p) => p.slug === params.slug)
  if (!post) notFound()
  const others = news.filter((p) => p.slug !== post.slug).slice(0, 3)
  const isLogo = post.image.includes('/partners/')
  const hasVideo = post.body.some((b) => b.type === 'video' || b.type === 'storyVideos')

  return (
    <main>
      <article>
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 mb-8"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All news
              </Link>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-3">
                {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">{post.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{post.summary}</p>
            </div>
          </div>
        </header>

        {post.category === 'Partners' && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
            <ul className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {partnerLogos.map((l) => (
                <li key={l.src} className="relative aspect-square rounded-2xl bg-white border border-gray-100">
                  <Image src={l.src} alt={l.name} fill sizes="(max-width: 768px) 50vw, 220px" className="object-contain p-6" />
                </li>
              ))}
            </ul>
          </div>
        )}

        {!hasVideo && post.category !== 'Partners' && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
            <div className="max-w-4xl mx-auto relative aspect-video rounded-2xl overflow-hidden bg-white border border-gray-100">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className={isLogo ? 'object-contain p-16' : 'object-cover'}
              />
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            {post.body.map((block, i) => {
              switch (block.type) {
                case 'p':
                  return <p key={i}>{block.text}</p>
                case 'h2':
                  return (
                    <h2 key={i} className="text-2xl md:text-3xl font-bold text-gray-900 pt-4">
                      {block.text}
                    </h2>
                  )
                case 'list':
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-2 marker:text-primary-500">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                case 'video':
                  return (
                    <figure key={i} className="not-prose">
                      <video
                        controls
                        preload="none"
                        playsInline
                        poster={posterSrc(block.slug)}
                        className="w-full aspect-video rounded-2xl bg-gray-900"
                      >
                        <source src={videoSrc(block.slug)} type="video/mp4" />
                      </video>
                      <figcaption className="mt-3 text-sm text-gray-500">{block.caption}</figcaption>
                    </figure>
                  )
                case 'storyVideos':
                  return (
                    <div key={i} className="text-base -mx-0 lg:-mx-24">
                      <StoryVideoGrid />
                    </div>
                  )
              }
            })}

            {post.links && (
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                {post.links.map((l, i) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={
                      i === 0
                        ? 'btn-primary inline-flex items-center gap-2 px-6 py-3 text-base'
                        : 'inline-flex items-center gap-2 px-6 py-3 text-base rounded-lg border-2 border-primary-600 text-primary-700 font-semibold hover:bg-primary-50 transition-colors'
                    }
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      <section className="section bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">More news</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
