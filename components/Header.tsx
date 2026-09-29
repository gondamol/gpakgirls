'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X, Facebook, Mail } from 'lucide-react'
import { mainNav, topNav, groupIsActive, type NavLink } from '@/lib/navigation'

function Caret({ open = false }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 10 6"
      className={`h-2 w-3 fill-current transition-transform ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M0 0h10L5 6z" />
    </svg>
  )
}

const menuLink =
  'flex items-center justify-between gap-6 px-6 py-4 text-base font-medium whitespace-nowrap border-t border-white/25 hover:bg-primary-700/50 hover:text-accent-200 focus-visible:bg-primary-700/50 focus-visible:text-accent-200 outline-none transition-colors'

function DropdownItem({ item, first, onNavigate }: { item: NavLink; first: boolean; onNavigate: () => void }) {
  const border = first ? ' border-t-0' : ''
  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={menuLink + border} onClick={onNavigate}>
          {item.name}
        </Link>
      </li>
    )
  }
  return (
    <li className="relative group/sub">
      <Link href={item.href} className={menuLink + border} onClick={onNavigate} aria-haspopup="true">
        {item.name}
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <ul className="absolute left-full top-0 min-w-[300px] bg-primary-600 shadow-xl hidden group-hover/sub:block group-focus-within/sub:block">
        {item.children.map((child, i) => (
          <li key={child.href}>
            <Link href={child.href} className={menuLink + (i === 0 ? ' border-t-0' : '')} onClick={onNavigate}>
              {child.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileGroup, setMobileGroup] = useState<string | null>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setOpenMenu(null)
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!openMenu) return
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openMenu])

  const closeMenus = () => {
    setOpenMenu(null)
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-primary-700 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex w-full items-center justify-between py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/brand/header-logo-mobile-white.svg"
              alt="GPAK Girls, Girl Pride Africa Kenya"
              width={1040}
              height={300}
              priority
              unoptimized
              className="h-11 w-auto sm:hidden"
            />
            <Image
              src="/brand/header-logo-white.svg"
              alt="GPAK Girls, Girl Pride Africa Kenya. Walk with her."
              width={1040}
              height={300}
              priority
              unoptimized
              className="hidden sm:block h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop menu */}
          <ul ref={navRef} className="hidden lg:flex lg:items-center lg:gap-1">
            {mainNav.map((group) => {
              const open = openMenu === group.name
              const active = open || groupIsActive(group, pathname)
              return (
                <li
                  key={group.name}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(group.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => setOpenMenu(group.name)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null)
                  }}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2.5 px-4 xl:px-5 py-3 text-[17px] font-semibold border-b-2 transition-colors touch-target ${
                      active ? 'text-accent-400' : 'text-white hover:text-accent-400'
                    } ${open ? 'border-white' : 'border-transparent'}`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(open ? null : group.name)}
                  >
                    {group.name}
                    <Caret open={open} />
                  </button>
                  {open && (
                    <ul className="absolute left-0 top-full min-w-[250px] bg-primary-600 shadow-xl">
                      {group.items.map((item, i) => (
                        <DropdownItem key={item.href} item={item} first={i === 0} onNavigate={closeMenus} />
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Donate */}
          <div className="flex items-center gap-2">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-accent-400 text-earth-600 font-bold min-h-[44px] px-5 lg:px-8 lg:py-3 lg:text-lg hover:bg-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700 transition-colors"
            >
              Donate
            </Link>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2.5 min-h-[44px] min-w-[44px] rounded-md text-white hover:bg-primary-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
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
          <div className="lg:hidden border-t border-white/20 pb-4 max-h-[calc(100vh-72px)] overflow-y-auto">
            {mainNav.map((group) => {
              const open = mobileGroup === group.name
              return (
                <div key={group.name} className="border-b border-white/15">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-4 px-2 text-base font-semibold min-h-[44px]"
                    aria-expanded={open}
                    onClick={() => setMobileGroup(open ? null : group.name)}
                  >
                    <span className={groupIsActive(group, pathname) ? 'text-accent-400' : ''}>{group.name}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {open && (
                    <ul className="pb-3 pl-4">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="flex items-center min-h-[44px] px-2 text-[15px] font-medium text-primary-50 hover:text-accent-300"
                            onClick={closeMenus}
                          >
                            {item.name}
                          </Link>
                          {item.children && (
                            <ul className="ml-3 mb-2 border-l border-white/25 pl-3">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="flex items-center min-h-[40px] px-2 text-sm text-primary-100 hover:text-accent-300"
                                    onClick={closeMenus}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 px-2 text-sm font-semibold">
              {topNav.map((item) => (
                <Link key={item.href} href={item.href} className="min-h-[44px] inline-flex items-center hover:text-accent-300" onClick={closeMenus}>
                  {item.name}
                </Link>
              ))}
              <a href="https://www.facebook.com/girlpridekenya" target="_blank" rel="noopener noreferrer" aria-label="GPAK Girls on Facebook" className="min-h-[44px] inline-flex items-center hover:text-accent-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@gpakgirls.org" aria-label="Email info@gpakgirls.org" className="min-h-[44px] inline-flex items-center hover:text-accent-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
