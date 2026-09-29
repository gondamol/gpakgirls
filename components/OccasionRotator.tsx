'use client'

import { useEffect, useState } from 'react'

// Cycles through occasions in the Ways to Support headline. Stays on the first word
// for visitors who prefer reduced motion.
export default function OccasionRotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span
        key={index}
        aria-hidden="true"
        className="inline-block text-accent-300 animate-fade-up"
      >
        {words[index]}
      </span>
    </>
  )
}
