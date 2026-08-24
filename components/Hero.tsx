import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-primary-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Community-rooted in western Kenya since 2018</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-tight">
              A Young Mother’s Story{' '}
              <span className="text-primary-600">Doesn’t End at Pregnancy</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Girl Pride Africa Kenya walks alongside adolescent mothers and pregnant girls aged
              13–23 around Lake Victoria, connecting psychosocial support, HIV and maternal
              health care, education, livelihoods, and family strengthening into one plan for each
              girl.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/programs"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                How We Work
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/donate"
                className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center w-full sm:w-auto"
              >
                Support a Girl
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Registered organization</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>500+ girls supported since 2018</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>4 counties: Homa Bay, Siaya, Kisumu, Migori</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-sm relative">
              <Image
                src="/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg"
                alt="A young mother holding her child"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
