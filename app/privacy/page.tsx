import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Girl Pride Africa Kenya collects, uses, and protects personal information on this website and in our programmes.',
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              How Girl Pride Africa Kenya (GPAK Girls) handles personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Who we are</h2>
              <p>
                Girl Pride Africa Kenya (GPAK Girls) is a registered organization based in Homa Bay
                Town, Homa Bay County, Kenya, supporting adolescent mothers and pregnant girls in
                western Kenya. For anything in this policy, you can reach us at{' '}
                <a href="mailto:info@gpakgirls.org" className="text-primary-600 hover:underline">
                  info@gpakgirls.org
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Information we collect on this website
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact form:</strong> your name, email address, optional phone number,
                  and the message you send us. We use this only to respond to your enquiry.
                </li>
                <li>
                  <strong>Newsletter:</strong> your email address, used only to send you updates
                  about our work. You can unsubscribe at any time.
                </li>
                <li>
                  We do not run advertising trackers, and we do not sell or rent personal
                  information to anyone.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Information about programme participants
              </h2>
              <p>
                In our programmes we handle sensitive information about minors and young women,
                including information related to pregnancy, HIV, and experiences of violence. This
                information is collected with informed consent, kept confidential with restricted
                access, and used only to provide support safely. Published stories and photographs
                appear only with informed consent, and figures we publish are aggregated and
                anonymized. Read more on our{' '}
                <Link href="/accountability" className="text-primary-600 hover:underline">
                  Accountability page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How long we keep data</h2>
              <p>
                We keep personal information only as long as needed for the purpose it was
                collected, or as required by Kenyan law, and then delete it securely.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your rights</h2>
              <p>
                In line with Kenya’s Data Protection Act (2019), you may ask us what personal data
                we hold about you, ask us to correct it, or ask us to delete it. Email{' '}
                <a href="mailto:info@gpakgirls.org" className="text-primary-600 hover:underline">
                  info@gpakgirls.org
                </a>{' '}
                and we will respond.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to this policy</h2>
              <p>
                We may update this policy as our work or the law changes. The latest version will
                always be on this page.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: July 2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
