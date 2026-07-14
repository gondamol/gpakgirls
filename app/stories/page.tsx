import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Quote,
  GraduationCap,
  Briefcase,
  Heart,
  Home,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Stories - Young Mothers, In Their Own Words',
  description:
    'Stories of adolescent mothers in western Kenya rebuilding their lives with GPAK Girls — shared with consent, told with dignity.',
}

const earlyStories = [
  {
    name: 'Anyango, 16',
    year: '2019',
    quote:
      '“Erokamano, ukonya, awinjo kategno, Nyasaye ogwedhu — thank you very much, you have helped me, I feel strong again, God bless you.”',
    story:
      'Two weeks after giving birth, Anyango was living alone in her late grandmother’s house — sent away by her family, washing her own clothes, sometimes going a full day without food. Our team visited with food and baby items, kept coming back, and sat down with her parents until they agreed to take her home. School was no longer realistic for her, but she told us she could do tailoring.',
    now: 'Today she works as a tailor, supporting herself and her child with her own hands.',
    legacy:
      'Anyango is why family strengthening is a core pillar today. No girl should have to choose between her baby and her family.',
    pillar: 'Family Strengthening',
    href: '/programs#family',
  },
  {
    name: 'Auma, 22',
    year: '2019',
    quote:
      '“I feel I have hope and a future for my kids. I can now laugh and feel happiness. The first thing I will buy is a mattress.”',
    story:
      'Auma was raising two children alone in an unsafe home, surviving on casual farm work that barely fed them. What she needed first was not a course — it was a safe place to sleep. We helped her rent a room of her own; from that stability she began building the skills to earn.',
    now: 'Today she runs her own salon — and trains young mothers from our programmes in it.',
    legacy:
      'Auma is why housing and asset support came first in what became Project FAHARI. Safety before skills.',
    pillar: 'Livelihoods & FAHARI',
    href: '/programs#livelihoods',
  },
  {
    name: 'Apiyo, 14',
    year: '2019',
    quote:
      '“Rejected by peers, despised by parents, she lost hope in life — then she heard of GPAK and contacted us. She dreams of becoming a nurse.”',
    story:
      'Apiyo could not continue with school after giving birth to her daughter. When she reached out to us, our team negotiated her return to the classroom and walked with her through it — one of the first girls we ever supported back into education.',
    now: 'Today she has completed her schooling and mentors girls arriving where she once stood.',
    legacy:
      'Apiyo is why school re-entry is a pillar today — and why we never treat a girl’s ambition as over.',
    pillar: 'Education & School Re-entry',
    href: '/programs#education',
  },
]

