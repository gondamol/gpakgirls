import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'

const navigation = {
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Model', href: '/our-model' },
    { name: 'Theory of Change', href: '/our-model#theory-of-change' },
    { name: 'Our Team', href: '/team' },
    { name: 'Stories', href: '/stories' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Impact & Learning', href: '/impact' },
    { name: 'Accountability', href: '/accountability' },
    { name: 'Contact Us', href: '/contact' },
  ],
  programs: [
    { name: 'Psychosocial Support & Mental Health', href: '/programs#psychosocial' },
    { name: 'Health & HIV Referrals', href: '/programs#health' },
    { name: 'Education Support', href: '/programs#education' },
    { name: 'Livelihoods & Agriculture', href: '/programs#livelihoods' },
    { name: 'Family Strengthening', href: '/programs#family' },
    { name: 'How We Use Technology', href: '/programs#technology' },
  ],
  getInvolved: [
    { name: 'Donate', href: '/donate' },
    { name: 'Ways to Support', href: '/get-involved' },
    { name: 'Giving Circles', href: '/giving-circles' },
    { name: 'Walk With Her (Monthly)', href: '/walk-with-her' },
    { name: 'Planned Giving', href: '/planned-giving' },
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Partner With Us', href: '/get-involved#partner' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Safeguarding', href: '/accountability#safeguarding' },
    { name: 'Registration', href: '/accountability#registration' },
  ],
}

const socialMedia = [
  { name: 'Facebook', href: 'https://www.facebook.com/girlpridekenya', icon: Facebook },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-5">
              <Image
                src="/brand/footer-logo-white.svg"
                alt="GPAK Girls, Girl Pride Africa Kenya. Walk with her."
                width={1040}
                height={300}
                unoptimized
                className="h-16 w-auto"
              />
            </h3>
            <p className="text-sm mb-6">
              Girl Pride Africa Kenya walks alongside adolescent mothers and pregnant girls in
              western Kenya, with psychosocial and mental health support, health referrals,
              education, agriculture and livelihoods, and family strengthening.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span>
                  Homa Bay Town, Homa Bay County, Kenya
                  <br />
                  P.O. Box 189-40300, Homa Bay
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span>
                  Registered NGO, NGOs Co-ordination Board of Kenya, Reg. No.
                  OP.218/051/19-189/11666
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="tel:+254725737867" className="hover:text-white transition-colors">+254 725 737 867</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@gpakgirls.org" className="hover:text-white transition-colors">info@gpakgirls.org</a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              {navigation.getInvolved.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Girl Pride Africa Kenya (GPAK Girls). Working in Homa
              Bay, Siaya, Kisumu, and Migori counties, with early community engagement in South
              Sudan.
            </p>
            <div className="flex gap-6 text-sm whitespace-nowrap">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

