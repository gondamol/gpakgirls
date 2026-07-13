'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react'

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

const inquiryTypes = [
  'General Inquiry',
  'Partnership / Funding',
  'Due Diligence Request',
  'Program Information',
  'Volunteer Opportunity',
  'Donation Question',
  'Media/Press Request',
  'Help Request (Teen Mother/Pregnant Girl)',
  'Safeguarding Concern',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `[${formData.inquiryType || 'Website'}] ${formData.subject}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      '',
      formData.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:info@gpakgirls.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              who needs support — we&apos;d love to hear from you.
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
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Urgent help */}
          <div className="max-w-4xl mx-auto mb-8 bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-300 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Help Urgently?</h3>
            <p className="text-gray-600 mb-4">
              If you are a teen mother or pregnant girl who needs support — or you know one — call
              or WhatsApp us. If we cannot answer immediately, we will call you back.
            </p>
            <p className="text-3xl font-bold text-secondary-700">+254 725 737 867</p>
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Send Us a Message</h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              This form opens your email app with the message ready to send to info@gpakgirls.org.
            </p>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Almost there!</h3>
                <p className="text-gray-600">
                  Your email app should have opened with your message. If it didn&apos;t, please
                  email us directly at{' '}
                  <a href="mailto:info@gpakgirls.org" className="text-primary-600 hover:underline">
                    info@gpakgirls.org
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base min-h-[44px]"
                    >
                      <option value="">Select type...</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-base sm:text-lg py-3.5 sm:py-4 min-h-[50px] sm:min-h-[44px]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-100">
        <div className="w-full h-[350px] sm:h-[400px] md:h-[500px]">
          <iframe
            src="https://maps.google.com/maps?q=Homa+Bay+Town,+Kenya&z=13&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="GPAK Girls Office Location — Homa Bay Town, Kenya"
          />
        </div>
      </section>
    </main>
  )
}
