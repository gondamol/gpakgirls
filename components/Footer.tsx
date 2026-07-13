import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Impact & Learning', href: '/impact' },
    { name: 'Accountability', href: '/accountability' },
    { name: 'Contact Us', href: '/contact' },
  ],
  programs: [
    { name: 'Psychosocial Support', href: '/programs#psychosocial' },
    { name: 'Health & HIV Referrals', href: '/programs#health' },
    { name: 'Education Support', href: '/programs#education' },
    { name: 'Livelihoods & FAHARI', href: '/programs#livelihoods' },
    { name: 'Family Strengthening', href: '/programs#family' },
  ],
  getInvolved: [
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Partner With Us', href: '/get-involved#partner' },
    { name: 'Stories', href: '/stories' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Safeguarding', href: '/accountability#safeguarding' },
  ],
}

const socialMedia = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">GPAK Girls</h3>
            <p className="text-sm mb-6">
              Girl Pride Africa Kenya walks alongside adolescent mothers and pregnant girls in
              western Kenya — with psychosocial support, health referrals, education, livelihoods,
              and family strengthening.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-400" />
                <span>Homa Bay Town, Homa Bay County, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span>+254 725 737 867</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span>info@gpakgirls.org</span>
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
              © {new Date().getFullYear()} Girl Pride Africa Kenya (GPAK Girls). A registered
              organization working in Homa Bay, Siaya, Kisumu, and Migori counties.
            </p>
            <div className="flex gap-6 text-sm">
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

