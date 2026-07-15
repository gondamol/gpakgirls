import { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart,
  Shield,
  CheckCircle,
  Smartphone,
  Landmark,
  CreditCard,
  Handshake,
  ArrowRight,
  Mail,
  Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate - Support a Young Mother’s Future',
  description:
    'Donate to GPAK Girls by card, PayPal, M-Pesa, or bank transfer. Your gift funds counselling, school re-entry, health referrals, and livelihood training for adolescent mothers in western Kenya.',
}

const PAYPAL_BASE =
  'https://www.paypal.com/donate/?business=nichodemuswerre%40gmail.com&item_name=Donation%20to%20Girl%20Pride%20Africa%20Kenya%20(GPAK%20Girls)&currency_code=USD'

const paypalAmounts = [
  { amount: 25, note: 'School supplies for two girls' },
  { amount: 50, note: 'A month of school fees and childcare' },
  { amount: 100, note: 'Counselling and clinic referrals' },
  { amount: 250, note: 'Vocational training with starter kit' },
]

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
              Give by card, PayPal, M-Pesa, or bank transfer. Every shilling goes toward
              counselling, health referrals, school re-entry, livelihoods, and family support for
              adolescent mothers in western Kenya.
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
                <span>Registered NGO since 2020</span>
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

            {/* Ways to give */}
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Give Now</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Three ways, all direct. Whichever you choose, you will receive confirmation and a
              receipt.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-16">
              {/* Card / PayPal */}
              <div className="bg-white rounded-2xl border-t-4 border-primary-600 shadow-lg p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-primary-50 rounded-xl">
                    <CreditCard className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Card or PayPal</h3>
                </div>
                <p className="text-sm text-gray-500 mb-5">
                  For international donors. No PayPal account needed; cards work as guest checkout.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {paypalAmounts.map((option) => (
                    <a
                      key={option.amount}
                      href={`${PAYPAL_BASE}&amount=${option.amount}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 rounded-lg p-3 text-center transition-colors"
                    >
                      <span className="block text-lg font-bold text-gray-900">
                        ${option.amount}
                      </span>
                      <span className="block text-[11px] text-gray-500 leading-tight">
                        {option.note}
                      </span>
                    </a>
                  ))}
                </div>
                <a
                  href={PAYPAL_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center mb-3"
                >
                  Donate Any Amount
                </a>
                <p className="text-xs text-gray-500 mt-auto">
                  Tick “Make this a monthly donation” on the PayPal page to give monthly, or join{' '}
                  <Link href="/walk-with-her" className="text-primary-600 hover:underline">
                    Walk With Her
                  </Link>
                  .
                </p>
              </div>

              {/* M-Pesa */}
              <div className="bg-white rounded-2xl border-t-4 border-secondary-600 shadow-lg p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-secondary-50 rounded-xl">
                    <Smartphone className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">M-Pesa</h3>
                </div>
                <p className="text-sm text-gray-500 mb-5">For donors in Kenya. Takes a minute.</p>
                <ol className="space-y-2.5 text-sm text-gray-700 mb-5">
                  {[
                    'Open M-Pesa and choose Send Money',
                    'Enter 0725 737 867',
                    'Enter your amount and send',
                    'You receive an M-Pesa confirmation instantly',
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary-100 text-secondary-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="bg-secondary-50 rounded-xl p-4 text-center mb-3">
                  <div className="text-2xl font-bold text-secondary-700 tracking-wide">
                    0725 737 867
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Girl Pride Africa Kenya donations line
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-auto">
                  <Globe className="h-3.5 w-3.5 inline mr-1" />
                  In the diaspora? WorldRemit, Sendwave, and Taptap Send deliver straight to this
                  M-Pesa number.
                </p>
              </div>

              {/* Bank */}
              <div className="bg-white rounded-2xl border-t-4 border-accent-500 shadow-lg p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 bg-accent-50 rounded-xl">
                    <Landmark className="h-6 w-6 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
                </div>
                <p className="text-sm text-gray-500 mb-5">
                  Best for larger gifts. Funds go to the organization’s account, never personal
                  accounts.
                </p>
                <p className="text-sm text-gray-700 mb-5">
                  Message us and we send the account details right back, then confirm your transfer
                  with a receipt.
                </p>
                <a
                  href="https://wa.me/254725737867?text=Hello%20GPAK%20Girls%2C%20please%20send%20me%20the%20bank%20transfer%20details%20for%20a%20donation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center mb-2"
                >
                  WhatsApp for Details
                </a>
                <a
                  href="mailto:info@gpakgirls.org?subject=Bank%20transfer%20donation&body=Hello%20GPAK%20Girls%2C%0A%0APlease%20send%20me%20the%20bank%20transfer%20details%20for%20a%20donation.%0A%0AName%3A%20%0ACountry%3A%20"
                  className="btn-outline w-full text-center inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email for Details
                </a>
                <p className="text-xs text-gray-500 mt-auto pt-3">
                  In-kind gifts (sewing machines, supplies, baby essentials) are welcome through
                  the same channels.
                </p>
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

            {/* Walk With Her promo */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Rather walk the whole journey with her?
                </h2>
                <p className="text-primary-100 leading-relaxed">
                  Join Walk With Her, our monthly giving circle. From KES 1,000 / EUR 10 a month,
                  you fund the steady support that carries a young mother from her first day with
                  us to graduation, with a quarterly letter from the field.
                </p>
              </div>
              <Link
                href="/walk-with-her"
                className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                Join the Circle
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Accountability strip */}
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl border border-gray-200 p-8">
              <Shield className="h-14 w-14 text-primary-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Where the money goes</h2>
                <p className="text-gray-600 leading-relaxed">
                  Donations fund direct program delivery first: counselling, school fees,
                  referrals, training, and family support. Funds are managed under documented
                  financial procedures by our CPA-led finance function, and accounted for to every
                  partner.{' '}
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
