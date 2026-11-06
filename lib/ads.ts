// Google Ads (Ad Grants account) tag and conversion actions.
// The tag loads on every page from app/layout.tsx. Conversions fire from
// components/ConversionTracker.tsx (clicks), components/ContactForm.tsx
// (form sent) and app/donate/thank-you (completed PayPal gift).

export const GOOGLE_ADS_ID = 'AW-18554120953'

// send_to values from Google Ads > Goals > Conversions.
export const ADS_CONVERSIONS = {
  paypalClick: `${GOOGLE_ADS_ID}/QlONCJag8bIdEPnVpY9F`, // Donate button click (PayPal)
  donationThankYou: `${GOOGLE_ADS_ID}/QNYlCJmg8bIdEPnVpY9F`, // Donation thank-you page
  whatsappOrCall: `${GOOGLE_ADS_ID}/XbNGCMq98bIdEPnVpY9F`, // WhatsApp or call click
  contactForm: `${GOOGLE_ADS_ID}/mtI-CNC98bIdEPnVpY9F`, // Contact form sent
} as const

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

// Queues a conversion. Pushing to dataLayer works even before gtag.js has
// finished loading; gtag.js processes the queue in order once it arrives.
// `onDone` runs once the hit is sent (or after a 1 second fallback).
export function trackConversion(sendTo: string, onDone?: () => void) {
  if (typeof window === 'undefined') return
  let done = false
  const finish = () => {
    if (done) return
    done = true
    onDone?.()
  }
  window.dataLayer = window.dataLayer || []
  // gtag.js needs a real `arguments` object, not a plain array.
  // eslint-disable-next-line prefer-rest-params
  const gtag = function (..._args: unknown[]) { window.dataLayer.push(arguments) }
  gtag('event', 'conversion', {
    send_to: sendTo,
    value: 1.0,
    currency: 'USD',
    event_callback: finish,
  })
  if (onDone) window.setTimeout(finish, 1000)
}
