'use client'

import { useEffect } from 'react'
import { trackConversion } from '@/lib/ads'

// Fires one Google Ads conversion when the page loads. The Google tag itself
// is loaded site-wide in app/layout.tsx.
export default function AdsConversion({ sendTo }: { sendTo: string }) {
  useEffect(() => {
    if (sendTo) trackConversion(sendTo)
  }, [sendTo])
  return null
}