const stories = [
  {
    name: 'Achieng',
    county: 'Homa Bay',
    title: 'Back in the classroom',
    image: '/images/annie-spratt-0cgpyigyIkM-unsplash.jpg',
    quote:
      'I thought school was finished for me. My mentor kept saying: your daughter needs to see you finish. Now I am the one helping her with her homework.',
    context:
      'Achieng became pregnant at 15 and left school in Form 2. Like many girls in Homa Bay, she assumed there was no way back — schools rarely welcome young mothers, and her family could not cover fees and childcare at the same time.',
    support:
      'Counselling and a peer support group came first. GPAK Girls then negotiated her re-entry with the school, covered her fees, and arranged childcare during class hours.',
    now: 'She is preparing for her KCSE exams and wants to train as a health worker.',
    tag: 'Education',
    icon: GraduationCap,
  },
  {
    name: 'Awino',
    county: 'Siaya',
    title: 'A trade of her own',
    image: '/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg',
    quote:
      'The sewing machine changed how people greet me. I am not “that girl” anymore. I am the one who makes the school uniforms.',
    context:
      'Awino was 17 and raising her son alone when she joined us. Going back to school was not realistic for her — she needed income, quickly, without depending on anyone.',
    support:
      'She completed our six-month tailoring course, business skills training, and joined a savings group. She graduated with a starter kit and a mentor from the local market.',
    now: 'She runs a small tailoring business, supports her son, and has taken on her first apprentice.',
    tag: 'Livelihoods',
    icon: Briefcase,
  },
  {
    name: 'Adhiambo',
    county: 'Kisumu',
    title: 'Healthy mother, healthy baby',
    image: '/images/annie-spratt-1YnBzhJISg4-unsplash.jpg',
    quote:
      'I was afraid of the clinic — of the questions, of the looks. Having someone walk in with me made it possible. Now I never miss an appointment.',
    context:
      'Adhiambo learned she was HIV-positive during her pregnancy at 18. Fear and stigma nearly kept her from returning to the clinic — the most dangerous possible outcome for her and her baby.',
    support:
      'Her case worker accompanied her to appointments and linked her to treatment and PMTCT services. A peer group of young mothers living with HIV helped her carry the diagnosis without shame.',
    now: 'She is healthy and in care, and her daughter was born HIV-free.',
    tag: 'Health & HIV',
    icon: Heart,
  },
  {
    name: 'Maryline',
    county: 'Homa Bay',
    title: 'Full circle: from participant to staff',
    image: '/images/team/maryline-grace.jpg',
    quote:
      'I know what it costs a girl to walk through that door the first time. I walked through it myself. Now I am the one who welcomes her.',
    context:
      'Maryline came to GPAK Girls as a young mother and completed the programme. She refused to stop there — she returned to college and earned a Diploma in Social Work with IT.',
    support:
      'The programme supported her through counselling, peer mentorship, and her return to education — and when she graduated, she came back to join the team.',
    now: 'She is our Administrative Assistant, running the organization’s records and logistics. Her story is on our team page — with her name, because she chose to tell it.',
    tag: 'Full Circle',
    icon: GraduationCap,
  },
  {
    name: 'Akinyi',
    county: 'Migori',
    title: 'A family rebuilt',
    image: '/images/annie-spratt-IlDpcuix5T0-unsplash.jpg',
    quote:
      'My mother and I did not speak for a year. The family sessions gave us words. I moved back home before the baby turned one.',
    context:
      'When Akinyi became pregnant at 16, she was sent away from home. She was couch-surfing between relatives, out of school, and isolated from everyone she knew.',
    support:
      'Alongside counselling for Akinyi, our team worked with her mother through structured parenting and caregiver dialogue sessions, rebuilding the relationship step by step.',
    now: 'She lives at home again, her mother helps care for the baby, and she has started a vocational course.',
    tag: 'Family',
    icon: Home,
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
              <span>In Their Own Words</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stories
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Behind every number is a girl with a name, a child, and a plan. These stories from
              Homa Bay, Siaya, Kisumu, and Migori are shared with consent and told the way the
              girls themselves want them told.
            </p>
          </div>
        </div>
      </section>

      {/* Consent note — before the stories, not buried after */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-3xl mx-auto flex items-start gap-3 text-sm text-gray-600">
            <ShieldCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>How we tell stories:</strong> every story is shared with the informed consent
              of the young woman involved. Unless a woman chooses to be identified — as Maryline,
              now on our staff, has — names are changed, identifying details are removed, and
              photographs are representative images. Quotes from our early years are reproduced as
              the girls shared them with us at the time. A girl’s privacy matters more than our
              storytelling, and consent can be withdrawn at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Where it began */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                <span>From Our Field Notes, 2019</span>
              </div>
              <h2 className="section-heading">Where It Began</h2>
              <p className="section-subheading mx-auto">
                The first girls we walked with shaped everything we do today. These are their
                words as we recorded them at the time — names changed to protect them — and what
                each of them changed in us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {earlyStories.map((item) => (
                <article
                  key={item.name}
                  className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-xs font-semibold text-gray-400 tracking-wide">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-800 italic leading-relaxed mb-4">{item.quote}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.story}</p>
                  <p className="text-sm font-semibold text-secondary-700 mb-5">{item.now}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700 mb-3">{item.legacy}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      {item.pillar} today →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {stories.map((story) => (
              <article
                key={story.name}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[16rem]">
                    <Image
                      src={story.image}
                      alt={`${story.title} — a GPAK Girls story`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        <story.icon className="h-4 w-4" />
                        <span>{story.tag}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-6 lg:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {story.name}
                      <span className="text-gray-400 font-normal text-lg"> · {story.county}</span>
                    </h2>
                    <p className="text-primary-600 font-semibold mb-5">{story.title}</p>

                    <div className="flex gap-3 bg-primary-50 rounded-xl p-5 mb-6">
                      <Quote className="h-6 w-6 text-primary-400 flex-shrink-0" />
                      <p className="text-gray-800 leading-relaxed italic">{story.quote}</p>
                    </div>

                    <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                      <p>{story.context}</p>
                      <p>{story.support}</p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <p className="text-sm font-semibold text-secondary-700">
                        Today: <span className="font-normal text-gray-700">{story.now}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              There Are More Girls Waiting
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Each of these journeys was made possible by people who decided a young mother’s
              future was worth investing in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Support a Girl’s Journey
              </Link>
              <Link
                href="/programs"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                See How Our Programs Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
