import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  HeartHandshake,
  Stethoscope,
  BookOpen,
  Briefcase,
  Home,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  MessageCircle,
  Database,
  Banknote,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Programs - Integrated Support for Adolescent Mothers',
  description:
    'GPAK Girls delivers integrated support for adolescent mothers in western Kenya: psychosocial care, HIV and maternal health referrals, school re-entry, livelihoods (Project FAHARI), and family strengthening.',
}

const programs = [
  {
    icon: HeartHandshake,
    title: 'Psychosocial Support & Mentorship',
    slug: 'psychosocial',
    image: '/images/Counseling.jpg',
    intro:
      'Healing comes first. A girl who has been rejected by her family and pushed out of school cannot plan a future until she feels safe, heard, and valued.',
    features: [
      'One-on-one counselling with trained counsellors, using trauma-informed approaches',
      'Peer support groups where young mothers share experiences and reduce isolation',
      'Mentorship from trained women mentors in each community',
      'Stigma-reduction work with families and communities',
      'Crisis support and safe referral for girls facing violence or abuse',
    ],
    monitoring:
      'We track participation, wellbeing changes reported by girls, and safe resolution of protection concerns.',
  },
  {
    icon: Stethoscope,
    title: 'Health & HIV Referrals',
    slug: 'health',
    image: '/images/julie-pittevils-UvOFhuDk5k0-unsplash.jpg',
    intro:
      'We are not a clinic — and we do not pretend to be. Our strength is making sure every girl actually reaches the health services she and her baby need, and stays in care.',
    features: [
      'Referral and accompaniment to adolescent-friendly HIV testing, counselling, and treatment',
      'Linkage to prevention of mother-to-child transmission (PMTCT) services',
      'Support to attend antenatal and postnatal care appointments',
      'Child health follow-up: immunization, nutrition, and growth monitoring',
      'HIV prevention education and sexual and reproductive health information',
    ],
    monitoring:
      'We track referral completion, retention in care, and clinic attendance — in coordination with local health facilities and with strict confidentiality.',
  },
  {
    icon: BookOpen,
    title: 'Education & School Re-entry',
    slug: 'education',
    image: '/images/educational.jpg',
    intro:
      'Pregnancy ends too many school journeys in western Kenya. We help girls go back — and stay.',
    features: [
      'School re-entry negotiation with schools and families',
      'School fees assistance, supplies, and uniforms',
      'Tutoring and exam preparation to catch up on lost time',
      'Childcare support so mothers can attend class',
      'Career guidance toward further education and training',
    ],
    monitoring:
      'Most girls we support return to school; we track re-entry, retention through the school year, and exam completion.',
  },
  {
    icon: Briefcase,
    title: 'Livelihoods & Economic Strengthening',
    slug: 'livelihoods',
    image: '/images/vocationl.jpg',
    intro:
      'For mothers who cannot return to school, income is protection. Economic independence reduces the transactional relationships that drive both repeat pregnancy and HIV risk.',
    features: [
      'Vocational training, including tailoring and hairdressing, with starter kits on graduation',
      'Business skills, financial literacy, and savings groups',
      'Project FAHARI: our housing, asset-building, and livelihood model that helps young mothers move from crisis to stability',
      'Mentorship from local businesswomen and job placement support',
    ],
    monitoring:
      'We track training completion, income-generating activity after graduation, and household stability for FAHARI participants.',
  },
  {
    icon: Home,
    title: 'Family Strengthening & Parenting',
    slug: 'family',
    image: '/images/mentorship.jpg',
    intro:
      'A girl’s recovery lasts when her family stands behind her. We work with caregivers and households — not just the girl alone.',
    features: [
      'Positive parenting support informed by evidence-based approaches such as the Sinovuyo parenting programme',
      'Caregiver dialogue to rebuild communication and reduce conflict at home',
      'Family mediation for girls rejected after pregnancy',
      'Support for the home environment around adolescents receiving HIV and maternal health services',
      'Early childhood care guidance for young mothers',
    ],
    monitoring:
      'We track family reunification, caregiver participation, and the home environment of children in the programme.',
  },
]

