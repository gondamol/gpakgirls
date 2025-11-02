import { Metadata } from 'next'
import Image from 'next/image'
import { Quote, GraduationCap, Briefcase, Heart, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Success Stories - Real Stories of Transformation',
  description: 'Read inspiring success stories from teen mothers who have rebuilt their lives through Girl Pride Africa Kenya programs.',
}

const stories = [
  {
    name: 'Grace M.',
    age: 19,
    title: 'From Teen Mother to Successful Tailor',
    location: 'Nairobi',
    image: '/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg',
    story: 'After giving birth at 16, I thought my dreams of independence were over. My family was disappointed, and I felt lost. That\'s when I found GPAK Girls. They didn\'t judge me – instead, they saw my potential. The counseling helped me heal from the trauma and rebuild my confidence. Then came the tailoring program. For six months, I learned everything about dressmaking, pattern design, and running a business. The trainers were patient and encouraging. When I graduated, GPAK Girls gave me a sewing machine and helped me set up a small workspace at home. Now, two years later, I run my own tailoring business. I make school uniforms, dresses, and alterations for my community. I support my daughter and even hired an apprentice. My dream is to open a bigger shop and train other young mothers like GPAK Girls trained me.',
    challenges: 'Teen pregnancy at 16, family rejection, no income, trauma from abuse',
    support: 'Counseling, 6-month tailoring training, business startup kit, mentorship',
    achievements: [
      'Runs own successful tailoring business',
      'Financially independent',
      'Supporting daughter and family',
      'Training other young women',
    ],
    impact: 'Business Owner',
    icon: Briefcase,
  },
  {
    name: 'Faith K.',
    age: 18,
    title: 'Back to School and Aspiring Nurse',
    location: 'Kisumu',
    image: '/images/annie-spratt-0cgpyigyIkM-unsplash.jpg',
    story: 'When I got pregnant at 15, I had to drop out of Form 2. I was devastated because I loved school and wanted to become a nurse. After my baby was born, I felt hopeless. How could I go back to school with a child? A community health worker told me about GPAK Girls. They changed everything. First, the counselors helped me deal with the shame and depression I was feeling. Then they arranged childcare support and paid my school fees so I could return to school. A mentor from the program calls me every week to encourage me and help with my studies. She\'s a nurse herself, which inspires me so much. I\'m now in Form 4 preparing for my KCSE exams. My grades are good – I\'m even top of my class in biology! The tutoring program helped me catch up on what I missed. GPAK Girls believes in me when I stopped believing in myself. Next year, I\'ll apply to nursing school. My son will see his mother achieve her dreams.',
    challenges: 'Dropped out of school at Form 2, depression, no childcare, financial barriers',
    support: 'Counseling, school fees assistance, childcare support, tutoring, mentorship',
    achievements: [
      'Returned to school and excelling',
      'Top student in biology',
      'Preparing for KCSE exams',
      'Planning to attend nursing school',
    ],
    impact: 'Returned to School',
    icon: GraduationCap,
  },
  {
    name: 'Joy W.',
    age: 20,
    title: 'Salon Owner and Community Leader',
    location: 'Mombasa',
    image: '/images/annie-spratt-1YnBzhJISg4-unsplash.jpg',
    story: 'I became pregnant at 17 after being abused by someone I trusted. I felt broken and worthless. My parents were supportive but poor – they couldn\'t afford to help me build a future. GPAK Girls found me through their outreach program. The counseling saved my life. I was able to talk about the abuse and start healing. They helped me report the case to authorities and supported me through that difficult process. Then they enrolled me in their hairdressing program. I discovered I had a real talent for it! I loved learning about different hairstyles, braiding techniques, and salon management. After completing the program, GPAK Girls helped me get a job at a local salon to gain experience. I saved every shilling. After one year, with a small loan from GPAK Girls, I opened my own small salon. Now I have three employees – all young mothers I\'m training! I also volunteer with GPAK Girls, talking to other survivors and showing them that recovery is possible. My son is now 3 years old and sees his mother as a businesswoman and community leader.',
    challenges: 'Sexual abuse, trauma, poverty, no marketable skills, low self-esteem',
    support: 'Trauma counseling, legal support, hairdressing training, job placement, business loan',
    achievements: [
      'Owns a successful salon',
      'Employs 3 young mothers',
      'Volunteers as peer counselor',
      'Community advocate against abuse',
    ],
    impact: 'Business Owner & Advocate',
    icon: Heart,
  },
  {
    name: 'Mercy N.',
    age: 19,
    title: 'Teacher\'s Assistant and Mother of Two',
    location: 'Nakuru',
    image: '/images/annie-spratt-IlDpcuix5T0-unsplash.jpg',
    story: 'I got pregnant with my first child at 16, then again at 17. I felt like my life was over before it even started. With two babies and no education beyond Form 1, what future could I have? GPAK Girls reached out to me through a community program. They enrolled both my children in their childcare program and helped me complete my secondary education through adult learning classes. While studying, I also joined their mentorship program. My mentor was a teacher who encouraged me to consider education as a career. GPAK Girls then helped me get a position as a teacher\'s assistant at a local primary school. I work with young children and love it! I\'m now saving money to attend teacher training college. My children see me reading and studying, and they\'re learning to love education too. GPAK Girls taught me that being a young mother doesn\'t mean your dreams have to die. It just means you have more reasons to fight for them.',
    challenges: 'Two children by age 17, minimal education, no career prospects, poverty',
    support: 'Childcare for both children, adult education classes, mentorship, job placement',
    achievements: [
      'Completed secondary education',
      'Working as teacher\'s assistant',
      'Saving for teacher training college',
      'Both children thriving in school',
    ],
    impact: 'Education Professional',
    icon: GraduationCap,
  },
  {
    name: 'Aisha M.',
    age: 21,
    title: 'Entrepreneur and Women\'s Advocate',
    location: 'Nairobi',
    image: '/images/annie-spratt-1YnBzhJISg4-unsplash.jpg',
    story: 'At 16, I became pregnant and was forced to marry the father. The marriage was difficult – there was no love, only obligation. After my daughter was born, I realized I needed to create a better life for both of us. I left the marriage and came to Nairobi with nothing. GPAK Girls took me in when I had nowhere to go. They provided emergency shelter and connected me with counselors who helped me process everything I\'d been through. I joined their tailoring program and discovered I had a gift for design. But I didn\'t want to just sew – I wanted to create fashion. GPAK Girls encouraged my ambition. After training, they helped me start a small business making African-print children\'s clothing. My designs became popular! I now sell online and at local markets. I\'ve been featured in a local magazine and I employ two other young mothers. I also speak at schools about teen pregnancy prevention and women\'s rights. GPAK Girls showed me that I could turn my pain into purpose.',
    challenges: 'Forced marriage, domestic difficulties, homelessness, single parenthood',
    support: 'Emergency shelter, counseling, vocational training, business support, legal advice',
    achievements: [
      'Successful fashion business owner',
      'Featured in local media',
      'Employing other young mothers',
      'Public speaker on women\'s rights',
    ],
    impact: 'Entrepreneur & Advocate',
    icon: TrendingUp,
  },
]

