// PLACEHOLDERS: the mentor mothers, pads and people-reached figures are estimates
// awaiting confirmation from programme records. Replace with verified counts
// before these are presented to partners.
const stats = [
  { value: '500+', label: 'Adolescent mothers and pregnant girls supported' },
  { value: '85%', label: 'Of girls supported for school re-entry back in class' },
  { value: '50+', label: 'Mentor mothers trained' },
  { value: '30,000+', label: 'Sanitary pads distributed' },
]

export default function ImpactStats() {
  return (
    <section className="bg-primary-900 text-white py-14 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-primary-200 mb-10 sm:mb-12">
          Impact
        </h2>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end items-center text-center">
              <dt className="mt-2 text-sm sm:text-base text-primary-50 font-medium leading-snug max-w-[16rem]">
                {stat.label}
              </dt>
              <dd className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-accent-300">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-center text-sm text-primary-200 mt-10 sm:mt-12">
          3,000+ people reached, including girls’ children and families · Homa Bay · Siaya · Kisumu · Migori
        </p>
      </div>
    </section>
  )
}
