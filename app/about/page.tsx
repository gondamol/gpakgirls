import { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Target, Eye, Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Story',
  description: 'Learn about Girl Pride Africa Kenya, our mission to empower teen mothers, our team, and our commitment to ending teenage pregnancy in Kenya.',
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every teen mother with empathy, dignity, and unconditional support.',
  },
  {
    icon: Award,
    title: 'Empowerment',
    description: 'We believe in the potential of every young woman to overcome challenges and achieve her dreams.',
  },
  {
    icon: CheckCircle,
    title: 'Integrity',
    description: 'We operate with transparency, accountability, and ethical practices in all we do.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build supportive networks that help teen mothers thrive together.',
  },
]

const teamMembers = [
  {
    name: 'To Be Added',
    role: 'Executive Director',
    bio: 'Leadership bio to be added',
  },
  {
    name: 'To Be Added',
    role: 'Program Director',
    bio: 'Program director bio to be added',
  },
  {
    name: 'To Be Added',
    role: 'Counseling Coordinator',
    bio: 'Counselor bio to be added',
  },
]

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About GPAK Girls
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Girl Pride Africa Kenya is a registered NGO dedicated to ending teenage pregnancy and sexual abuse among teenage girls through comprehensive support, education, and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl border border-primary-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To identify, rehabilitate, and empower abused and oppressed teen mothers and pregnant teens, enabling them to access economic and educational opportunities through comprehensive training, skills-building, mentorship, and emotional support.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-2xl border border-secondary-100">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-secondary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A Kenya where every teenage girl, regardless of circumstances, has the opportunity to complete her education, develop marketable skills, and build a dignified, independent life for herself and her children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-heading text-center mb-12">Our Story</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/annie-spratt-W3WO3QQwAxM-unsplash.jpg"
                  alt="Young Black African mothers in vocational training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Girl Pride Africa Kenya was founded in 2018 with a simple but powerful belief: every young mother deserves a second chance. At that time, there was no dedicated service specifically supporting teenage mothers in our community. Young girls who became pregnant were often abandoned by their families, forced to drop out of school, and left with no path forward.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We recognized that teenage pregnancy often results from complex circumstances including poverty, lack of education, sexual abuse, and limited opportunities. Rather than stigmatizing these young mothers, we chose to empower them. What started as a small community initiative has grown into a comprehensive program supporting hundreds of teen mothers across Kenya.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we operate multiple programs including educational support, vocational training in tailoring and hairdressing, professional counseling services, and ongoing mentorship. Our holistic approach addresses not just immediate needs, but builds long-term pathways to independence and success.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-4">Our Team</h2>
          <p className="section-subheading text-center mx-auto mb-12">
            Dedicated professionals committed to empowering the next generation of young women.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center border border-primary-100">
            <Award className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Registered & Certified NGO
            </h2>
            <p className="text-gray-600 mb-6">
              Girl Pride Africa Kenya is officially registered with the NGO Coordination Board of Kenya.
            </p>
            <p className="text-sm text-gray-500">
              Registration Number: [To Be Added]
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

