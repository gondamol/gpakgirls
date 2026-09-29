import Image from 'next/image'

const partners = [
  { name: 'Christ Greater Exploits Church (CGEC)', logo: '/images/partners/cgec.jpg' },
  { name: 'Lake Region Community Development Initiative (LARCOD)', logo: '/images/partners/larcod.png' },
  { name: 'Devine Women Foundation Inc', logo: '/images/partners/devine-women-foundation.jpg' },
  { name: 'Doro Mabaan Community Primary School', logo: '/images/partners/doro-mabaan-school.jpg' },
]

// The set repeats so the scrolling track never shows a gap; copies after the first are hidden
// from screen readers.
const COPIES = 4

export default function PartnerLogos() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="partners-heading"
          className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8"
        >
          Partners who have walked with us
        </h2>
      </div>
      <div className="partner-marquee relative overflow-hidden">
        <ul className="partner-track flex w-max items-center">
          {Array.from({ length: COPIES }).flatMap((_, copy) =>
            partners.map((p) => (
              <li
                key={`${copy}-${p.name}`}
                aria-hidden={copy > 0 ? true : undefined}
                className="flex-shrink-0 px-8 md:px-12"
              >
                <Image
                  src={p.logo}
                  alt={copy === 0 ? p.name : ''}
                  title={p.name}
                  width={160}
                  height={160}
                  loading="eager"
                  className="h-20 md:h-24 w-auto object-contain mix-blend-multiply"
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  )
}
