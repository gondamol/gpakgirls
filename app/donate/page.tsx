import { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart,
  Shield,
  CheckCircle,
  Smartphone,
  Landmark,
  Gift,
  Handshake,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate - Support a Young Mother’s Future',
  description:
    'Support adolescent mothers and pregnant girls in western Kenya. Your donation funds counselling, school re-entry, health referrals, and livelihood training.',
}

const impactLevels = [
  {
    amount: '$25',
    title: 'School Supplies',
    impact: 'Provides school supplies and materials for two girls returning to class',
  },
  {
    amount: '$50',
    title: 'A Month in School',
    impact: 'Covers one month of school fees and childcare so a young mother can attend class',
  },
  {
    amount: '$100',
    title: 'Health & Counselling',
    impact: 'Supports counselling sessions and accompanied health referrals for a girl and her baby',
  },
  {
    amount: '$250',
    title: 'A Trade of Her Own',
    impact: 'Takes one young mother through vocational training with a starter kit at graduation',
  },
]

const givingChannels = [
  {
    icon: Smartphone,
    name: 'M-Pesa',
    description:
      'For donors in Kenya, we accept M-Pesa. Contact us and we will share the official payment details directly.',
  },
  {
    icon: Landmark,
    name: 'Bank Transfer',
    description:
      'Donations are received into the organization’s bank account — never personal accounts. Contact us for transfer details and a receipt.',
  },
  {
    icon: Gift,
    name: 'In-Kind Support',
    description:
      'Sewing machines, hairdressing equipment, school supplies, and baby essentials go straight into our programs.',
  },
]

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Invest in a Young Mother’s Future
            </h1>
            <p className="text-xl text-primary-100">
              Every shilling goes toward counselling, health referrals, school re-entry,
              livelihoods, and family support for adolescent mothers in western Kenya.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Registered organization</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>CPA-led financial management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Receipt for every donation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Financial records shared with partners</span>
              </div>
            </div>

            {/* What your gift does */}
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              What Your Gift Does
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {impactLevels.map((level) => (
                <div
                  key={level.amount}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-1">{level.amount}</div>
                  <div className="font-semibold text-gray-900 mb-3">{level.title}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{level.impact}</p>
                </div>
              ))}
            </div>

            {/* How to give */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">How to Give</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                We are finalizing secure online card payments. In the meantime, giving is simple
                and direct — and you will always receive confirmation and a receipt.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {givingChannels.map((channel) => (
                  <div key={channel.name} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg mb-4">
                      <channel.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{channel.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Contact Us to Give
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="text-sm text-gray-500 mt-4">
                  Email{' '}
                  <a href="mailto:info@gpakgirls.org" className="text-primary-600 hover:underline">
                    info@gpakgirls.org
                  </a>{' '}
                  or call/WhatsApp +254 725 737 867
                </p>
              </div>
            </div>

            {/* Accountability strip */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl border border-gray-200 p-8">
              <Shield className="h-14 w-14 text-primary-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Where the money goes
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Donations fund direct program delivery first: counselling, school fees,
                  referrals, training, and family support. Funds are received into the
                  organization’s account, managed under documented financial procedures by our
                  CPA-led finance function, and accounted for to every partner.{' '}
                  <Link
                    href="/accountability#financial"
                    className="text-primary-600 font-medium hover:underline"
                  >
                    Read about our financial accountability →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Funding at Scale?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              If you represent a foundation, NGO, or institutional funder, we would be glad to
              share our programme documentation, results data, budgets, and due diligence pack.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Start a partnership conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
