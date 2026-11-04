import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Mail, ArrowRight, Share2 } from 'lucide-react'
import AdsConversion from '@/components/AdsConversion'
import { GOOGLE_ADS_SEND_TO } from '@/lib/donation'

export const metadata: Metadata = {
  alternates: { canonical: '/donate/thank-you' },
  title: 'Thank You for Your Gift',
  description: 'Thank you for supporting adolescent mothers in western Kenya with GPAK Girls.',
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  return (
    <main>
      <AdsConversion sendTo={GOOGLE_ADS_SEND_TO} />
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank you for walking with her</h1>
            <p className="text-xl text-primary-100">
              Your gift goes toward counselling, health referrals, school re-entry, livelihoods,
              and family support for adolescent mothers in western Kenya.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <Mail className="h-8 w-8 text-primary-600 mb-3" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Your receipt</h2>
              <p className="text-gray-600 leading-relaxed">
                PayPal has emailed you a receipt. If you need an official receipt from GPAK Girls,
                write to{' '}
                <a href="mailto:info@gpakgirls.org" className="text-primary-600 font-medium hover:underline">
                  info@gpakgirls.org
                </a>
                .
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <Share2 className="h-8 w-8 text-secondary-600 mb-3" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Tell a friend</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                One message from you can bring in another supporter.
              </p>
              <Link
                href="/get-involved#awareness"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
              >
                Share GPAK Girls
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/stories" className="btn-primary inline-flex items-center gap-2">
              Read the girls’ stories
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
