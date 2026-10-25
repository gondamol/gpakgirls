import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Home,
  ArrowRight,
  Stethoscope,
  School,
  UserRound,
  Landmark,
  HandHeart,
  Megaphone,
} from 'lucide-react'
import JourneyStepper, { type JourneyStep } from '@/components/JourneyStepper'

export const metadata: Metadata = {
  title: 'Our Model and Theory of Change',
  description:
    'How GPAK Girls works: the threats adolescent girls face in western Kenya, one girl’s journey through our support, and our theory of change from reaching a girl in crisis to a young mother and her child thriving.',
}

const threats = [
  {
    name: 'Early pregnancy',
    stat: '23%',
    text: 'of girls aged 15 to 19 in Homa Bay County have begun childbearing, against 15% nationally.',
    source: { name: 'Kenya Demographic and Health Survey 2022', href: 'https://www.knbs.or.ke/reports/kdhs-2022/' },
  },
  {
    name: 'HIV',
    stat: '15.2%',
    text: 'adult HIV prevalence in Homa Bay, the highest in Kenya; young people aged 15 to 24 account for 41% of new infections.',
    source: { name: 'Kenya HIV Estimates 2022', href: 'https://analytics.nsdcc.go.ke/estimates/' },
  },
  {
    name: 'Violence',
    stat: '34%',
    text: 'of Kenyan women aged 15 to 49 have experienced physical violence since age 15.',
    source: { name: 'Kenya Demographic and Health Survey 2022', href: 'https://www.knbs.or.ke/reports/kdhs-2022/' },
  },
]

const gaps = [
  {
    title: 'Stigma',
    text: 'Schools, clinics and neighbours judge a pregnant girl, so she stays away from the very places that could help.',
  },
  {
    title: 'Rejection at home',
    text: 'Many girls are sent away by their families, leaving them alone with a baby, no income and no one to talk to.',
  },
  {
    title: 'Distance and cost',
    text: 'School fees, childcare, transport to a clinic: each small cost becomes a wall when she has nothing.',
  },
]

const journey: JourneyStep[] = [
  {
    title: 'Pushed out',
    pillar: 'The challenge',
    text: 'Achieng is 15 and lives in Homa Bay. When her pregnancy shows, she stops going to school, and her father sends her to stay with an aunt. She has no money, no one to talk to, and has not seen a nurse.',
    image: '/images/annie-spratt-W3WO3QQwAxM-unsplash.jpg',
  },
  {
    title: 'A knock on the door',
    pillar: 'Reach',
    text: 'A community volunteer tells a mentor mother about her. The mentor mother, who lives in the next village, visits. The first conversation is about how Achieng is feeling, not about what she did.',
    image: '/images/mentorship.jpg',
  },
  {
    title: 'Someone to talk to',
    pillar: 'Psychosocial support and mental health',
    text: 'Achieng is screened for depression and anxiety, and starts counselling. She joins a weekly circle of girls in the same situation, and for the first time she is welcomed instead of judged.',
    image: '/images/Counseling.jpg',
  },
  {
    title: 'To the clinic, together',
    pillar: 'Health and HIV referrals',
    text: 'Her mentor goes with her to her first antenatal visit. She is tested for HIV and followed up through the birth, the postnatal checks and her baby’s first vaccinations.',
    image: '/images/black-linear-studios-MqsfK5ZjZ2s-unsplash.jpg',
  },
  {
    title: 'Home again',
    pillar: 'Family strengthening',
    text: 'Through a parenting programme, the team sits down with her father and aunt. Over a few months the family reconciles, and Achieng and her baby move back home.',
    image: '/images/annie-spratt-yrzBgqapG1I-unsplash.jpg',
  },
  {
    title: 'Back to class, or a trade',
    pillar: 'Education and livelihoods',
    text: 'GPAK Girls negotiates her return to school and helps arrange childcare. A girl for whom school is no longer realistic trains in tailoring or hairdressing instead, with a starter kit.',
    image: '/images/educational.jpg',
  },
  {
    title: 'Walking with others',
    pillar: 'Peer champions',
    text: 'A year on, Achieng is back in class and wants to train as a health worker. She now helps lead a peer group, walking with the next girl who arrives where she once stood.',
    image: '/images/annie-spratt-0cgpyigyIkM-unsplash.jpg',
  },
]

