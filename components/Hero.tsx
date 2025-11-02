import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Registered NGO • Empowering Teen Mothers Since 2018</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-tight">
              Empowering Teen Mothers to{' '}
              <span className="text-primary-600">Rebuild Their Lives</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Girl Pride Africa Kenya provides comprehensive support to teen mothers and pregnant teens through education, vocational training, mentorship, and counseling—helping them access economic and educational opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/donate"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/programs"
                className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center w-full sm:w-auto"
              >
                Our Programs
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Registered NGO</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>500+ Girls Supported</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>85% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg"
                alt="Young Black African mother with her child"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Girls in Vocational Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

