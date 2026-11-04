import Script from 'next/script'

// Fires one Google Ads conversion when the page loads. Renders nothing
// until a send_to value (AW-XXXXXXXXX/label) is set in lib/donation.ts.
export default function AdsConversion({ sendTo }: { sendTo: string }) {
  if (!sendTo) return null
  const accountId = sendTo.split('/')[0]
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${accountId}`}
        strategy="afterInteractive"
      />
      <Script id="ads-conversion" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${accountId}');
gtag('event', 'conversion', { send_to: '${sendTo}' });`}
      </Script>
    </>
  )
}
