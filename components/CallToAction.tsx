import Link from 'next/link'
import { Heart, Users, Handshake } from 'lucide-react'

const actions = [
  {
    icon: Heart,
    title: 'Donate',
    description:
      'Your contribution funds counselling, school re-entry, health referrals, and livelihood training for young mothers',
    href: '/donate',
    color: 'bg-primary-500',
    textColor: 'text-primary-600',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description:
      'Funders and organizations: explore our programs, evidence, and due diligence; we are ready for the conversation',
    href: '/get-involved#partner',
    color: 'bg-accent-500',
    textColor: 'text-accent-600',
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Share your time and skills to mentor and support young mothers in western Kenya',
    href: '/get-involved#volunteer',
    color: 'bg-secondary-500',
    textColor: 'text-secondary-600',
  },
]

export default function CallToAction() {
  return (
    <section className="section bg-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How You Can Help
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Every action makes a difference. Choose how you&apos;d like to support teen mothers in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-colors border border-white/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${action.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
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
            Together, we can make sure no girl’s future ends with an early pregnancy.
          </p>
        </div>
      </div>
    </section>
  )
}

