'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { ADS_CONVERSIONS, trackConversion } from '@/lib/ads'

const inquiryTypes = [
  'General Inquiry',
  'Partnership / Funding',
  'Document Request',
  'Program Information',
  'Volunteer Opportunity',
  'Donation Question',
  'Media/Press Request',
  'Help Request (Teen Mother/Pregnant Girl)',
  'Safeguarding Concern',
]

export default function ContactForm() {
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
    trackConversion(ADS_CONVERSIONS.contactForm)
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
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Send Us a Message</h2>
      <p className="text-center text-gray-500 text-sm mb-8">
        This form opens your email app with the message ready to send to info@gpakgirls.org.
      </p>

      {submitted ? (
        <div className="bg-secondary-50 border-2 border-secondary-200 rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
            <Send className="h-8 w-8 text-secondary-600" />
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
  )
}
