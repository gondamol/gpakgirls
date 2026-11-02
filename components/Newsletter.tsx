import { Mail, MessageCircle, Facebook } from 'lucide-react'

// Real channels only: each option opens WhatsApp, email or Facebook directly.
const channels = [
  {
    name: 'WhatsApp updates',
    detail: 'Send us a message and we will add you to our updates list.',
    href: 'https://wa.me/254725737867?text=Hello%20GPAK%20Girls%2C%20please%20add%20me%20to%20your%20updates%20list.',
    icon: MessageCircle,
    external: true,
  },
  {
    name: 'Email updates',
    detail: 'Email us and we will send you programme news and stories.',
    href: 'mailto:info@gpakgirls.org?subject=Please%20add%20me%20to%20GPAK%20Girls%20updates',
    icon: Mail,
    external: false,
  },
  {
    name: 'Follow on Facebook',
    detail: 'See photos and news from our work around Lake Victoria.',
    href: 'https://www.facebook.com/girlpridekenya',
    icon: Facebook,
    external: true,
  },
]

export default function Newsletter() {
  return (
    <section className="section bg-gray-50 border-t border-gray-100" aria-labelledby="updates-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="updates-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Hear about the girls we walk with, programme updates and ways you can help.
          </p>
          <ul className="grid gap-4 sm:grid-cols-3 text-left">
            {channels.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 hover:border-primary-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 mb-4">
                    <c.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </span>
                  <span className="text-lg font-semibold text-gray-900 mb-1">{c.name}</span>
                  <span className="text-sm text-gray-600">{c.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
