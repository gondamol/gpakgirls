import Link from 'next/link'
import { Facebook, Mail } from 'lucide-react'
import { topNav } from '@/lib/navigation'

// Slim bar above the main menu, shown on large screens only; the mobile menu repeats these links.
export default function TopBar() {
  return (
    <div className="hidden lg:block bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-7 py-2 text-sm font-semibold">
        {topNav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-accent-300 transition-colors">
            {item.name}
          </Link>
        ))}
        <span className="flex items-center gap-4 border-l border-white/40 pl-6">
          <a
            href="https://www.facebook.com/girlpridekenya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GPAK Girls on Facebook"
            className="hover:text-accent-300 transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="mailto:info@gpakgirls.org"
            aria-label="Email info@gpakgirls.org"
            className="hover:text-accent-300 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </span>
      </div>
    </div>
  )
}