// The four moves of the theory of change, unchanged from the original page.
const pathway = [
  {
    icon: Users,
    title: 'Reach girls where they are',
    text: 'Trained mentor mothers in each community, alongside schools and health workers, identify pregnant girls and adolescent mothers aged 13–23 who have dropped out of school, been rejected by family, or lost access to services.',
  },
  {
    icon: HeartHandshake,
    title: 'Stabilize and support',
    text: 'Psychosocial counselling, peer groups, and case management address trauma and stigma first, while referrals connect each girl to HIV testing and care, PMTCT, antenatal and postnatal services, child health support, and menstrual health.',
  },
  {
    icon: GraduationCap,
    title: 'Build a future',
    text: 'School re-entry, literacy and life-skills classes, vocational training, and agriculture-based livelihoods give each mother a realistic path to income and independence.',
  },
  {
    icon: Home,
    title: 'Strengthen the family around her',
    text: 'Parenting and caregiver support informed by evidence-based approaches such as the Sinovuyo programme rebuilds the home environment, so gains last beyond our direct involvement.',
  },
]

const circle = [
  { icon: HeartHandshake, title: 'Mentor mothers', text: 'Women from her village who visit at home and make referrals' },
  { icon: Users, title: 'Peer champions', text: 'Young women who lead peer groups for girls like them' },
  { icon: HandHeart, title: 'Counselling facilitators', text: 'Trained in psychosocial support, with clinical supervision' },
  { icon: Megaphone, title: 'Community volunteers', text: 'Who find girls who need support and mobilise families' },
  { icon: Stethoscope, title: 'Health facilities', text: 'Where she receives antenatal, HIV and postnatal care' },
  { icon: School, title: 'Schools', text: 'That welcome her back and help her stay' },
  { icon: UserRound, title: 'Her family', text: 'Supported to reconcile, and to stand with her' },
  { icon: Landmark, title: 'Local leaders', text: 'Chiefs and elders who open doors in the community' },
]

const gifts = [
  { amount: '$25', text: 'School supplies for two girls returning to class' },
  { amount: '$50', text: 'A month of school fees and childcare for a young mother' },
  { amount: '$100', text: 'Counselling and accompanied health referrals for a girl and her baby' },
  { amount: '$250', text: 'Vocational training with a starter kit at graduation' },
]

