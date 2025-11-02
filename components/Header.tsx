'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Stories', href: '/stories' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3 sm:py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-primary-600">
                GPAK Girls
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors touch-target"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:flex">
            <Link
              href="/donate"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/donate"
              className="btn-primary text-sm px-3 sm:px-4 py-2 min-h-[44px] inline-flex items-center justify-center"
            >
              Donate
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2.5 min-h-[44px] min-w-[44px] rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-2 border-t border-gray-200 animate-in slide-in-from-top">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3.5 px-4 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors min-h-[44px] flex items-center active:bg-primary-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

