import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { challenges, getChallenge } from '@/lib/challenges'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return challenges.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const challenge = getChallenge(params.slug)
  if (!challenge) return {}
  return {
    title: `${challenge.name} in Western Kenya`,
    description: challenge.summary,
  }
}

export default function ChallengePage({ params }: Props) {
  const challenge = getChallenge(params.slug)
  if (!challenge) notFound()

  const others = challenges.filter((c) => c.slug !== challenge.slug)

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/challenges"
              className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-600 hover:text-primary-700"
            >
              Challenges
            </Link>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              {challenge.name}
            </h1>
            <p className="text-2xl text-gray-800 font-medium mb-4 text-balance">
              {challenge.tagline}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">{challenge.summary}</p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary-900 text-white py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <dl
            className={`grid gap-x-6 gap-y-10 max-w-5xl mx-auto ${
              challenge.stats.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 max-w-3xl'
            }`}
          >
            {challenge.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end items-center text-center">
                <dt className="mt-2 text-sm sm:text-base text-primary-50 font-medium leading-snug max-w-[18rem]">
                  {stat.label}
                  <span className="block mt-1 text-xs text-primary-200 font-normal">
                    {stat.source}
                  </span>
                </dt>
                <dd className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-accent-300">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Context */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-6">The challenge</h2>
            <div className="space-y-4">
              {challenge.context.map((para) => (
                <p key={para} className="text-lg text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-12">How GPAK responds</h2>
            <div
              className={`grid gap-6 ${
                challenge.response.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-3xl mx-auto'
              }`}
            >
              {challenge.response.map((item) => (
                <div
                  key={item.text}
                  className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-primary-600 p-6 flex flex-col"
                >
                  <p className="text-gray-700 leading-relaxed mb-5">{item.text}</p>
                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    {item.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Sources</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {challenge.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-gray-300 underline-offset-2 hover:text-primary-600"
                  >
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other challenges + CTA */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Help a young mother through all of it
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              These challenges arrive together in a girl’s life, so our support does too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link href="/donate" className="btn-primary">
                Donate
              </Link>
              <Link href="/walk-with-her" className="btn-outline">
                Walk With Her monthly
              </Link>
            </div>

            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
              Other challenges
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  href={`/challenges/${c.slug}`}
                  className="px-4 py-2 min-h-[44px] inline-flex items-center rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
