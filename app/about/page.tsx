import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  Target,
  Eye,
  CheckCircle,
  Users,
  MapPin,
  ShieldCheck,
  ArrowRight,
  HandHeart,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Who We Are & Why We Exist',
  description:
    'Girl Pride Africa Kenya (GPAK Girls) is a community-rooted organization in western Kenya supporting adolescent mothers and pregnant girls aged 13–23 with psychosocial care, health referrals, education, and livelihoods.',
}

const values = [
  {
    icon: Heart,
    title: 'Dignity First',
    description:
      'Every girl is met with empathy and respect — never judgment. Her story belongs to her, and her consent guides how we work and what we share.',
  },
  {
    icon: Users,
    title: 'Community-Rooted',
    description:
      'We work through the families, schools, health facilities, and local leaders that girls already know and trust.',
  },
  {
    icon: CheckCircle,
    title: 'Accountable',
    description:
      'We are transparent about what we do, what it costs, what works, and what we are still learning.',
  },
  {
    icon: HandHeart,
    title: 'Whole-Person Support',
    description:
      'Teenage motherhood, HIV risk, poverty, and exclusion are connected — so our response connects health, education, livelihoods, and family.',
  },
]

const counties = [
  {
    name: 'Homa Bay',
    note: 'Our home base and largest area of operation, on the shores of Lake Victoria.',
  },
  { name: 'Siaya', note: 'Community outreach and school re-entry support.' },
  { name: 'Kisumu', note: 'Health system linkages and partner coordination.' },
  { name: 'Migori', note: 'Outreach to underserved lakeside and border communities.' },
]

const tocSteps = [
  {
    step: '01',
    title: 'Reach girls where they are',
    text: 'Trusted community members help us identify pregnant girls and adolescent mothers aged 13–23 who have dropped out of school, been rejected by family, or lost access to services.',
  },
  {
    step: '02',
    title: 'Stabilize and support',
    text: 'Psychosocial counselling, peer groups, and case management address trauma and stigma first, while referrals connect each girl to HIV testing and care, antenatal and postnatal services, and child health support.',
  },
  {
    step: '03',
    title: 'Build a future',
    text: 'School re-entry, vocational training, and livelihood support — including our Project FAHARI housing and asset-building model — give each mother a realistic path to income and independence.',
  },
  {
    step: '04',
    title: 'Strengthen the family around her',
    text: 'Parenting and caregiver support informed by evidence-based approaches such as the Sinovuyo programme rebuilds the home environment, so gains last beyond our direct involvement.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About GPAK Girls
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Girl Pride Africa Kenya is a community-rooted organization working in Homa Bay,
              Siaya, Kisumu, and Migori counties in western Kenya. We walk alongside adolescent
              mothers and pregnant girls aged 13–23 as they rebuild stability for themselves and
              their children.
            </p>
          </div>
        </div>
      </section>

      {/* Why here, why now */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Why We Work Here</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  In the communities around Lake Victoria, two crises overlap. The former Nyanza
                  region has carried some of the highest HIV prevalence in Kenya for decades, and
                  teenage pregnancy here is closely linked to HIV risk. Many girls who become
                  pregnant young are in unequal or transactional relationships, with little access
                  to youth-friendly health services or economic options.
                </p>
                <p>
                  Many of the girls we support are living with HIV themselves, or are raising
                  children at high risk of exposure. When a girl becomes a mother at fourteen or
                  sixteen here, she usually loses school, family support, and safety at the same
                  time — so responding to teenage motherhood in this region means responding to
                  HIV prevention, care, and stigma at the same time.
                </p>
                <p>
                  That is why our model is integrated rather than single-issue: psychosocial care,
                  health referrals, education, livelihoods, and family strengthening, delivered
                  through the community structures girls already trust.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/annie-spratt-W3WO3QQwAxM-unsplash.jpg"
                alt="Young mothers participating in a group support session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-primary-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To support adolescent mothers and pregnant girls in western Kenya to heal, return
                to learning, earn a dignified living, and raise healthy children — through
                psychosocial care, health referrals, education, livelihoods, and family
                strengthening.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-secondary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Communities around Lake Victoria where no girl’s future ends with an early
                pregnancy — where every young mother and her child can be healthy, educated,
                economically secure, and free from stigma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-4">How Change Happens</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              Our theory of change is simple: when a young mother is emotionally supported,
              connected to health care, back in education or earning, and backed by her family,
              she and her child thrive — and the cycle of early pregnancy and HIV vulnerability
              weakens with her.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {tocSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex gap-5"
                >
                  <div className="text-3xl font-bold text-primary-200 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                See how this works in our programs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-4">Where We Work</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              Four counties in western Kenya, near the shores of Lake Victoria.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {counties.map((county) => (
                <div
                  key={county.name}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                >
                  <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{county.name}</h3>
                  <p className="text-gray-600 text-sm">{county.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                GPAK Girls began in 2018, when there was no dedicated support for teenage mothers
                in our community. Girls who became pregnant were routinely sent away from home,
                pushed out of school, and left to raise children with no income and no one to talk
                to.
              </p>
              <p>
                We started small — with counselling, mentorship, and practical help for a handful
                of girls in Homa Bay. As trust grew, so did we. Today we run integrated programmes
                that connect psychosocial support, health referrals, school re-entry, vocational
                training, and family strengthening, and we have supported hundreds of adolescent
                mothers and pregnant girls across four counties.
              </p>
              <p>
                We remain deliberately community-rooted. Our staff and volunteers come from the
                communities we serve, we work in partnership with local health facilities, schools,
                and county services, and the girls themselves shape how our programmes evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 mb-6">
              GPAK Girls is led by a multidisciplinary team with experience in programme
              leadership, public health and epidemiology, psychosocial counselling, finance, and
              community engagement.
            </p>
            <Link href="/team" className="btn-primary inline-flex items-center gap-2">
              Our Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Governance & Registration */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 shadow-sm">
            <ShieldCheck className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Governance & Registration
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Girl Pride Africa Kenya is a registered organization in Kenya. An advisory committee
              provides oversight of strategy, finances, and safeguarding, and our finance function
              is led by a Certified Public Accountant.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Registration documents, governance records, policies, and financial information are
              available to partners and donors as part of due diligence.
            </p>
            <Link
              href="/accountability"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Read about our accountability
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
