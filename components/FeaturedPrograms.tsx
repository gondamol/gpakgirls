import Link from 'next/link'
import {
  HeartHandshake,
  Stethoscope,
  BookOpen,
  Briefcase,
  Home,
  ArrowRight,
} from 'lucide-react'

const programs = [
  {
    icon: HeartHandshake,
    title: 'Psychosocial Support & Mental Health',
    href: '/programs#psychosocial',
    description:
      'Counselling, mental health screening and referral, peer groups, and mentorship that help girls heal from trauma and stigma before anything else.',
    color: 'bg-pink-500',
  },
  {
    icon: Stethoscope,
    title: 'Health & HIV Referrals',
    href: '/programs#health',
    description:
      'Linkage and accompaniment to HIV testing and care, PMTCT, antenatal and postnatal services, and child health.',
    color: 'bg-blue-500',
  },
  {
    icon: BookOpen,
    title: 'Education & School Re-entry',
    href: '/programs#education',
    description:
      'Fees, re-entry negotiation, tutoring, and literacy and life-skills classes so every young mother keeps learning, in school or out.',
    color: 'bg-indigo-500',
  },
  {
    icon: Briefcase,
    title: 'Livelihoods & Agriculture',
    href: '/programs#livelihoods',
    description:
      'Vocational training, kitchen gardens and agribusiness, savings, and our Project FAHARI housing and asset-building model for economic independence.',
    color: 'bg-purple-500',
  },
  {
    icon: Home,
    title: 'Family Strengthening',
    href: '/programs#family',
    description:
      'Parenting and caregiver support, informed by approaches like Sinovuyo, that rebuilds the home around each girl.',
    color: 'bg-green-500',
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">One Girl, One Plan</h2>
          <p className="section-subheading mx-auto">
            Teenage motherhood, HIV vulnerability, school dropout, and poverty arrive together,
            so our five program areas work together around every girl.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="bg-white rounded-lg p-6 border border-gray-100 hover:border-primary-300 transition-colors block"
            >
              <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </Link>
          ))}

          <div className="bg-primary-600 rounded-lg p-6 border border-primary-600 flex flex-col justify-center text-white">
            <h3 className="text-xl font-semibold mb-3">How it fits together</h3>
            <p className="text-primary-100 text-sm leading-relaxed mb-4">
              See the full journey: from the day a girl is referred to us to the day she
              graduates, stable and independent.
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 font-semibold hover:text-primary-100 transition-colors"
            >
              Explore Our Programs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
