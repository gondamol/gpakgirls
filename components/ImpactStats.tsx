'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Users, Award, Heart } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Teen Mothers Empowered',
    color: 'text-primary-600',
  },
  {
    icon: GraduationCap,
    value: 85,
    suffix: '%',
    label: 'Returned to School',
    color: 'text-secondary-600',
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Girls Trained in Vocational Skills',
    color: 'text-accent-600',
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Committed to Our Mission',
    color: 'text-primary-600',
  },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const stepValue = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += stepValue
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  )
}

export default function ImpactStats() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Impact</h2>
          <p className="section-subheading mx-auto">
            Real numbers, real change. See how we&apos;re making a difference in the lives of teen mothers across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className={`p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-primary-50 to-secondary-50`}>
                  <stat.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`${stat.color} mb-2`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

