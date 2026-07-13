import { Metadata } from 'next'
import Link from 'next/link'
import {
  BarChart3,
  ClipboardList,
  Microscope,
  LockKeyhole,
  FileText,
  ArrowRight,
  Users,
  MapPin,
  GraduationCap,
  Stethoscope,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impact & Learning - Evidence, Monitoring & Results',
  description:
    'How GPAK Girls measures results: monitoring and evaluation approach, results to date for adolescent mothers in western Kenya, learning agenda, and data ethics.',
}

const headline = [
  {
    icon: Users,
    stat: '500+',
    label: 'Adolescent mothers and pregnant girls supported since 2018',
  },
  {
    icon: MapPin,
    stat: '4',
    label: 'Counties in western Kenya: Homa Bay, Siaya, Kisumu, Migori',
  },
  {
    icon: GraduationCap,
    stat: '8 in 10',
    label: 'Girls we support for school re-entry return to the classroom',
  },
  {
    icon: Stethoscope,
    stat: '5',
    label: 'Connected program areas around each girl, from counselling to livelihoods',
  },
]

const monitoring = [
  {
    icon: ClipboardList,
    title: 'Case management at the centre',
    text: 'Every girl has an individual case record: her needs assessment, support plan, referrals made, and follow-up visits. This is how we know each girl’s journey — not just aggregate numbers.',
  },
  {
    icon: BarChart3,
    title: 'What we track',
    text: 'School re-entry and retention, referral completion and retention in health care, training completion and income activity, family reunification, and participation in psychosocial support — disaggregated by age, county, and support received.',
  },
  {
    icon: Microscope,
    title: 'In-house public health capacity',
    text: 'Our team includes a public health professional and epidemiologist, which strengthens how we collect, question, and use data — and connects our indicators to county health data and national statistics.',
  },
  {
    icon: LockKeyhole,
    title: 'Data ethics',
    text: 'We work with sensitive information about minors, pregnancy, and HIV status. Records are kept confidential, shared figures are anonymized, and nothing about an individual girl is published without her informed consent.',
  },
]

const learning = [
  'Which combination of supports keeps a young mother in school through the full year — fees alone, or fees plus childcare and mentorship?',
  'What makes health referrals stick, so girls not only reach HIV and maternal health services but stay in care?',
  'How family strengthening approaches such as Sinovuyo-informed parenting change the home environment around adolescent mothers.',
  'How housing and asset support (Project FAHARI) affects long-term household stability compared with livelihood training alone.',
]

export default function ImpactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Impact & Learning
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              What we have achieved, how we measure it, and what we are still learning — grounded
              in our programme records and the experiences of the girls we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Headline results */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-heading text-center mb-12">Results to Date</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {headline.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full mb-4">
                    <item.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
              Figures come from our programme registers and case records. Verified, disaggregated
              beneficiary data is shared with partners as part of due diligence and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* How we monitor */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-4">How We Measure</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              Monitoring is not paperwork for donors — it is how we know whether a girl is actually
              safer, healthier, and more secure than when she came to us.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {monitoring.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-50 rounded-lg mb-4">
                    <item.icon className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning agenda */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-4">What We Are Learning</h2>
            <p className="section-subheading text-center mx-auto mb-10">
              Questions we are actively working to answer with our data, our participants, and our
              partners:
            </p>
            <div className="space-y-4">
              {learning.map((q, i) => (
                <div
                  key={q}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200">
            <FileText className="h-14 w-14 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Reports & Documentation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Activity reports, verified beneficiary figures, monitoring tools, and anonymized
              programme data are available to partners and donors on request, alongside our
              governance and financial documentation. We are working toward publishing an annual
              report on this website.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Request Documentation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
