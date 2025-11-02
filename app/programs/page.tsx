import { Metadata } from 'next'
import Image from 'next/image'
import { BookOpen, Scissors, Users, Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Programs - Education, Training & Support',
  description: 'Discover our comprehensive programs: educational support, vocational training in tailoring and hairdressing, mentorship, and counseling for teen mothers in Kenya.',
}

const programs = [
  {
    icon: BookOpen,
    title: 'Educational Support',
    slug: 'education',
    image: '/images/educational.jpg',
    description: 'We believe education is the key to breaking the cycle of poverty and creating lasting change.',
    features: [
      'School fees assistance for return to formal education',
      'One-on-one tutoring and academic mentoring',
      'Provision of school supplies and uniforms',
      'Childcare support to enable mothers to attend school',
      'Exam preparation and career guidance',
    ],
    impact: '85% of participants return to school and complete their education',
    color: 'bg-blue-500',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    icon: Scissors,
    title: 'Vocational Training',
    slug: 'vocational',
    image: '/images/vocationl.jpg',
    description: 'Practical skills training that leads to immediate income-generating opportunities.',
    features: [
      'Tailoring & Dressmaking (6-month comprehensive course)',
      'Professional Hairdressing & Beauty (6-month program)',
      'Business management and entrepreneurship training',
      'Starter kit provision upon graduation',
      'Job placement and business setup assistance',
    ],
    impact: '70% of graduates start their own small businesses within 12 months',
    color: 'bg-purple-500',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    slug: 'mentorship',
    image: '/images/mentorship.jpg',
    description: 'Connecting teen mothers with caring mentors who provide guidance and support.',
    features: [
      'One-on-one mentoring relationships',
      'Monthly group mentorship sessions',
      'Life skills workshops (financial literacy, parenting, health)',
      'Peer support groups facilitated by trained mentors',
      'Career guidance and goal-setting support',
    ],
    impact: '90% of mentees report increased confidence and clearer life goals',
    color: 'bg-green-500',
    bgColor: 'from-green-50 to-green-100',
  },
  {
    icon: Heart,
    title: 'Counseling & Emotional Support',
    slug: 'counseling',
    image: '/images/Counseling.jpg',
    description: 'Professional counseling to heal from trauma and build resilience for the future.',
    features: [
      'Individual trauma-informed counseling sessions',
      'Group therapy and healing circles',
      'Crisis intervention and emergency support',
      'Parenting skills training',
      'Referrals to specialized services when needed',
    ],
    impact: '95% of participants show improved mental health and coping skills',
    color: 'bg-pink-500',
    bgColor: 'from-pink-50 to-pink-100',
  },
]

const eligibility = [
  'Teen mothers (ages 14-21) or pregnant teens',
  'Residents of Kenya',
  'Commitment to program participation',
  'Willingness to work towards independence',
]

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive support systems designed to help teen mothers rebuild their lives, gain independence, and achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      {programs.map((program, index) => (
        <section
          key={index}
          id={program.slug}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`bg-gradient-to-br ${program.bgColor} p-6 rounded-xl border border-gray-200`}>
                  <p className="font-semibold text-gray-900 mb-1">Impact:</p>
                  <p className="text-gray-700">{program.impact}</p>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={program.image}
                    alt={`${program.title} - Program activities`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Eligibility & Application */}
      <section className="section bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Who Can Participate?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Ready to Join?</h3>
                <p className="mb-6">
                  Our programs are free for all eligible participants. We&apos;re here to support you every step of the way.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

