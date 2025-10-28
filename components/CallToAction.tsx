import Link from 'next/link'
import { Heart, Users, Share2 } from 'lucide-react'

const actions = [
  {
    icon: Heart,
    title: 'Donate',
    description: 'Your contribution helps provide education, training, and support to teen mothers',
    href: '/donate',
    color: 'bg-primary-500',
    textColor: 'text-primary-600',
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Share your time and skills to mentor and empower young mothers',
    href: '/get-involved#volunteer',
    color: 'bg-secondary-500',
    textColor: 'text-secondary-600',
  },
  {
    icon: Share2,
    title: 'Spread Awareness',
    description: 'Help us reach more people by sharing our mission on social media',
    href: '/get-involved#awareness',
    color: 'bg-accent-500',
    textColor: 'text-accent-600',
  },
]

export default function CallToAction() {
  return (
    <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How You Can Help
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Every action makes a difference. Choose how you'd like to support teen mothers in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${action.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                <p className="text-primary-100 leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary-100 text-sm">
            Together, we can end teenage pregnancy and empower young mothers to achieve their dreams.
          </p>
        </div>
      </div>
    </section>
  )
}

