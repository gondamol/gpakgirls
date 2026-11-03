import Link from 'next/link'

// Mission, address and registration directly under the hero, so a first-time visitor (and a
// Google Ad Grants reviewer) sees what we do, where we are and that we are registered.
export default function MissionStrip() {
  return (
    <section className="bg-secondary-600 text-white" aria-labelledby="mission-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
          <div className="min-w-0">
            <p className="text-base sm:text-lg leading-snug">
              <strong id="mission-heading" className="text-accent-400">
                Our mission:
              </strong>{' '}
              helping adolescent mothers and pregnant girls in western Kenya heal, learn, earn and
              raise healthy children.
            </p>
            <p className="mt-1.5 text-sm text-secondary-200">
              Homa Bay Town, Kenya · Registered NGO, Reg. No. OP.218/051/19-189/11666
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg bg-accent-400 text-gray-900 font-semibold px-6 py-3 min-h-[44px] hover:bg-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-600 transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white font-semibold px-6 py-3 min-h-[44px] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-600 transition-colors"
            >
              Get help for a girl
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
