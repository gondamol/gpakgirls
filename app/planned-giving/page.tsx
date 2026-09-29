import { Metadata } from 'next'
import Image from 'next/image'
import { ScrollText, Shield, Landmark, Flower2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Planned Giving - A Gift in Your Will',
  description:
    'Leave a gift to GPAK Girls in your will, name us as a beneficiary, or give through a donor-advised fund, and help adolescent mothers in western Kenya for years to come.',
}

const ways = [
  {
    icon: ScrollText,
    title: 'A gift in your will',
    text: 'Leave a fixed sum, a share of what remains once family and friends are provided for, or a specific asset such as land, livestock or property. A share of what remains keeps its value as prices change.',
  },
  {
    icon: Shield,
    title: 'Naming us as a beneficiary',
    text: 'Some life insurance policies, pension and savings schemes let you name a registered organization as a beneficiary, alongside or after the people you love. Your provider can tell you what your policy allows.',
  },
  {
    icon: Landmark,
    title: 'Through a donor-advised fund or foundation',
    text: 'If you give through a donor-advised fund or a family foundation, you can recommend a grant to GPAK Girls, now or in your planning. Many sponsors can grant to organizations outside their country after their own checks; our due diligence pack is ready for them.',
  },
  {
    icon: Flower2,
    title: 'A gift in memory',
    text: 'Families sometimes ask for gifts to GPAK Girls in place of flowers, or set aside part of a funeral harambee. We send the family a note of thanks and tell them what the gifts made possible.',
  },
]

export default function PlannedGivingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg"
          alt="A young mother holding her child"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-800/80 to-secondary-700/50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-300 mb-4">
              Make a gift in your will
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Planned Giving</h1>
            <p className="text-xl text-secondary-50 leading-relaxed">
              A planned gift carries your care for girls and young mothers beyond your own
              lifetime, to daughters and sons who are not yet born.
            </p>
          </div>
        </div>
      </section>

      {/* Intro and ways */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="section-subheading text-center mx-auto mb-12">
              Planning a gift does not need to be complicated, but it does need some thought.
              Here are the ways people choose to remember GPAK Girls. Whichever you choose, the
              people you love come first.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {ways.map((way) => (
                <div key={way.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-50 rounded-xl mb-4">
                    <way.icon className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{way.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{way.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
