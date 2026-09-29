import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  User,
  Building2,
  Gift,
  Cake,
  Footprints,
  Church,
  Briefcase,
  Flower2,
  MessageCircle,
  Mail,
  Facebook,
  ArrowRight,
  Smartphone,
  Globe,
  Landmark,
  Repeat,
  ScrollText,
} from 'lucide-react'
import ShareKit from '@/components/ShareKit'
import OccasionRotator from '@/components/OccasionRotator'
import SupportFeature from '@/components/SupportFeature'

export const metadata: Metadata = {
  title: 'Ways to Support - Fundraise, Give, Volunteer, Partner',
  description:
    'Ways to support adolescent mothers in western Kenya with GPAK Girls: start a fundraiser, host a gathering, dedicate a gift, join a giving circle, volunteer, or partner with us as a business or group.',
}

const heroOccasions = [
  'birthday',
  'wedding',
  'marathon',
  'graduation',
  'chama',
  'harvest Sunday',
  'office party',
]

const audiences = [
  {
    icon: User,
    title: 'For individuals',
    text: 'Fundraise, dedicate a gift, give monthly or volunteer',
    href: '#individuals',
  },
  {
    icon: Building2,
    title: 'For businesses and groups',
    text: 'Partner, host an event, or give through your company',
    href: '#groups',
  },
]

const partnerWays = [
  'Project partnerships and programme funding',
  'Technical collaboration with NGOs and health partners',
  'Skills training and employment pathways for graduates',
  'Research and learning collaborations',
]

const occasions = [
  { icon: Cake, label: 'Your birthday' },
  { icon: Footprints, label: 'A run, walk or cycle' },
  { icon: Church, label: 'Church, school or chama' },
  { icon: Briefcase, label: 'Your workplace' },
  { icon: Flower2, label: 'In memory of someone' },
]

const fundraiserSteps = [
  {
    title: 'Tell us your plan',
    text: 'Send us a WhatsApp or email with your occasion and dates. We send you photos, a short story about the girls, and a message you can post.',
  },
  {
    title: 'Ask your people',
    text: 'Friends give straight to GPAK by M-Pesa on 0725 737 867, or your group collects and sends one transfer. Use the share tool below to get the word out.',
  },
  {
    title: 'See what it did',
    text: 'We confirm every shilling received, thank your supporters, and send you an update on what your fundraiser paid for.',
  },
]

const FUNDRAISER_WHATSAPP = `https://wa.me/254725737867?text=${encodeURIComponent(
  'Hi GPAK Girls, I would like to start a fundraiser for you. My occasion is: '
)}`

const DEDICATE_EMAIL = `mailto:info@gpakgirls.org?subject=${encodeURIComponent(
  'A gift in someone’s name'
)}&body=${encodeURIComponent(
  'Hello GPAK Girls,\n\nI would like to dedicate a gift.\n\nIn honour of / in memory of (please choose): \nTheir name: \nTheir email or phone, for your note: \nMy name: \nHow I will give (M-Pesa / bank transfer / diaspora app): '
)}`

const MATCHING_EMAIL = `mailto:info@gpakgirls.org?subject=${encodeURIComponent(
  'Employer matching gift'
)}&body=${encodeURIComponent(
  'Hello GPAK Girls,\n\nMy employer may match my gift. Please send the documents for their matching programme.\n\nMy name: \nMy employer: \nWhat they need (if known): '
)}`

const waysToGive = [
  {
    icon: Smartphone,
    title: 'M-Pesa',
    text: 'Send Money to 0725 737 867, Girl Pride Africa Kenya. The quickest way to give from Kenya.',
    href: '/donate',
  },
  {
    icon: Globe,
    title: 'From abroad',
    text: 'WorldRemit, Sendwave and Taptap Send deliver straight to our M-Pesa line from most countries.',
    href: '/donate',
  },
  {
    icon: Landmark,
    title: 'Bank transfer',
    text: 'Best for larger gifts. Message us and we send the organization’s account details.',
    href: '/donate',
  },
  {
    icon: Repeat,
    title: 'Monthly',
    text: 'Walk With Her, our monthly circle, from KES 1,000 / EUR 10 a month.',
    href: '/walk-with-her',
  },
  {
    icon: ScrollText,
    title: 'A gift in your will',
    text: 'Leave a legacy for girls not yet born. Sample wording and our details for your adviser.',
    href: '/planned-giving',
  },
  {
    icon: Gift,
    title: 'In-kind gifts',
    text: 'Sewing machines, hairdressing equipment, school supplies and baby essentials.',
    href: '/contact',
  },
]

