import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Quote } from 'lucide-react'

const stories = [
  {
    name: 'Grace M.',
    age: 19,
    title: 'From Teen Mother to Tailor',
    excerpt: 'After giving birth at 16, I thought my dreams were over. GPAK Girls helped me return to school and trained me in tailoring. Now I run my own small business and support my daughter.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&q=80',
    impact: 'Completed tailoring training, runs own business',
  },
  {
    name: 'Faith K.',
    age: 18,
    title: 'Back to School and Thriving',
    excerpt: 'The counseling and mentorship I received gave me the confidence to go back to school. I\'m now in Form 4 and planning to study nursing to help other young mothers.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80',
    impact: 'Returned to school, aspires to be a nurse',
  },
  {
    name: 'Joy W.',
    age: 20,
    title: 'Hairdressing Success Story',
    excerpt: 'GPAK Girls\' hairdressing program changed my life. I learned professional skills and started my own salon. I\'m now financially independent and providing for my son.',
    image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600&q=80',
    impact: 'Owns a salon, financially independent',
  },
]

export default function FeaturedStories() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Success Stories</h2>
          <p className="section-subheading mx-auto">
            Real stories of transformation, resilience, and hope from the young women we support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={story.image}
                  alt={`${story.name} - ${story.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Quote className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{story.excerpt}&rdquo;
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-secondary-600 font-medium">
                    ✓ {story.impact}
                  </p>
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
            Read More Success Stories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