export default function StoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>Real Stories of Transformation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Every teen mother has a story. These are stories of resilience, hope, and transformation. Meet the young women who refused to let circumstances define their future.
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20">
            {stories.map((story, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <Image
                      src={story.image}
                      alt={`${story.name} - ${story.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 text-white">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-3`}>
                        <story.icon className="h-4 w-4" />
                        <span>{story.impact}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 lg:p-10">
                    <div className="flex items-start gap-3 mb-4">
                      <Quote className="h-8 w-8 text-primary-400 flex-shrink-0" />
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                          {story.name}, {story.age}
                        </h2>
                        <p className="text-primary-600 font-semibold mb-1">{story.title}</p>
                        <p className="text-sm text-gray-500">{story.location}</p>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none mb-6">
                      <p className="text-gray-700 leading-relaxed italic">
                        &ldquo;{story.story}&rdquo;
                      </p>
                    </div>

                    {/* Challenges & Support */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6 p-6 bg-gray-50 rounded-xl">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                          Challenges Faced
                        </h3>
                        <p className="text-sm text-gray-600">{story.challenges}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                          Support Received
                        </h3>
                        <p className="text-sm text-gray-600">{story.support}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Current Achievements:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {story.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You Can Help Write More Success Stories
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Every donation, every hour volunteered, every voice raised creates another story of transformation. Join us in empowering the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Donate Now
              </a>
              <a
                href="/get-involved"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <strong>Privacy Note:</strong> All stories are shared with full consent of the participants. Names may be pseudonyms and photos may be representative images to protect privacy and dignity. Every story shared here is based on real experiences of beneficiaries in our programs.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

