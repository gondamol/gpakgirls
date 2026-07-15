import { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldCheck,
  LockKeyhole,
  MessageSquareWarning,
  Landmark,
  Scale,
  FileCheck,
  ArrowRight,
  Mail,
  Phone,
  BadgeCheck,
  PieChart,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accountability - Safeguarding, Policies & Financial Transparency',
  description:
    'How GPAK Girls stays accountable: child safeguarding and PSEA, data protection, complaints and feedback, financial management, and governance in western Kenya.',
}

const safeguardingPoints = [
  'A child safeguarding policy and a staff and volunteer code of conduct that everyone working with girls signs and is trained on',
  'Prevention of sexual exploitation and abuse (PSEA): zero tolerance, clear reporting duties, and consequences that apply to staff, volunteers, and partners',
  'Safe recruitment: references and background checks for staff and volunteers who work with children and vulnerable young women',
  'A confidential reporting and referral pathway for disclosures of abuse, violence, or urgent protection needs, connected to local child protection and health services',
  'Informed consent and assent procedures for participation, photography, and storytelling: a girl’s story is hers, and saying no never affects her support',
]

const dataPoints = [
  'We collect only the information we need to support each girl safely',
  'Records about pregnancy, HIV status, and violence are kept confidential with restricted access',
  'Published figures are aggregated and anonymized; no girl is identifiable without her informed consent',
  'Personal data is never sold or shared for commercial purposes',
]

const financePoints = [
  'Finance is led by a Certified Public Accountant, CPA(K)',
  'Organizational bank account with dual controls: funds are received and managed by the organization, never by individuals',
  'Documented finance and procurement procedures with approval thresholds',
  'Budgets, financial statements, and records are shared with partners and funders as part of due diligence and reporting',
  'We welcome independent review and audit as our funding grows',
]

export default function AccountabilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Accountability
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We work with minors and with sensitive information about pregnancy, HIV, and
              violence. That is a serious responsibility; here is how we carry it.
            </p>
          </div>
        </div>
      </section>

      {/* Registration & budgeting at a glance */}
      <section id="registration" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Registration card */}
            <div className="bg-white rounded-2xl border-t-4 border-primary-600 shadow-lg p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-primary-50 rounded-xl">
                  <BadgeCheck className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Registration & Legal Status
                </h2>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                A duly registered NGO operating under Kenyan law.
              </p>
              <dl className="text-sm">
                {[
                  ['Organization', 'Girl Pride Africa Kenya (GPAK Girls)'],
                  ['Registration No.', 'OP.218/051/19-189/11666'],
                  ['Registered with', 'NGOs Co-ordination Board, Kenya'],
                  ['Legal basis', 'Section 10, NGO Co-ordination Act'],
                  ['Registered since', '30 April 2020'],
                  ['Community work since', '2018'],
                  ['Headquarters', 'Homa Bay Town, Homa Bay County'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 py-2.5 border-b border-gray-100 last:border-b-0"
                  >
                    <dt className="text-gray-500">{label}</dt>
                    <dd className="font-semibold text-gray-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-gray-500 mt-4">
                The registration certificate is shared with partners and funders as part of due
                diligence.
              </p>
            </div>

            {/* Budgeting card */}
            <div className="bg-white rounded-2xl border-t-4 border-secondary-600 shadow-lg p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-secondary-50 rounded-xl">
                  <PieChart className="h-6 w-6 text-secondary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Programme-First Budgeting</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                How our current programme budgets are structured.
              </p>
              <div className="flex items-center gap-8">
                <div
                  className="relative w-36 h-36 rounded-full flex-shrink-0"
                  style={{
                    background:
                      'conic-gradient(#d1253d 0% 85%, #f59e0b 85% 93%, #d1d5db 93% 100%)',
                  }}
                  role="img"
                  aria-label="Budget structure: 85 percent programme delivery, 8 percent operations, 7 percent administration"
                >
                  <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">85%</span>
                    <span className="text-[11px] text-gray-500">Programmes</span>
                  </div>
                </div>
                <ul className="space-y-4 text-sm">
                  {[
                    ['bg-primary-600', '85%', 'Programme delivery'],
                    ['bg-accent-500', '8%', 'Operations'],
                    ['bg-gray-300', '7%', 'Administration & indirect (capped)'],
                  ].map(([dot, pct, label]) => (
                    <li key={label} className="flex items-start gap-2.5">
                      <span className={`w-3 h-3 rounded-sm mt-1 flex-shrink-0 ${dot}`}></span>
                      <span>
                        <span className="font-bold text-gray-900">{pct}</span>{' '}
                        <span className="text-gray-600">{label}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-500 mt-6">
                Every programme budget includes an independent audit line, and financial reports
                are shared with every funding partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section id="safeguarding" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Child Safeguarding & PSEA
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Keeping girls safe comes before every other objective. Our safeguarding framework
              covers everyone who works with us:
            </p>
            <ul className="space-y-3">
              {safeguardingPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data protection */}
      <section id="data-protection" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                <LockKeyhole className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Data Protection & Confidentiality
              </h2>
            </div>
            <ul className="space-y-3">
              {dataPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              See also our{' '}
              <Link href="/privacy" className="text-primary-600 font-medium hover:underline">
                website privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Financial accountability */}
      <section id="financial" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Landmark className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Financial Accountability
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a small organization, and we manage money as if we were a large one:
            </p>
            <ul className="space-y-3">
              {financePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <FileCheck className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Scale className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Governance</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Girl Pride Africa Kenya is a registered organization in Kenya. An advisory committee
              provides oversight of strategy, finances, and safeguarding, separate from day-to-day
              management. Conflict-of-interest, anti-fraud, and whistleblowing safeguards apply to
              leadership and staff alike.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Registration certificates, governing documents, committee records, policies, and
              financial statements are organized in a due diligence pack and shared with partners
              and funders on request; tell us what you need and we will provide it.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Request due diligence documents
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complaints */}
      <section id="complaints" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-primary-100 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageSquareWarning className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Raise a Concern</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Anyone (a girl in our programmes, a family member, a community member, a partner, or
              a member of staff) can raise a concern about our work or the conduct of anyone
              associated with GPAK Girls. Concerns are handled confidentially, taken seriously, and
              reported to authorities where required by law. Raising a concern will never affect
              the support a girl receives.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:info@gpakgirls.org"
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-primary-300 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600 text-sm">info@gpakgirls.org</div>
                </div>
              </a>
              <a
                href="tel:+254725737867"
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-primary-300 transition-colors"
              >
                <Phone className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Phone / WhatsApp</div>
                  <div className="text-gray-600 text-sm">+254 725 737 867</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
