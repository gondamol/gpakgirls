import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  HandHeart,
  CalendarRange,
  Users,
  CheckCircle,
  Footprints,
  Feather,
  ArrowRight,
  MessageCircle,
  Mail,
  ChevronDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Giving Circles - Give Together, Plan Together',
  description:
    'Join a GPAK Girls giving circle. Steady annual and monthly gifts let us plan the whole journey for adolescent mothers in western Kenya, with field letters and results from our programme records.',
}

const reasons = [
  {
    icon: HandHeart,
    title: 'Your impact',
    text: 'Regular gifts carry a young mother through the months it takes to heal, return to school or training, stay in health care, and rebuild ties with her family.',
  },
  {
    icon: CalendarRange,
    title: 'Our planning',
    text: 'Predictable income lets us commit to a girl for the whole road, keep mentor mothers visiting, and plan each cohort a year ahead instead of month to month.',
  },
  {
    icon: Users,
    title: 'Your community',
    text: 'Circle members in Kenya and abroad hear from the field together, meet our team, and see each year what their gifts funded, side by side.',
  },
]

// Circle names are Dholuo, the language of the Homa Bay communities we serve.
const circles = [
  {
    name: 'Rieko Circle',
    meaning: 'Rieko means “wisdom” in Dholuo',
    amount: 'USD 10,000+',
    period: 'a year',
    text: 'Rieko members make multi-year planning possible: staff who stay, mental health screening and referral, and the monitoring that tells us what is working and what is not.',
    benefits: [
      'Everything in the Teko Circle',
      'An invitation to visit the programme in Homa Bay, arranged under our safeguarding policy',
      'A seat at our annual learning review, online',
    ],
  },
  {
    name: 'Teko Circle',
    meaning: 'Teko means “strength” in Dholuo',
    amount: 'USD 5,000 – 9,999',
    period: 'a year',
    text: 'Teko members give us the strength to plan whole cohorts: peer support circles, the mentor mothers who lead them, and the clinic follow-up that keeps girls and babies in care.',
    benefits: [
      'Everything in the Kinda Circle',
      'Early sight of our yearly monitoring and learning results',
      'A second call each year with our Director and programme team',
    ],
  },
  {
    name: 'Kinda Circle',
    meaning: 'Kinda means “perseverance” in Dholuo',
    amount: 'USD 1,000 – 4,999',
    period: 'a year',
    text: 'Kinda members carry the long middle of a girl’s journey: school fees and childcare, vocational training, and the months of support it takes for a fresh start to hold.',
    benefits: [
      'Everything in the Hera Circle',
      'A yearly video call with our Director and programme team',
    ],
  },
  {
    name: 'Hera Circle',
    meaning: 'Hera means “love” in Dholuo',
    amount: 'USD 250 – 999',
    period: 'a year',
    text: 'Hera members are the warmth behind the work: the steady givers whose gifts keep mentor mothers knocking on doors, week in, week out.',
    benefits: [
      'A receipt for every gift',
      'A quarterly letter from the field',
      'A yearly circle summary built from our programme records',
      'Thanks by name in the summary, or anonymity if you prefer',
    ],
  },
]

const faqs = [
  {
    q: 'Will I sponsor a particular girl?',
    a: 'No. Circles are pooled: members walk with all the girls in the programme, never one named child, because a girl’s privacy and dignity are not for sale. You meet the girls through their own consented words, with names changed unless a woman chooses otherwise.',
  },
  {
    q: 'Can I give in instalments?',
    a: 'Yes. Your circle is set by what you give over twelve months, whether that arrives as one gift, quarterly transfers, or a monthly Walk With Her standing order.',
  },
  {
    q: 'How do I pay from outside Kenya?',
    a: 'By bank transfer to the organization’s account, or through WorldRemit, Sendwave or Taptap Send straight to our M-Pesa line. Message us and we send the details and confirm every gift with a receipt.',
  },
  {
    q: 'Is my gift tax-deductible?',
    a: 'Girl Pride Africa Kenya is registered with the NGOs Co-ordination Board of Kenya. We cannot promise tax relief in other countries. If it matters to you, ask us and we will share our registration documents so you can check with your adviser.',
  },
  {
    q: 'Can I stay anonymous?',
    a: 'Of course. We only thank members by name in the yearly summary when they tell us they would like that.',
  },
  {
    q: 'Can I stop or change my circle?',
    a: 'Any time, with one message. No questions, no pressure.',
  },
]

