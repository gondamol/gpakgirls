import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users, ShieldCheck, LineChart, Megaphone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team - Leadership & Staff',
  description:
    'Meet the team behind Girl Pride Africa Kenya: experienced leadership in programme management, public health, psychosocial support, finance, and community engagement in western Kenya.',
}

type TeamMember = {
  name: string
  role: string
  image?: string
  bio: string
  focus: string[]
}

const leadership: TeamMember[] = [
  {
    name: 'Leah Otieno',
    role: 'Director',
    image: '/images/team/leah-otieno.jpg',
    bio: 'Leah leads GPAK Girls’ strategy, programme development, partnerships, and community engagement. She brings over ten years of experience in youth empowerment, livelihoods, child protection, positive parenting, and community development, and has led programmes that help adolescent girls, young mothers, and vulnerable families access education, health services, protection, psychosocial support, and economic opportunities. Leah is committed to integrated, community-based solutions that respond to HIV vulnerability, maternal and child wellbeing, gender-based violence, stigma, and poverty, working closely with communities, service providers, and partners to strengthen referral systems and build sustainable pathways for girls and young mothers.',
    focus: ['Strategic leadership', 'Partnerships', 'Child protection', 'Community engagement'],
  },
  {
    name: 'Quinter Onanda',
    role: 'Programs Officer',
    image: '/images/team/quinter-onanda.jpg',
    bio: 'Quinter designs, implements, and supports GPAK Girls’ core programmes for adolescent mothers and their families. She is a certified Trainer of Trainers in psychosocial counselling, case management for orphans and vulnerable children, positive parenting skills, and HIV/AIDS literacy. Quinter builds the capacity of staff, volunteers, and caregivers through training, mentorship, and evidence-based approaches that strengthen families, experience that directly underpins our psychosocial support and family strengthening work.',
    focus: ['Psychosocial support', 'OVC case management', 'Positive parenting', 'HIV literacy'],
  },
  {
    name: "Nellicent Achieng' Opondo",
    role: 'Public Health & Research Officer',
    image: '/images/team/nellicent-achieng.jpg',
    bio: 'Nellicent is a public health professional and epidemiologist who leads our health-focused programming and evidence work. Currently pursuing a Master’s degree in Epidemiology and Disease Control, she has experience in public health research, disease surveillance, and community health programmes. At GPAK Girls she strengthens the link between our services and the health system: supporting referrals, health education, mentorship for teenage girls and young mothers, and the data we use to understand and improve our results.',
    focus: ['Public health', 'Epidemiology', 'Health referrals', 'Evidence & data'],
  },
  {
    name: 'Mercy Abelle',
    role: 'Community Engagement Officer',
    image: '/images/team/mercy-abelle.jpg',
    bio: 'Mercy supports outreach and day-to-day engagement with the girls, families, and community structures we serve in Homa Bay. She helps identify girls who need support, accompanies them through our programmes, and maintains the trusted local relationships, with households, schools, and community leaders, that make our community-rooted model work.',
    focus: ['Community outreach', 'Beneficiary support', 'Local partnerships'],
  },
  {
    name: 'Denis Omogi',
    role: 'Finance Officer',
    bio: 'Denis is a Certified Public Accountant, CPA(K), responsible for GPAK Girls’ financial management. He oversees budgeting, financial records, and controls, ensuring that funds are managed transparently and accounted for accurately, and that our financial systems meet the standards partners and donors expect.',
    focus: ['Financial management', 'Budgeting', 'Accountability'],
  },
  {
    name: 'Maryline Grace',
    role: 'Administrative Assistant',
    image: '/images/team/maryline-grace.jpg',
    bio: 'Maryline’s journey with GPAK Girls began on the other side of the desk: she came to us as a young mother and completed our programme. Determined to keep going, she returned to college and earned a Diploma in Social Work with IT, then came back to join the team. Today she runs the administrative heart of the organization (records, logistics, and office operations), and her own experience shapes how warmly every girl is received when she first walks through our door.',
    focus: ['Administration', 'Social work', 'Programme graduate'],
  },
]

const growingRoles = [
  {
    icon: ShieldCheck,
    title: 'Safeguarding Lead',
    description:
      'A dedicated safeguarding focal point to further strengthen child protection, PSEA, and safe programming across all activities. Safeguarding responsibilities are currently held at leadership level.',
  },
  {
    icon: LineChart,
    title: 'Monitoring, Evaluation & Learning Officer',
    description:
      'A dedicated MEAL role to deepen our results measurement, data quality, and learning as our programmes grow. This work is currently led by our public health and programme staff.',
  },
  {
    icon: Megaphone,
    title: 'Communications Officer',
    description:
      'A dedicated communications role to share our work, results, and the voices of the young mothers we serve, always with consent and dignity at the centre.',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              <span>The People Behind GPAK Girls</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A multidisciplinary team combining programme leadership, public health expertise,
              psychosocial counselling, finance, and deep community roots in western Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <article
                key={member.name}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
              >
                <div className="p-6 sm:p-8 flex gap-5 items-start">
                  {member.image ? (
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary-50">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role} at Girl Pride Africa Kenya`}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex-shrink-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center ring-4 ring-primary-50"
                      aria-hidden="true"
                    >
                      <span className="text-2xl font-bold text-primary-700">
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{member.name}</h2>
                    <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.focus.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Oversight & Accountability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our staff team is supported by an advisory committee that provides oversight on
              strategy, finances, and safeguarding, and by trained community volunteers and mentors
              who extend our reach into the villages where the girls we serve live. Governance
              documents, policies, and leadership references are available to partners as part of
              due diligence.
            </p>
            <Link
              href="/accountability"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              How we stay accountable
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Growing the team */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-heading text-center mb-4">As We Grow</h2>
            <p className="section-subheading text-center mx-auto mb-12">
              These are roles we are working to establish as our programmes and funding grow.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {growingRoles.map((role) => (
                <div
                  key={role.title}
                  className="bg-white rounded-xl p-6 border border-dashed border-gray-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-50 rounded-full mb-4">
                    <role.icon className="h-6 w-6 text-secondary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work With Us</h2>
            <p className="text-xl text-primary-100 mb-8">
              Whether you are a potential partner, a professional who wants to volunteer skills, or
              a funder exploring the landscape in western Kenya, we would love to talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/get-involved"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
