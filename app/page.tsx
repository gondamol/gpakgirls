import Hero from '@/components/Hero'
import ImpactStats from '@/components/ImpactStats'
import FeaturedPrograms from '@/components/FeaturedPrograms'
import FeaturedStories from '@/components/FeaturedStories'
import CallToAction from '@/components/CallToAction'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <FeaturedPrograms />
      <FeaturedStories />
      <CallToAction />
      <Newsletter />
    </main>
  )
}

