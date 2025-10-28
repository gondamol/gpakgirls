import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Heart, Share2, Handshake, Calendar, Gift } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Involved - Volunteer, Partner, Advocate',
  description: 'Join us in empowering teen mothers in Kenya. Volunteer your time, become a partner, or help spread awareness about our mission.',
}

const opportunities = [
  {
    icon: Users,
    title: 'Volunteer With Us',
    description: 'Share your time, skills, and passion to directly impact the lives of teen mothers.',
    actions: [
      'Become a mentor for young mothers',
      'Teach vocational skills (tailoring, hairdressing, business)',
      'Provide tutoring and academic support',
      'Help with administrative tasks',
      'Organize fundraising events',
    ],
    cta: 'Apply to Volunteer',
    href: '#volunteer',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Organizations, businesses, and institutions can create lasting impact through strategic partnerships.',
    actions: [
      'Corporate social responsibility programs',
      'Educational institution collaborations',
      'NGO partnerships for joint programs',
      'Skills training partnerships',
      'Employment opportunities for graduates',
    ],
    cta: 'Explore Partnerships',
    href: '#partner',
    color: 'from-secondary-500 to-secondary-600',
  },
  {
    icon: Share2,
    title: 'Spread Awareness',
    description: 'Use your voice and platforms to help end teenage pregnancy and support young mothers.',
    actions: [
      'Share our content on social media',
      'Write about our mission on your blog',
      'Invite us to speak at your event',
      'Organize awareness campaigns in your community',
      'Start conversations about teen pregnancy prevention',
    ],
    cta: 'Get Resources',
    href: '#awareness',
    color: 'from-accent-500 to-accent-600',
  },
]

const volunteerRoles = [
  'Mentors for teen mothers',
  'Vocational skills trainers',
  'Academic tutors',
  'Counseling support volunteers',
  'Event organizers',
  'Social media and communications',
  'Fundraising coordinators',
  'Administrative support',
]

export default function GetInvolvedPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join the Movement
            </h1>
            <p className="text-xl text-gray-600">
              There are many ways you can help empower teen mothers in Kenya. Every contribution, big or small, creates real change.
            </p>
          </div>
        </div>
      </section>

      {/* Main Opportunities */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                id={opp.href.substring(1)}
                className="max-w-5xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`bg-gradient-to-br ${opp.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <opp.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {opp.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {opp.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {opp.actions.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`inline-block bg-gradient-to-r ${opp.color} text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all`}
                    >
                      {opp.cta}
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`aspect-[4/3] bg-gradient-to-br ${opp.color} opacity-10 rounded-2xl flex items-center justify-center`}>
                      <p className="text-gray-500 text-center px-8">
                        Image placeholder for {opp.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              We&apos;re looking for passionate volunteers in the following roles:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
              {volunteerRoles.map((role, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-medium">✓ {role}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply to Volunteer
              </Link>
              <Link
                href="/about"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other Ways to Support
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Donate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Financial support helps us expand our programs and reach more girls.
              </p>
              <Link href="/donate" className="text-primary-600 font-medium hover:underline">
                Make a Donation →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <Calendar className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Attend Events</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our fundraising events, awareness campaigns, and community gatherings.
              </p>
              <Link href="/contact" className="text-secondary-600 font-medium hover:underline">
                See Upcoming Events →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border border-gray-200">
              <Gift className="h-12 w-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">In-Kind Donations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Donate materials, sewing machines, hairdressing equipment, or other resources.
              </p>
              <Link href="/contact" className="text-accent-600 font-medium hover:underline">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

