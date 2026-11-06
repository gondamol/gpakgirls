'use client'

import { useEffect } from 'react'
import { ADS_CONVERSIONS, trackConversion } from '@/lib/ads'

// One click listener for the whole site, so every PayPal, WhatsApp and phone
// link is counted without wiring each link by hand.
function conversionFor(href: string): string | null {
  if (href.startsWith('https://www.paypal.com/donate')) return ADS_CONVERSIONS.paypalClick
  if (href.startsWith('tel:')) return ADS_CONVERSIONS.whatsappOrCall
  // wa.me/<number> messages GPAK. wa.me/?text= is the share button
  // (the visitor picks their own contact), so it is not counted.
  if (/^https:\/\/wa\.me\/\d/.test(href)) return ADS_CONVERSIONS.whatsappOrCall
  return null
}

export default function ConversionTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const sendTo = conversionFor(link.href)
      if (!sendTo) return

      const opensElsewhere =
        link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0
      if (opensElsewhere || e.defaultPrevented) {
        // This page stays open, so the hit has time to send.
        trackConversion(sendTo)
        return
      }
      // Same-tab navigation: hold it until the hit is sent (max 1 second).
      e.preventDefault()
      const url = link.href
      trackConversion(sendTo, () => {
        window.location.href = url
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
