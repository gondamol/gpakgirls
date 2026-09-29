import { challenges } from '@/lib/challenges'

export type NavLink = { name: string; href: string; children?: NavLink[] }
export type NavGroup = { name: string; items: NavLink[] }

// Main menu, grouped into three dropdowns. Programs and Challenges open a side menu.
export const mainNav: NavGroup[] = [
  {
    name: 'About Us',
    items: [
      { name: 'Who We Are', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Our Girls', href: '/stories' },
      { name: 'Accountability', href: '/accountability' },
    ],
  },
  {
    name: 'Our Work',
    items: [
      { name: 'Our Approach', href: '/theory-of-change' },
      {
        name: 'Our Programs',
        href: '/programs',
        children: [
          { name: 'Psychosocial Support & Mental Health', href: '/programs#psychosocial' },
          { name: 'Health & HIV Referrals', href: '/programs#health' },
          { name: 'Education & School Re-entry', href: '/programs#education' },
          { name: 'Livelihoods & Agriculture', href: '/programs#livelihoods' },
          { name: 'Family Strengthening', href: '/programs#family' },
        ],
      },
      {
        name: 'The Challenges',
        href: '/challenges',
        children: challenges.map((c) => ({ name: c.name, href: `/challenges/${c.slug}` })),
      },
      { name: 'Our Impact', href: '/impact' },
    ],
  },
  {
    name: 'Get Involved',
    items: [
      { name: 'Ways to Support', href: '/get-involved' },
      { name: 'Giving Circles', href: '/giving-circles' },
      { name: 'Walk With Her (Monthly)', href: '/walk-with-her' },
      { name: 'Planned Giving', href: '/planned-giving' },
    ],
  },
]

// Slim bar above the main menu
export const topNav: NavLink[] = [
  { name: 'Stories', href: '/stories' },
  { name: 'Accountability', href: '/accountability' },
  { name: 'Contact', href: '/contact' },
]

// True when the current page sits under this group, so its label shows as active
export function groupIsActive(group: NavGroup, pathname: string) {
  return group.items.some((item) => {
    const base = item.href.split('#')[0]
    return pathname === base || pathname.startsWith(`${base}/`)
  })
}
