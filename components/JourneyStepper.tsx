'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type JourneyStep = {
  title: string
  pillar: string
  text: string
  image: string
}

// One girl's path through the model, a step at a time. Each step names the programme pillar it
// shows, so the story maps back onto the four stages below it.
export default function JourneyStepper({ steps }: { steps: JourneyStep[] }) {
  const [current, setCurrent] = useState(0)
  const step = steps[current]
  const go = (i: number) => setCurrent(Math.max(0, Math.min(steps.length - 1, i)))

  return (
    <div>
      <div
        className="flex items-center overflow-x-auto pb-2"
        role="tablist"
        aria-label="Journey steps"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(current + 1)
          if (e.key === 'ArrowLeft') go(current - 1)
        }}
      >
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-center">
            <button
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Step ${i + 1}: ${s.title}`}
              onClick={() => setCurrent(i)}
              className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full font-display text-lg sm:text-xl font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-800 ${
                i === current
                  ? 'scale-105 bg-accent-500 text-earth-600'
                  : i < current
                    ? 'bg-white/20 text-white'
                    : 'border-2 border-white/35 text-white/80 hover:border-white/70'
              }`}
            >
              {i + 1}
            </button>
            {i < steps.length - 1 && (
              <span className={`h-0.5 w-4 sm:w-7 shrink-0 ${i < current ? 'bg-accent-500' : 'bg-white/25'}`} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center" role="tabpanel" aria-live="polite">
        <div>
          <p className="text-sm font-semibold text-accent-400">
            Step {current + 1} of {steps.length}
          </p>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-white/85 max-w-xl">{step.text}</p>
          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">{step.pillar}</span>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              className="inline-flex min-h-[44px] items-center gap-1 rounded-full border border-white/50 px-5 text-white disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>
            <button
              type="button"
              onClick={() => go(current + 1)}
              disabled={current === steps.length - 1}
              className="inline-flex min-h-[44px] items-center gap-1 rounded-full bg-white px-5 font-semibold text-secondary-700 disabled:opacity-30"
            >
              Next step
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/10">
          <Image
            key={step.image}
            src={step.image}
            alt={step.title}
            fill
            sizes="(min-width: 768px) 560px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
