import { Metadata } from 'next'
import Image from 'next/image'
import { HandHeart, CalendarRange, Users } from 'lucide-react'

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
    </main>
  )
}
