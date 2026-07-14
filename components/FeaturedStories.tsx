import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'

const stories = [
  {
    name: 'Achieng',
    county: 'Homa Bay',
    title: 'Back in the classroom',
    excerpt:
      'I thought school was finished for me. My mentor kept saying: your daughter needs to see you finish. Now I am the one helping her with her homework.',
    image: '/images/annie-spratt-0cgpyigyIkM-unsplash.jpg',
    impact: 'Returned to school, preparing for KCSE',
  },
  {
    name: 'Awino',
    county: 'Siaya',
    title: 'A trade of her own',
    excerpt:
      'The sewing machine changed how people greet me. I am not “that girl” anymore. I am the one who makes the school uniforms.',
    image: '/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg',
    impact: 'Runs a tailoring business, training an apprentice',
  },
  {
    name: 'Adhiambo',
    county: 'Kisumu',
    title: 'Healthy mother, healthy baby',
    excerpt:
      'I was afraid of the clinic: of the questions, of the looks. Having someone walk in with me made it possible. Now I never miss an appointment.',
    image: '/images/annie-spratt-1YnBzhJISg4-unsplash.jpg',
    impact: 'In HIV care; her daughter was born HIV-free',
  },
]

export default function FeaturedStories() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">In Their Own Words</h2>
          <p className="section-subheading mx-auto">
            Stories shared with consent and told with dignity. Names are changed and photos are
            representative to protect each girl’s privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stories.map((story) => (
            <article
              key={story.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={story.image}
                  alt={`Representative image - ${story.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Quote className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      {story.name}
                      <span className="text-gray-400 font-normal text-sm"> · {story.county}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">{story.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  &ldquo;{story.excerpt}&rdquo;
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-secondary-600 font-medium">✓ {story.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Read More Stories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