const JOIN_WHATSAPP =`https://wa.me/254725737867?text=${encodeURIComponent(
  'Hello GPAK Girls, I would like to join a giving circle. The circle I have in mind is: '
)}`

const JOIN_EMAIL = `mailto:info@gpakgirls.org?subject=${encodeURIComponent(
  'Joining a giving circle'
)}&body=${encodeURIComponent(
  'Hello GPAK Girls,\n\nI would like to join the following giving circle: \n\nMy name: \nMy country: \nHow I would like to give (M-Pesa / bank transfer / diaspora app): \nMay we thank you by name in the yearly summary? (yes / no): '
)}`

export default function GivingCirclesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/annie-spratt-yrzBgqapG1I-unsplash.jpg"
          alt="Young mothers walking together"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-700/60" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Giving Circles</h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Our circles of steady givers are the ground we stand on. They let us promise a
              young mother the whole journey, not just the first step.
            </p>
          </div>
        </div>
      </section>

      {/* Why circles */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="section-subheading text-center mx-auto mb-12">
              When you give every year or every month, you invest in girls who have been pushed
              out of school and home, and in the children they are raising. The change carries
              into their families and into the next generation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
                    <reason.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Circles */}
      <section id="circles" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center">Our Circles</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              Each circle is named in Dholuo, the language of the communities we serve. Your
              circle is set by what you give in a year, and monthly gifts count toward it.
            </p>
            <div className="space-y-6">
              {circles.map((circle) => (
                <article
                  key={circle.name}
                  id={circle.name.split(' ')[0].toLowerCase()}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 grid md:grid-cols-5 gap-6 md:gap-10"
                >
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {circle.name}
                    </h3>
                    <p className="text-sm italic text-gray-500 mb-4">{circle.meaning}</p>
                    <div className="text-2xl font-bold text-primary-600">{circle.amount}</div>
                    <div className="text-sm text-gray-500">{circle.period}</div>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-gray-700 leading-relaxed mb-5">{circle.text}</p>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                      Members receive
                    </h4>
                    <ul className="space-y-2">
                      {circle.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                          <CheckCircle className="h-4 w-4 text-secondary-600 flex-shrink-0 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">
              Amounts are shown in US dollars. Give in Kenya shillings or euros if you prefer; we
              use the equivalent on the day of your gift.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly and legacy routes */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-primary-600 text-white p-8 flex flex-col">
              <Footprints className="h-10 w-10 mb-4" />
              <h2 className="text-2xl font-bold mb-1">Walk With Her</h2>
              <p className="text-sm text-primary-100 mb-4">Monthly giving, from KES 1,000 / EUR 10</p>
              <p className="text-primary-50 leading-relaxed mb-6">
                Rather give a little every month? Walk With Her members fund one girl-month of the
                journey at a time. Every monthly gift counts toward your annual circle, so
                USD 30 a month brings you into the Hera Circle.
              </p>
              <Link
                href="/walk-with-her"
                className="mt-auto inline-flex items-center gap-2 self-start bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Give monthly
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div id="geno" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8 flex flex-col">
              <Feather className="h-10 w-10 text-secondary-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Geno Legacy Circle</h2>
              <p className="text-sm italic text-gray-500 mb-4">Geno means “hope” and “trust” in Dholuo</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For people who include GPAK Girls in their will. A legacy gift is trust placed in
                girls not yet born, and we honour it by name in our yearly summary, or quietly if
                you prefer.
              </p>
              <Link
                href="/planned-giving"
                className="mt-auto inline-flex items-center gap-2 text-secondary-600 font-semibold hover:text-secondary-700 transition-colors"
              >
                About planned giving
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="questions" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-10">Questions Members Ask</h2>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section id="join" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-t-4 border-primary-600 shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Join a Circle</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tell us the circle you would like to join and how you prefer to give: M-Pesa, bank
              transfer, or a diaspora app such as WorldRemit, Sendwave or Taptap Send. We reply
              within a day with the details and welcome you with your first field letter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={JOIN_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Join by WhatsApp
              </a>
              <a href={JOIN_EMAIL} className="btn-outline inline-flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Email to join
              </a>
            </div>
            <p className="text-sm text-gray-500">
              +254 725 737 867 · info@gpakgirls.org · Gifts go to the organization’s account,
              never personal accounts.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
