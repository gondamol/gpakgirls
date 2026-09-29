import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Cta = { label: string; href: string; external?: boolean }

type SupportFeatureProps = {
  id: string
  title: string
  image: string
  imageAlt: string
  reverse?: boolean
  highlight?: string
  bullets?: string[]
  cta?: Cta
  children: React.ReactNode
}

// One image-and-text row on the Ways to Support page.
export default function SupportFeature({
  id,
  title,
  image,
  imageAlt,
  reverse = false,
  highlight,
  bullets,
  cta,
  children,
}: SupportFeatureProps) {
  return (
    <div id={id} className="scroll-mt-28 max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
      <div className={reverse ? 'lg:order-2' : ''}>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">{children}</div>
        {highlight && (
          <p className="mt-6 border-l-4 border-accent-500 bg-accent-50 rounded-r-lg px-5 py-4 text-gray-800 font-medium leading-relaxed">
            {highlight}
          </p>
        )}
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {cta &&
          (cta.external ? (
            <a
              href={cta.href}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="mt-8 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {cta.label}
              <ArrowRight className="h-5 w-5" />
            </a>
          ) : (
            <Link
              href={cta.href}
              className="mt-8 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {cta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
          ))}
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </div>
  )
}
