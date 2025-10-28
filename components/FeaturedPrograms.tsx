import Link from 'next/link'
import { BookOpen, Scissors, Users, Heart, ArrowRight } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Educational Support',
    description: 'Helping teen mothers return to school and complete their education with tutoring, school fees support, and educational materials.',
    color: 'bg-blue-500',
  },
  {
    icon: Scissors,
    title: 'Vocational Training',
    description: 'Teaching practical skills like tailoring and hairdressing to help young mothers gain financial independence and start businesses.',
    color: 'bg-purple-500',
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Connecting teen mothers with caring mentors who provide guidance, support, and encouragement throughout their journey.',
    color: 'bg-green-500',
  },
  {
    icon: Heart,
    title: 'Counseling & Support',
    description: 'Professional counseling services to help heal from trauma, build confidence, and develop resilience for the future.',
    color: 'bg-pink-500',
  },
]

export default function FeaturedPrograms() {
  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Programs</h2>
          <p className="section-subheading mx-auto">
            Comprehensive support systems designed to help teen mothers rebuild their lives and achieve their dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <program.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Learn More About Our Programs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

