'use client'

import { useEffect, useState } from 'react'
import {
  AtSign,
  Check,
  Copy,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Share2,
  Twitter,
} from 'lucide-react'

const SITE = 'https://www.gpakgirls.org'

const messages = [
  {
    id: 'support',
    label: 'Support their work',
    url: `${SITE}/get-involved`,
    text: `I really like the work GPAK Girls is doing in Homa Bay: counselling, HIV and maternal health care, a way back to school, and skills to earn a living for teenage mothers. Donate, volunteer or partner with them: ${SITE}/get-involved #GPAKGirls`,
  },
  {
    id: 'donate',
    label: 'Ask friends to donate',
    url: `${SITE}/donate`,
    text: `A girl who becomes a mother at 15 in Homa Bay often loses school, family and safety all at once. GPAK Girls helps her get back on her feet. I'm supporting them, and you can too, even with a small amount: ${SITE}/donate #GPAKGirls`,
  },
  {
    id: 'volunteer',
    label: 'Find volunteers',
    url: `${SITE}/get-involved`,
    text: `GPAK Girls is looking for mentors, tutors and skills trainers to support young mothers in western Kenya. If you have time or a skill to give, have a look: ${SITE}/get-involved #GPAKGirls #Volunteer`,
  },
  {
    id: 'birthday',
    label: 'Birthday fundraiser',
    url: `${SITE}/donate`,
    text: `For my birthday this year, instead of gifts, I'm raising money for GPAK Girls, who support teenage mothers in Homa Bay. Any amount helps: M-Pesa 0725 737 867 (Girl Pride Africa Kenya), then let me know so I can thank you! ${SITE}/donate #GPAKGirls`,
  },
]

type Platform = {
  name: string
  icon: React.ComponentType<{ className?: string }>
  // Platforms that only accept a link: the message is copied so it can be pasted in
  copyFirst?: boolean
  href?: (text: string, url: string) => string
  hint?: string
}

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.8a5.7 5.7 0 1 0 4.91 5.64V9.02a7.33 7.33 0 0 0 4.28 1.37V7.3a4.28 4.28 0 0 1-3.22-1.48Z" />
    </svg>
  )
}

const enc = encodeURIComponent

const platforms: Platform[] = [
  { name: 'WhatsApp', icon: MessageCircle, href: (t) => `https://wa.me/?text=${enc(t)}` },
  {
    name: 'Facebook',
    icon: Facebook,
    copyFirst: true,
    href: (_t, u) => `https://www.facebook.com/sharer/sharer.php?u=${enc(u)}`,
    hint: 'Message copied. Paste it into your Facebook post.',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    copyFirst: true,
    hint: 'Message copied. Open Instagram and paste it as your caption or story text.',
  },
  {
    name: 'TikTok',
    icon: TikTok,
    copyFirst: true,
    hint: 'Message copied. Paste it as the caption on your TikTok video.',
  },
  { name: 'X', icon: Twitter, href: (t) => `https://twitter.com/intent/tweet?text=${enc(t)}` },
  { name: 'Threads', icon: AtSign, href: (t) => `https://www.threads.net/intent/post?text=${enc(t)}` },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    copyFirst: true,
    href: (_t, u) => `https://www.linkedin.com/sharing/share-offsite/?url=${enc(u)}`,
    hint: 'Message copied. Paste it into your LinkedIn post.',
  },
  {
    name: 'Telegram',
    icon: Send,
    href: (t, u) => `https://t.me/share/url?url=${enc(u)}&text=${enc(t.replace(u, '').trim())}`,
  },
  {
    name: 'Email',
    icon: Mail,
    href: (t) => `mailto:?subject=${enc('Have a look at GPAK Girls')}&body=${enc(t)}`,
  },
]

export default function ShareKit() {
  const [selected, setSelected] = useState(messages[0])
  const [text, setText] = useState(messages[0].text)
  const [notice, setNotice] = useState('')
  const [canNativeShare, setCanNativeShare] = useState(false)

  useEffect(() => {
    setCanNativeShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function')
  }, [])

  useEffect(() => {
    if (!notice) return
    const t = setTimeout(() => setNotice(''), 4000)
    return () => clearTimeout(t)
  }, [notice])

  const choose = (m: (typeof messages)[number]) => {
    setSelected(m)
    setText(m.text)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }

  const share = async (p: Platform) => {
    if (p.copyFirst) {
      const ok = await copy()
      setNotice(ok ? p.hint ?? 'Message copied.' : 'Select the message above and copy it, then paste it into your post.')
    }
    if (p.href) window.open(p.href(text, selected.url), '_blank', 'noopener,noreferrer')
  }

  const nativeShare = async () => {
    try {
      await navigator.share({ text })
    } catch {
      // Dismissed by the user
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-8">
      <p className="text-sm font-semibold text-gray-900 mb-3">1. Pick a message</p>
      <div className="flex flex-wrap gap-2 mb-5" role="radiogroup" aria-label="Message">
        {messages.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={selected.id === m.id}
            onClick={() => choose(m)}
            className={`px-4 min-h-[44px] rounded-full border text-sm font-medium transition-colors ${
              selected.id === m.id
                ? 'bg-primary-600 border-primary-600 text-white'
                : 'border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <label htmlFor="share-message" className="text-sm font-semibold text-gray-900 mb-2 block">
        2. Make it yours (optional)
      </label>
      <textarea
        id="share-message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-base text-gray-800 leading-relaxed resize-y"
      />
      <div className="flex justify-between items-center mt-2 mb-6 text-xs text-gray-500">
        <span>{text.length} characters{text.length > 280 ? ' · long for X, trim it there' : ''}</span>
        <button
          type="button"
          onClick={async () => setNotice((await copy()) ? 'Message copied.' : 'Select the message and copy it manually.')}
          className="inline-flex items-center gap-1.5 font-semibold text-primary-600 hover:text-primary-700 min-h-[44px]"
        >
          <Copy className="h-4 w-4" />
          Copy message
        </button>
      </div>

      <p className="text-sm font-semibold text-gray-900 mb-3">3. Share it</p>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
        {canNativeShare && (
          <button
            type="button"
            onClick={nativeShare}
            className="flex flex-col items-center justify-center gap-1.5 min-h-[72px] rounded-xl bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700 transition-colors"
          >
            <Share2 className="h-5 w-5" />
            Share…
          </button>
        )}
        {platforms.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => share(p)}
            className="flex flex-col items-center justify-center gap-1.5 min-h-[72px] rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <p.icon className="h-5 w-5" />
            {p.name}
          </button>
        ))}
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-4 flex items-center gap-2 text-sm text-secondary-700 transition-opacity ${
          notice ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Check className="h-4 w-4" />
        {notice || ' '}
      </p>
    </div>
  )
}
