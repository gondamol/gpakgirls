import { Metadata } from 'next'
import Image from 'next/image'
import { ScrollText, Shield, Landmark, Flower2 } from 'lucide-react'
import CopyButton from '@/components/CopyButton'

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

const LEGAL_NAME =
  'Girl Pride Africa Kenya, registered with the NGOs Co-ordination Board of Kenya under Registration No. OP.218/051/19-189/11666, of Homa Bay Town, Kenya'

const bequestWording = [
  {
    label: 'A share of what remains',
    text: `I give ___ percent of the residue of my estate to ${LEGAL_NAME}, for its general purposes, and I declare that a receipt from its authorised officer shall be a full discharge to my executors.`,
  },
  {
    label: 'A fixed sum',
    text: `I give the sum of ___ (in words: ___) to ${LEGAL_NAME}, for its general purposes, and I declare that a receipt from its authorised officer shall be a full discharge to my executors.`,
  },
]

const orgDetails = [
  { term: 'Legal name', value: 'Girl Pride Africa Kenya (GPAK Girls)' },
  { term: 'Registered with', value: 'NGOs Co-ordination Board, Kenya, April 2020' },
  { term: 'Registration number', value: 'OP.218/051/19-189/11666' },
  { term: 'Address', value: 'Homa Bay Town, Homa Bay County, Kenya' },
  { term: 'Contact', value: 'info@gpakgirls.org · +254 725 737 867' },
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

      {/* Wording for your will */}
      <section id="wording" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <h2 className="section-heading">Wording for Your Will</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your advocate or solicitor can use this wording, adapted to the law where you
                live. A gift for our general purposes lets us put it where girls need it most when
                the time comes.
              </p>
              <div className="space-y-4">
                {bequestWording.map((item) => (
                  <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h3 className="text-base font-semibold text-gray-900">{item.label}</h3>
                      <CopyButton text={item.text} />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-mono bg-gray-50 rounded-lg p-4">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 lg:sticky lg:top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Our details for your adviser</h2>
                <dl className="space-y-4 text-sm">
                  {orgDetails.map((d) => (
                    <div key={d.term}>
                      <dt className="font-semibold text-gray-500 uppercase tracking-wide text-xs mb-1">
                        {d.term}
                      </dt>
                      <dd className="text-gray-900">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
