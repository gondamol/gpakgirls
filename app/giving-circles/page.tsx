import { Metadata } from 'next'
import Image from 'next/image'
import { HandHeart, CalendarRange, Users, CheckCircle } from 'lucide-react'

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
    </main>
  )
}
