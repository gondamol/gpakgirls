'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

const MAP_EMBED = 'https://maps.google.com/maps?q=Homa+Bay+Town,+Kenya&z=13&output=embed'
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Homa+Bay+Town%2C+Kenya'

// Shows a light placeholder first and loads the Google Maps embed only on request. The embed
// pulls in several hundred KB of script, which slowed the Contact page on mobile networks.
export default function MapEmbed() {
  const [show, setShow] = useState(false)

  return (
    <section className="bg-gray-100" aria-label="Office location map">
      <div className="w-full h-[350px] sm:h-[400px] md:h-[500px]">
        {show ? (
          <iframe
            src={MAP_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="GPAK Girls Office Location - Homa Bay Town, Kenya"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
            <MapPin className="h-10 w-10 text-primary-600" />
            <p className="text-lg font-semibold text-gray-900">Homa Bay Town, Homa Bay County, Kenya</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => setShow(true)} className="btn-primary px-6 py-3">
                Show map
              </button>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
