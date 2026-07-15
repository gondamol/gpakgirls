import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Footprints,
  Heart,
  Mail,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  CalendarHeart,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Walk With Her - Monthly Giving Circle',
  description:
    'Join the Walk With Her circle: your monthly gift funds one girl-month of mentorship, clinic transport, and peer support for adolescent mothers in western Kenya.',
}

const tiers = [
  {
    name: 'Companion',
    amount: 'KES 1,000 · EUR 10 · USD 12',
    period: 'per month',
    what: 'Funds one girl-month of the journey: fortnightly mentor visits, clinic transport, and her place in a peer support group.',
    highlight: false,
  },
  {
    name: 'Guide',
    amount: 'KES 2,500 · EUR 25 · USD 30',
    period: 'per month',
    what: 'Adds counselling sessions and childcare hours that keep a young mother in class or in training.',
    highlight: true,
  },
  {
    name: 'Champion',
    amount: 'KES 6,000 · EUR 60 · USD 70',
    period: 'per month',
    what: 'Carries five girl-months every month, from first knock on our door to planned graduation.',
    highlight: false,
  },
]

const steps = [
  {
    icon: Heart,
    title: '1. Join the circle',
    text: 'Email or WhatsApp us and we set you up with an M-Pesa standing order or a simple monthly transfer. Online card payments are being finalized.',
  },
  {
    icon: Mail,
    title: '2. Walk alongside her',
    text: 'Every quarter you receive a short letter from the field, built from consented stories: what your circle funded, in the girls’ own words.',
  },
  {
    icon: CalendarHeart,
    title: '3. See the year add up',
    text: 'Once a year we send the circle a summary of what all members funded together, with figures from our programme records.',
  },
]

export default function WalkWithHerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Footprints className="h-14 w-14 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Walk With Her</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A monthly giving circle for people who want to stay for the whole journey. Your gift
              funds the steady, unglamorous things that change a young mother’s life: a mentor who
              keeps showing up, transport to the clinic, a seat in a circle of girls who
              understand.
            </p>
          </div>
        </div>
      </section>

      {/* Why monthly */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading mb-6">Why Monthly Matters</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  A girl’s journey with us takes months, not moments: healing, returning to school
                  or training, staying in health care, rebuilding family ties. One-off gifts help;
                  steady gifts let us promise her the whole road.
                </p>
                <p>
                  The circle is pooled. Members walk with all the girls in the programme, never
                  sponsoring one named child, because a girl’s privacy and dignity are not for
                  sale. You will know the girls through their own consented words, not through an
                  obligation placed on any one of them.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/annie-spratt-yrzBgqapG1I-unsplash.jpg"
                alt="Young mothers walking together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-4">Choose Your Pace</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              Every level funds real, costed items from our programme budget.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 flex flex-col ${
                    tier.highlight
                      ? 'bg-primary-600 text-white shadow-xl scale-[1.02]'
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      tier.highlight ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div
                    className={`text-lg font-semibold ${
                      tier.highlight ? 'text-primary-100' : 'text-primary-600'
                    }`}
                  >
                    {tier.amount}
                  </div>
                  <div
                    className={`text-sm mb-4 ${
                      tier.highlight ? 'text-primary-200' : 'text-gray-500'
                    }`}
                  >
                    {tier.period}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      tier.highlight ? 'text-primary-50' : 'text-gray-600'
                    }`}
                  >
                    {tier.what}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">
              Any amount, monthly, makes you a member. Give what walks comfortably with you.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.title} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-full mb-4">
                    <step.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-t-4 border-primary-600 shadow-lg p-8 md:p-12 text-center">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Join the Circle</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Give monthly by card or PayPal right now (tick “Make this a monthly donation” on the
              PayPal page), or message us and we set up your M-Pesa standing order within a day.
              Either way, we welcome you with your first field letter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://www.paypal.com/donate/?business=nichodemuswerre%40gmail.com&item_name=Walk%20With%20Her%20monthly%20circle%20-%20GPAK%20Girls&currency_code=USD&amount=12"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Join by Card / PayPal
              </a>
              <a
                href="https://wa.me/254725737867?text=Hello%20GPAK%20Girls%2C%20I%20would%20like%20to%20join%20the%20Walk%20With%20Her%20monthly%20circle%20by%20M-Pesa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                Join by M-Pesa (WhatsApp)
              </a>
              <a
                href="mailto:info@gpakgirls.org?subject=Join%20Walk%20With%20Her&body=Hello%20GPAK%20Girls%2C%0A%0AI%20would%20like%20to%20join%20the%20Walk%20With%20Her%20circle%20at%20the%20following%20monthly%20level%3A%20%0A%0AMy%20name%3A%20%0AMy%20country%3A%20%0APreferred%20payment%20method%20(M-Pesa%20%2F%20bank%20transfer%20%2F%20PayPal)%3A%20"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
            <p className="text-sm text-gray-500">
              +254 725 737 867 · info@gpakgirls.org · You will receive a receipt for every gift.
            </p>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl border border-gray-200 p-8">
              <ShieldCheck className="h-12 w-12 text-primary-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Our Promises to Members</h2>
                <ul className="space-y-2">
                  {[
                    'Your gifts go into the organizational account, managed under CPA-led financial controls, and you receive a receipt for every payment.',
                    'No named-child sponsorship, ever: stories reach you with consent, names changed unless a woman chooses otherwise.',
                    'A quarterly field letter and an annual circle summary drawn from our programme records.',
                    'Cancel any time with one message; no questions, no pressure.',
                  ].map((promise) => (
                    <li key={promise} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-secondary-600 flex-shrink-0 mt-1" />
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/accountability"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm mt-4"
                >
                  How we stay accountable
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
