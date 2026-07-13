import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Girl Pride Africa Kenya (GPAK Girls) - Supporting Adolescent Mothers in Western Kenya',
    template: '%s | Girl Pride Africa Kenya',
  },
  description:
    'GPAK Girls is a community-rooted organization in western Kenya supporting adolescent mothers and pregnant girls aged 13–23 through psychosocial support, HIV and maternal health referrals, education, livelihoods, and family strengthening.',
  keywords: [
    'GPAK Girls',
    'Girl Pride Africa Kenya',
    'adolescent mothers Kenya',
    'teen mothers Homa Bay',
    'teenage pregnancy western Kenya',
    'HIV prevention adolescents Kenya',
    'maternal and child health Kenya',
    'girls education Kenya',
    'NGO Homa Bay',
  ],
  authors: [{ name: 'Girl Pride Africa Kenya' }],
  creator: 'Girl Pride Africa Kenya',
  publisher: 'Girl Pride Africa Kenya',
  metadataBase: new URL('https://www.gpakgirls.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.gpakgirls.org',
    siteName: 'Girl Pride Africa Kenya',
    title: 'Girl Pride Africa Kenya (GPAK Girls) - Supporting Adolescent Mothers in Western Kenya',
    description:
      'Community-rooted support for adolescent mothers and pregnant girls in Homa Bay, Siaya, Kisumu, and Migori: psychosocial care, health referrals, education, livelihoods, and family strengthening.',
    images: [
      {
        url: '/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg',
        width: 1200,
        height: 900,
        alt: 'A young mother holding her child — Girl Pride Africa Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girl Pride Africa Kenya (GPAK Girls)',
    description:
      'Supporting adolescent mothers and pregnant girls in western Kenya through integrated psychosocial, health, education, livelihood, and family support.',
    images: ['/images/eibner-saliba-zhWUl24kf5A-unsplash.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Girl Pride Africa Kenya',
  alternateName: 'GPAK Girls',
  url: 'https://www.gpakgirls.org',
  email: 'info@gpakgirls.org',
  telephone: '+254725737867',
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Homa Bay Town',
    addressRegion: 'Homa Bay County',
    addressCountry: 'KE',
  },
  areaServed: ['Homa Bay County', 'Siaya County', 'Kisumu County', 'Migori County'],
  description:
    'Community-rooted organization supporting adolescent mothers and pregnant girls aged 13–23 in western Kenya through psychosocial support, HIV and maternal health referrals, education, livelihoods, and family strengthening.',
  knowsAbout: [
    'Adolescent mothers',
    'Teenage pregnancy',
    'HIV prevention',
    'Maternal and child health',
    'Psychosocial support',
    'Girls education',
    'Livelihoods',
    'Family strengthening',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