export default function OurModelPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fffaf3]">
        <div className="container py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-primary-600">Our model</p>
              <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-gray-900 text-balance">
                Pushed out of school, out of home, out of care.{' '}
                <span className="text-primary-600">We walk with her back.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                GPAK Girls supports adolescent girls and young women aged 13 to 23 in western Kenya, including pregnant
                girls and young mothers, and their children. Our model connects each girl to the care, learning and family
                support that already exist around her, through mentors from her own village.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#journey" className="btn-primary">
                  Follow a girl’s journey
                </a>
                <a href="#theory-of-change" className="btn-outline">
                  Our theory of change
                </a>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-bl-[8rem]">
                <Image
                  src="/images/soweto-graphics-1nQJf4oN5Xk-unsplash.jpg"
                  alt="A young woman and a mother holding a baby, smiling"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">Photo for illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="section bg-white">
        <div className="container">
          <p className="text-sm font-semibold text-primary-600">The challenge</p>
          <h2 className="section-heading mt-2">Three threats meet in one girl’s life</h2>
          <p className="section-subheading">
            In the communities around Lake Victoria, teenage pregnancy is closely tied to HIV risk, unequal relationships,
            and limited access to youth-friendly health services. A girl who becomes a mother at fourteen or sixteen here
            usually loses school, family support and safety at the same time.
          </p>
          <div className="mt-10 grid border-t-2 border-gray-200 md:grid-cols-3">
            {threats.map((t, i) => (
              <div
                key={t.name}
                className={`py-7 md:pr-8 ${i > 0 ? 'border-t-2 md:border-t-0 md:border-l-2 border-gray-200 md:pl-8' : ''}`}
              >
                <h3 className="font-semibold text-primary-600">{t.name}</h3>
                <p className="mt-2 font-display text-6xl md:text-7xl font-bold text-secondary-600 tabular-nums">{t.stat}</p>
                <p className="mt-3 text-gray-600 leading-relaxed">{t.text}</p>
                <a href={t.source.href} className="mt-3 inline-block text-xs text-gray-500 underline underline-offset-2">
                  {t.source.name}
                </a>
              </div>
            ))}
          </div>
          <Link
            href="/challenges"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
          >
            See the challenges girls face here
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Why girls fall through the gaps */}
      <section className="section bg-[#f6ede1]">
        <div className="container">
          <p className="text-sm font-semibold text-primary-600">Why girls fall through the gaps</p>
          <h2 className="section-heading mt-2">Kenya has the policies. Girls still miss out.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {gaps.map((g, i) => (
              <div key={g.title} className="rounded-3xl bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 font-display text-xl font-bold text-primary-600">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{g.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="section scroll-mt-24 bg-secondary-800">
        <div className="container">
          <p className="text-sm font-semibold text-accent-400">How we work</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">Achieng’s journey</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">Follow one girl through the GPAK Girls model, step by step.</p>
          <div className="mt-10">
            <JourneyStepper steps={journey} />
          </div>
          <p className="mt-8 text-sm text-white/60">
            Achieng is a composite drawn from the girls we work with. Her name and details are illustrative, and the
            photographs are not of her.
          </p>
        </div>
      </section>

      {/* Theory of change */}
      <section id="theory-of-change" className="section scroll-mt-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary-600">Our theory of change</p>
            <p className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900 text-balance">
              When a young mother is emotionally supported, connected to health care, back in education or earning, and
              backed by her family, she and her child thrive, and the cycle of early pregnancy and HIV vulnerability
              weakens with her.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Nearly one in four girls aged 15 to 19 in Homa Bay has begun childbearing, and Homa Bay has the highest HIV
              prevalence in Kenya, with its neighbouring counties among the most affected. That is why our model responds to
              all of it together, rather than one issue at a time: four connected moves, in order, each building on the one
              before it.
            </p>
          </div>

          <ol className="mt-12 grid gap-0 lg:grid-cols-4">
            {pathway.map((step, i) => {
              const Icon = step.icon
              const rule = ['bg-secondary-600', 'bg-primary-600', 'bg-accent-500', 'bg-earth-600'][i]
              return (
                <li key={step.title} className="relative pb-10 lg:pb-0 lg:pr-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-50 text-secondary-600">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-primary-600">Move {i + 1}</span>
                  </div>
                  <div className={`mt-4 h-1.5 rounded-full ${rule}`} />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{step.text}</p>
                </li>
              )
            })}
          </ol>

          <div className="mt-12 rounded-3xl bg-secondary-600 p-8 md:p-10 text-white md:flex md:items-center md:gap-10">
            <div className="md:flex-1">
              <p className="text-sm font-semibold text-accent-400">The outcome</p>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">She and her child thrive</h3>
              <p className="mt-3 text-white/85 leading-relaxed max-w-3xl">
                Stabilized, in care, back on a path to income, and held by a stronger family, a young mother is positioned
                to break the cycle of early pregnancy and HIV vulnerability for herself and her child.
              </p>
            </div>
            <Link
              href="/programs"
              className="mt-6 md:mt-0 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-6 font-semibold text-secondary-700 hover:bg-secondary-50"
            >
              See each step in our programs
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who walks with her */}
      <section className="section bg-[#f6ede1]">
        <div className="container">
          <p className="text-sm font-semibold text-primary-600">Who walks with her</p>
          <h2 className="section-heading mt-2">A circle of people around every girl</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {circle.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="rounded-3xl bg-white p-6">
                  <Icon className="h-7 w-7 text-primary-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{c.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What it takes */}
      <section className="section bg-white">
        <div className="container">
          <p className="text-sm font-semibold text-primary-600">Be part of the solution</p>
          <h2 className="section-heading mt-2">What it takes to walk with her</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {gifts.map((g) => (
                <div key={g.amount} className="rounded-2xl border border-gray-200 p-6">
                  <p className="font-display text-4xl font-bold text-primary-600 tabular-nums">{g.amount}</p>
                  <p className="mt-2 text-gray-700 leading-snug">{g.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-primary-600 p-8 text-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold">Walk With Her, every month</h3>
              <p className="mt-3 text-white/90 leading-relaxed">
                From KES 1,000 or EUR 10 a month, carry a young mother from her first day with us to graduation, with a
                quarterly letter from the field.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/walk-with-her"
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-6 font-semibold text-primary-700 hover:bg-primary-50"
                >
                  Join the circle
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex min-h-[44px] items-center rounded-lg border-2 border-white px-6 font-semibold text-white hover:bg-white/10"
                >
                  Give once
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Figures on this page come from national sources. Results from GPAK Girls programme records are reported on our{' '}
            <Link href="/impact" className="underline underline-offset-2">
              impact page
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
