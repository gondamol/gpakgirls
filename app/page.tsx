import Link from 'next/link'
import { MapPin, ShieldCheck, ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import ImpactStats from '@/components/ImpactStats'
import FeaturedPrograms from '@/components/FeaturedPrograms'
import FeaturedStories from '@/components/FeaturedStories'
import CallToAction from '@/components/CallToAction'
import Newsletter from '@/components/Newsletter'

function WhyHere() {
  return (
    <section className="section bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary-300 mb-4">
              <MapPin className="h-4 w-4" />
              <span>Homa Bay · Siaya · Kisumu · Migori</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why the Lake Victoria Region
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Around Lake Victoria, two crises overlap: the former Nyanza region has long carried
              some of the highest HIV prevalence in Kenya, and teenage pregnancy here is closely
              tied to HIV risk. When a girl becomes a mother at fifteen, she often loses school,
              family, and safety at once. Responding to teenage motherhood here means responding
              to HIV prevention, maternal health, and stigma at the same time — which is exactly
              how our programs are built.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <ShieldCheck className="h-10 w-10 text-primary-300 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Built for partnership</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Registered organization · advisory committee oversight · CPA-led finances · child
              safeguarding and PSEA commitments · case-managed programmes with tracked results.
              Due diligence documents are available to partners on request.
            </p>
            <Link
              href="/accountability"
              className="inline-flex items-center gap-2 text-primary-300 font-semibold hover:text-primary-200 transition-colors"
            >
              How we stay accountable
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <FeaturedPrograms />
      <WhyHere />
      <FeaturedStories />
      <CallToAction />
      <Newsletter />
    </main>
  )
}
