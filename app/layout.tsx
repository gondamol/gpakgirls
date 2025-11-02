import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Girl Pride Africa Kenya - Empowering Teen Mothers',
    template: '%s | Girl Pride Africa Kenya',
  },
  description: 'Girl Pride Africa Kenya is a registered NGO dedicated to ending teenage pregnancy and sexual abuse among teenage girls through education, vocational training, mentorship, and support.',
  keywords: ['NGO', 'Kenya', 'teen mothers', 'teenage pregnancy', 'empowerment', 'education', 'vocational training', 'girls education'],
  authors: [{ name: 'Girl Pride Africa Kenya' }],
  creator: 'Girl Pride Africa Kenya',
  publisher: 'Girl Pride Africa Kenya',
  metadataBase: new URL('https://gpakgirls.org'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://gpakgirls.org',
    siteName: 'Girl Pride Africa Kenya',
    title: 'Girl Pride Africa Kenya - Empowering Teen Mothers',
    description: 'Supporting teen mothers and pregnant teens through education, vocational training, and mentorship in Kenya.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Girl Pride Africa Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girl Pride Africa Kenya - Empowering Teen Mothers',
    description: 'Supporting teen mothers and pregnant teens through education, vocational training, and mentorship in Kenya.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

