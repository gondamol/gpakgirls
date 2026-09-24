import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { challenges } from '@/lib/challenges'

export const metadata: Metadata = {
  title: 'Challenges - What Adolescent Mothers Face in Western Kenya',
  description:
    'Teenage pregnancy, HIV, gender-based violence, early marriage, period poverty and poverty: the overlapping challenges facing adolescent mothers around Lake Victoria, and how GPAK Girls responds.',
}

export default function ChallengesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Challenges
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Around Lake Victoria, a girl who becomes a mother rarely faces one problem at a time.
              Pregnancy, HIV, violence and poverty arrive together, which is why our support is
              built around the whole girl.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((c) => {
              const lead = c.stats[0]
              return (
                <Link
                  key={c.slug}
                  href={`/challenges/${c.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 p-6 flex flex-col hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="text-4xl font-bold text-primary-600 mb-1">{lead.value}</div>
                  <p className="text-sm text-gray-500 mb-5">{lead.label}</p>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{c.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{c.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-primary-600 font-semibold group-hover:text-primary-700">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
