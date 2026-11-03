import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import MapEmbed from '@/components/MapEmbed'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Location',
    details: ['Homa Bay Town, Homa Bay County', 'Kenya'],
  },
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    details: ['+254 725 737 867', 'Mon–Fri: 8:00 AM – 5:00 PM'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@gpakgirls.org', 'We aim to respond within 24 hours'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM'],
  },
]

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Girl Pride Africa Kenya (GPAK Girls) in Homa Bay Town, Kenya. Call or WhatsApp +254 725 737 867 or email info@gpakgirls.org for help, partnerships, volunteering or donations.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Questions about our work, partnership enquiries, due diligence requests, or a girl
              who needs support; we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-full mb-3 sm:mb-4">
                  <info.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-gray-600 mb-1 last:mb-0">
                    {detail === '+254 725 737 867' ? (
                      <a href="tel:+254725737867" className="text-primary-700 font-medium hover:underline">
                        {detail}
                      </a>
                    ) : detail === 'info@gpakgirls.org' ? (
                      <a href="mailto:info@gpakgirls.org" className="text-primary-700 font-medium hover:underline">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Urgent help */}
          <div className="max-w-4xl mx-auto mb-8 bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-300 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Help Urgently?</h3>
            <p className="text-gray-600 mb-4">
              If you are a teen mother or pregnant girl who needs support, or you know one, call
              or WhatsApp us. If we cannot answer immediately, we will call you back.
            </p>
            <p className="text-3xl font-bold text-secondary-700">
              <a href="tel:+254725737867" className="hover:underline">+254 725 737 867</a>
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+254725737867" className="btn-primary px-6 py-3">
                Call now
              </a>
              <a
                href="https://wa.me/254725737867"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Safeguarding note */}
          <div className="max-w-4xl mx-auto mb-16 flex items-start gap-3 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <ShieldCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Safeguarding concerns</strong> about our work or anyone associated with GPAK
              Girls are handled confidentially and taken seriously.{' '}
              <Link href="/accountability#complaints" className="text-primary-600 hover:underline">
                See how to raise a concern
              </Link>
              .
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map: loads Google Maps only when asked, so the page stays fast on mobile data */}
      <MapEmbed />
    </main>
  )
}
