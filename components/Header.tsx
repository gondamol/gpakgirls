'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { challenges } from '@/lib/challenges'

type NavItem = { name: string; href: string; children?: { slug: string; name: string }[] }

const navigation: NavItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Challenges', href: '/challenges', children: challenges },
  { name: 'Impact', href: '/impact' },
  { name: 'Stories', href: '/stories' },
  { name: 'Team', href: '/team' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileChallengesOpen, setMobileChallengesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!dropdownOpen) return
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdownOpen])

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
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors touch-target ${
                      dropdownOpen || pathname.startsWith(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen((open) => !open)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                      <ul className="w-72 bg-white rounded-xl shadow-lg ring-1 ring-gray-900/5 py-2">
                        {item.children.map((child) => (
                          <li key={child.slug}>
                            <Link
                              href={`${item.href}/${child.slug}`}
                              className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                        <li className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            href={item.href}
                            className="block px-5 py-2.5 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                          >
                            All challenges
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors touch-target"
                >
                  {item.name}
                </Link>
              )
            )}
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
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    type="button"
                    className="w-full py-3.5 px-4 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors min-h-[44px] flex items-center justify-between active:bg-primary-100"
                    aria-expanded={mobileChallengesOpen}
                    onClick={() => setMobileChallengesOpen((open) => !open)}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${mobileChallengesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileChallengesOpen && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.slug}
                          href={`${item.href}/${child.slug}`}
                          className="block py-3 px-4 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors min-h-[44px] flex items-center"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-md transition-colors min-h-[44px] flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All challenges
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3.5 px-4 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors min-h-[44px] flex items-center active:bg-primary-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