const eventIdeas = [
  'A harvest Sunday or special offering at church',
  'A school walk, sports day or talent show',
  'A chama or women’s group contribution',
  'An office end-of-year party or casual Friday',
]

const EVENT_WHATSAPP = `https://wa.me/254725737867?text=${encodeURIComponent(
  'Hi GPAK Girls, our group would like to host an event for you. We are: '
)}`

const companyWays = [
  'Matching your staff’s gifts, or payroll giving',
  'In-kind gifts: sewing machines, salon equipment, farm inputs, school supplies',
  'Apprenticeships, internships and jobs for programme graduates',
  'Staff volunteering: mentoring, business skills, accounting, IT',
  'Corporate social responsibility programmes built with us',
]

const volunteerRoles = [
  'Mentors for teen mothers',
  'Vocational skills trainers',
  'Academic tutors',
  'Counseling support volunteers',
  'Event organizers',
  'Social media and communications',
  'Fundraising coordinators',
  'Administrative support',
]

export default function GetInvolvedPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Image
          src="/images/annie-spratt-0cgpyigyIkM-unsplash.jpg"
          alt="Girls and women smiling and clapping at a community gathering"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-700/60" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-100 mb-4">
              Ways to Support
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your <OccasionRotator words={heroOccasions} /> could change a young mother’s life.
            </h1>
            <p className="text-xl text-primary-50 leading-relaxed">
              Whether you give on your own or with your church, school, chama or company, there is
              a way to walk with her that fits you.
            </p>
          </div>
        </div>
      </section>

      {/* Audience chooser */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
            {audiences.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 p-6 hover:border-primary-600 hover:bg-primary-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 group-hover:bg-white rounded-xl flex-shrink-0">
                  <a.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">{a.title}</div>
                  <div className="text-sm text-gray-600">{a.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* For individuals */}
      <section id="individuals" className="scroll-mt-24 pt-12 md:pt-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            For Individuals
          </h2>
        </div>
      </section>

      {/* Start a Fundraiser */}
      <section id="fundraise" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="section-heading">Start a Fundraiser</h3>
              <p className="section-subheading mx-auto">
                Turn a birthday, a run or a Sunday collection into school fees, clinic visits and
                a fresh start for a young mother. You bring the people; we help with the rest.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {occasions.map((o) => (
                <span
                  key={o.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700"
                >
                  <o.icon className="h-4 w-4 text-primary-600" />
                  {o.label}
                </span>
              ))}
            </div>

            <ol className="grid md:grid-cols-3 gap-6 mb-10">
              {fundraiserSteps.map((step, i) => (
                <li key={step.title} className="bg-white rounded-xl border border-gray-200 p-6">
                  <span className="inline-flex w-9 h-9 rounded-full bg-primary-600 text-white font-bold items-center justify-center mb-4">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={FUNDRAISER_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Start a fundraiser on WhatsApp
              </a>
              <a
                href={`mailto:info@gpakgirls.org?subject=${encodeURIComponent('I want to start a fundraiser')}`}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Or email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* More ways for individuals */}
      <section id="more-ways" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            <SupportFeature
              id="gathering"
              title="Host a Gathering"
              image="/images/mentorship.jpg"
              imageAlt="A group of young women smiling together"
              highlight="KES 1,000, about the price of a meal out, funds one girl-month: fortnightly mentor visits, transport to the clinic, and her place in a peer support group. Ten guests at a dinner can fund ten."
              cta={{ label: 'Tell us about your gathering', href: FUNDRAISER_WHATSAPP, external: true }}
            >
              <p>
                A dinner, a movie night, a nyama choma or a women’s group meeting can become a
                fundraiser. Invite your friends, share a few words about the girls, and ask each
                guest to give what they would spend on a night out.
              </p>
              <p>We send you photos, a short story and a message to read or share on the day.</p>
            </SupportFeature>

            <SupportFeature
              id="dedicate"
              title="Dedicate a Gift"
              image="/images/educational.jpg"
              imageAlt="A graduate holding flowers, celebrating with a friend"
              reverse
              cta={{ label: 'Dedicate a gift by email', href: DEDICATE_EMAIL, external: true }}
            >
              <p>
                Honour a mother, a teacher, a friend or someone you have lost with a gift that
                helps a young mother finish school or learn a trade. It makes a thoughtful present
                for birthdays, Mother’s Day, weddings and graduations.
              </p>
              <p>
                When you give, tell us the person’s name and email or phone number. We send them a
                note to say a gift has been made in their name, and what it will do. The amount
                stays private unless you ask us to share it.
              </p>
            </SupportFeature>

            <SupportFeature
              id="matching"
              title="Double It With Your Employer"
              image="/images/soweto-graphics-1nQJf4oN5Xk-unsplash.jpg"
              imageAlt="A young woman, a mother and a baby standing together on a street"
              cta={{ label: 'Ask us for matching documents', href: MATCHING_EMAIL, external: true }}
            >
              <p>
                Many employers match the gifts their staff make to registered organizations,
                sometimes doubling or tripling them. Ask your HR or giving team whether your
                company has a matching programme and what it needs from us.
              </p>
              <p>
                Each programme sets its own rules, and some only match gifts to organizations
                registered in their own country. We gladly send our registration certificate,
                receipts and any forms your employer asks us to complete.
              </p>
            </SupportFeature>
          </div>
        </div>
      </section>

      {/* Giving circles */}
      <section id="circles" className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 md:p-12 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Join a Giving Circle</h3>
              <p className="text-primary-50 leading-relaxed">
                Our circles are communities of steady givers who make it possible to promise a
                young mother the whole journey. Four yearly circles, named in Dholuo, from Hera to
                Rieko, plus Walk With Her for monthly gifts. Members receive field letters and a
                yearly summary built from our programme records.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/giving-circles"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                See the circles
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/walk-with-her"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Give monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section id="ways-to-give" className="section pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="section-heading">Ways to Give</h3>
              <p className="section-subheading mx-auto">
                Every gift goes to the organization’s account and is confirmed with a receipt.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {waysToGive.map((way) => (
                <Link
                  key={way.title}
                  href={way.href}
                  className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-600 transition-colors"
                >
                  <way.icon className="h-8 w-8 text-primary-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {way.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{way.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spread the Word */}
      <section id="awareness" className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="section-heading">Spread the Word</h3>
              <p className="section-subheading mx-auto">
                Sharing costs nothing and reaches people we never could. Pick a ready-made
                message, change it if you like, and post it in a tap.
              </p>
            </div>
            <ShareKit />
            <p className="text-center text-sm text-gray-600 mt-6">
              <a
                href="https://www.facebook.com/girlpridekenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
              >
                <Facebook className="h-4 w-4" />
                Follow GPAK Girls on Facebook
              </a>
              <span className="block mt-1">and share our posts when they move you.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="scroll-mt-24 section bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Volunteer With Us</h3>
            <p className="text-xl text-primary-100 mb-8">
              Share your time and skills with young mothers in Homa Bay, in person or remotely.
              We are looking for volunteers in these roles:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
              {volunteerRoles.map((role, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-medium">✓ {role}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply to Volunteer
              </Link>
              <Link
                href="/about"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For businesses and groups */}
      <section id="groups" className="scroll-mt-24 section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-600 text-center mb-12">
            For Businesses and Groups
          </h2>
          <div className="space-y-16 md:space-y-20">
            <SupportFeature
              id="partner"
              title="Partner With Us"
              image="/images/annie-spratt-W3WO3QQwAxM-unsplash.jpg"
              imageAlt="A young mother walking with her baby on her back"
              bullets={partnerWays}
              cta={{ label: 'Start a partnership conversation', href: '/contact' }}
            >
              <p>
                Funders, NGOs, businesses and institutions can create lasting change through
                strategic partnerships. Programme documentation, results data and our due
                diligence pack are available on request.
              </p>
            </SupportFeature>

            <SupportFeature
              id="event"
              title="Host an Event"
              image="/images/topsphere-media-fA29oQ0cpcY-unsplash.jpg"
              imageAlt="Women and children seated together at a community gathering"
              reverse
              bullets={eventIdeas}
              cta={{ label: 'Plan an event with us', href: EVENT_WHATSAPP, external: true }}
            >
              <p>
                Churches, schools, chamas, clubs and workplaces can raise funds together. Your
                group collects and sends one transfer by M-Pesa or bank, and we confirm what was
                received and report back on what it paid for.
              </p>
            </SupportFeature>

            <SupportFeature
              id="company"
              title="Give Through Your Company"
              image="/images/vocationl.jpg"
              imageAlt="A tailoring workshop with rows of sewing machines"
              bullets={companyWays}
              cta={{ label: 'Talk to us about company giving', href: '/contact' }}
            >
              <p>
                Businesses can put their giving, their skills and their jobs to work for young
                mothers. We shape each partnership around what your company does best, and report
                on it with figures from our programme records.
              </p>
            </SupportFeature>
          </div>
        </div>
      </section>

    </main>
  )
}

