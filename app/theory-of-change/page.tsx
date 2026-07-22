import { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Home,
  TrendingUp,
  ArrowRight,
  MapPin,
  Stethoscope,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Theory of Change - How Change Happens',
  description:
    'How Girl Pride Africa Kenya’s model works: the pathway from reaching a girl in crisis to a young mother and her child thriving, and the evidence behind each step.',
}

const pathway = [
  {
    icon: Users,
    title: 'Reach girls where they are',
    text: 'Trusted community members help us identify pregnant girls and adolescent mothers aged 13–23 who have dropped out of school, been rejected by family, or lost access to services.',
  },
  {
    icon: HeartHandshake,
    title: 'Stabilize and support',
    text: 'Psychosocial counselling, peer groups, and case management address trauma and stigma first, while referrals connect each girl to HIV testing and care, antenatal and postnatal services, and child health support.',
  },
  {
    icon: GraduationCap,
    title: 'Build a future',
    text: 'School re-entry, vocational training, and livelihood support, including our Project FAHARI housing and asset-building model, give each mother a realistic path to income and independence.',
  },
  {
    icon: Home,
    title: 'Strengthen the family around her',
    text: 'Parenting and caregiver support informed by evidence-based approaches such as the Sinovuyo programme rebuilds the home environment, so gains last beyond our direct involvement.',
  },
]

const evidence = [
  { icon: Users, stat: '500+', label: 'girls supported since 2018' },
  { icon: MapPin, stat: '4', label: 'counties in western Kenya' },
  { icon: GraduationCap, stat: '8 in 10', label: 'return to school after re-entry support' },
]

export default function TheoryOfChangePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Our Theory of Change
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              When a young mother is emotionally supported, connected to health care, back in
              education or earning, and backed by her family, she and her child thrive, and the
              cycle of early pregnancy and HIV vulnerability weakens with her.
            </p>
          </div>
        </div>
      </section>

      {/* Starting point */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-4">Where the pathway starts</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              In the communities around Lake Victoria, teenage pregnancy is closely tied to HIV
              risk, unequal relationships, and limited access to youth-friendly health services.
              A girl who becomes a mother at fourteen or sixteen here usually loses school, family
              support, and safety at the same time.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That is why our model responds to all of it together, rather than one issue at a
              time.{' '}
              <Link href="/about" className="text-primary-600 font-medium hover:text-primary-700">
                Read more about the context we work in
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* The pathway */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">The Pathway</h2>
            <p className="section-subheading text-center mx-auto mb-16">
              Four connected moves, in order, each building on the one before it.
            </p>

            {/* Steps with connecting spine */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-6 md:left-1/2 top-6 bottom-6 w-0.5 bg-primary-200 md:-translate-x-1/2"
              />
              <div className="space-y-10 md:space-y-2">
                {pathway.map((step, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <div
                      key={step.title}
                      className="relative md:grid md:grid-cols-2 md:gap-x-16 md:items-center md:py-10"
                    >
                      <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="h-12 w-12 rounded-full bg-white border-[3px] border-primary-600 text-primary-600 flex items-center justify-center shadow-sm">
                          <step.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                      </div>

                      <div
                        className={`pl-20 md:pl-0 ${
                          isEven
                            ? 'md:col-start-1 md:pr-16 md:text-right'
                            : 'md:col-start-2 md:pl-16'
                        }`}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.text}</p>
                      </div>
                      <div
                        className={`hidden md:block ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Connector into the outcome */}
            <div
              aria-hidden="true"
              className="h-10 w-0.5 bg-secondary-300 mx-6 md:mx-auto"
            />

            {/* Outcome */}
            <div className="flex justify-center">
              <div className="w-full md:max-w-xl text-center">
                <div className="h-14 w-14 rounded-full bg-secondary-600 text-white flex items-center justify-center shadow-md ring-4 ring-secondary-100 mx-auto mb-5">
                  <TrendingUp className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="bg-white border border-secondary-200 rounded-2xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    She and her child thrive
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stabilized, in care, back on a path to income, and held by a stronger family,
                    a young mother is positioned to break the cycle of early pregnancy and HIV
                    vulnerability for herself and her child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {evidence.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-primary-600 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900 leading-none">
                        {item.stat}
                      </div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors flex-shrink-0"
              >
                See the full evidence
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Stethoscope className="h-12 w-12 text-primary-600 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              See this pathway inside each program
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Every step above is delivered through a specific program area, with its own referral
              routes, partners, and measures.
            </p>
            <Link href="/programs" className="btn-primary inline-flex items-center gap-2">
              Our Programs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