const journey = [
  {
    step: '1',
    title: 'Identification',
    text: 'Community volunteers, schools, health workers, and local leaders refer girls to us — or girls come themselves.',
  },
  {
    step: '2',
    title: 'Assessment & Consent',
    text: 'Together with each girl we assess her needs — safety, health, schooling, income, family — and agree on a plan. Nothing happens without her consent.',
  },
  {
    step: '3',
    title: 'Integrated Support',
    text: 'Counselling and health referrals start immediately; education or livelihood pathways and family work follow as she stabilizes.',
  },
  {
    step: '4',
    title: 'Follow-up & Graduation',
    text: 'Case follow-up continues until she is stable — in school or earning, in care if HIV-positive, and supported at home. Graduation is planned, not abrupt.',
  },
]

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              One girl, one plan, five connected areas of support. Because teenage motherhood, HIV
              vulnerability, school dropout, and poverty arrive together — our response does too.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <section
          key={program.slug}
          id={program.slug}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h2>

                <p className="text-lg text-gray-600 mb-6">{program.intro}</p>

                <ul className="space-y-3 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary-50 p-6 rounded-xl border border-secondary-100">
                  <p className="font-semibold text-gray-900 mb-1">How we measure it:</p>
                  <p className="text-gray-700 text-sm">{program.monitoring}</p>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={program.image}
                    alt={`${program.title} — GPAK Girls program activities`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Participant Journey */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-4">A Girl’s Journey With Us</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              From first contact to planned graduation, every girl follows a clear, case-managed
              path.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {journey.map((item) => (
                <div key={item.step} className="relative bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="section bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple Technology, Human Touch
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Most of the girls we serve do not own a smartphone — so our technology meets them
                where they are, and keeps our work traceable for partners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: 'No smartphone needed',
                  text: 'Girls stay connected through SMS, voice calls, and WhatsApp on basic or shared phones. Appointment and follow-up reminders reach them the same way — and our mentors carry the technology to girls who have none.',
                },
                {
                  icon: MessageCircle,
                  title: 'WhatsApp peer circles',
                  text: 'Moderated WhatsApp groups keep peer support alive between meetings, connect mentors to the girls they walk with, and give a young mother somewhere to turn at 9pm, not just on group day.',
                },
                {
                  icon: Database,
                  title: 'Digital case records',
                  text: 'Every girl’s journey — needs, referrals, follow-ups, milestones — is tracked in digital registers, so no one falls through the cracks and our results can be verified against records, not memory.',
                },
                {
                  icon: Banknote,
                  title: 'M-Pesa, not cash',
                  text: 'School fees support, clinic transport, and stipends move through M-Pesa and the organization’s accounts — every shilling traceable, every transfer auditable.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4">
                    <item.icon className="h-6 w-6 text-primary-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 mt-10 max-w-2xl mx-auto">
              As we scale, we are investing in stronger digital case management that links every
              referral to a tracked outcome — bringing the discipline of digital-first health
              platforms to a deeply community-rooted model.
            </p>
          </div>
        </div>
      </section>

      {/* Safeguarding strip */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl border border-gray-200 p-8">
            <ShieldCheck className="h-14 w-14 text-primary-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Safeguarding runs through everything
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We work with minors and with sensitive information about pregnancy, HIV, and
                violence. Every activity is governed by our child safeguarding commitments, staff
                code of conduct, consent procedures, and confidential reporting pathways.{' '}
                <Link href="/accountability" className="text-primary-600 font-medium hover:underline">
                  Read how we keep girls safe →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & CTA */}
      <section className="section bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Who We Serve
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Participants</h3>
                <ul className="space-y-3">
                  {[
                    'Adolescent mothers and pregnant girls aged 13–23',
                    'Living in Homa Bay, Siaya, Kisumu, or Migori counties',
                    'Prioritizing girls who are out of school, out of care, or without family support',
                    'All services are free, voluntary, and confidential',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Need Support?</h3>
                <p className="mb-6">
                  If you are a young mother or pregnant girl who needs help — or you know one —
                  reach out. We will listen first.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
