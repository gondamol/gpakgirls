import { GraduationCap, Users, Award, Heart } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Adolescent mothers and pregnant girls supported since 2018',
    color: 'text-primary-600',
  },
  {
    icon: GraduationCap,
    value: 85,
    suffix: '%',
    label: 'Of the girls we support for school re-entry return to class',
    color: 'text-secondary-600',
  },
  {
    icon: Award,
    value: 4,
    suffix: '',
    label: 'Counties in western Kenya: Homa Bay, Siaya, Kisumu, Migori',
    color: 'text-accent-600',
  },
  {
    icon: Heart,
    value: 5,
    suffix: '',
    label: 'Connected program areas, from counselling to livelihoods',
    color: 'text-primary-600',
  },
]

export default function ImpactStats() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Impact</h2>
          <p className="section-subheading mx-auto">
            Every figure comes from our programme records, and behind each one is a girl
            rebuilding her future in western Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-lg bg-gray-50 border border-gray-100"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 rounded-full bg-gray-50">
                  <stat.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`${stat.color} mb-2`}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  {stat.value}
                  {stat.suffix}
                </div>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
