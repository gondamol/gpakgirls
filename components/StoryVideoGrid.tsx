import { Quote } from 'lucide-react'
import { storyVideos, videoSrc, posterSrc } from '@/lib/storyVideos'

// Videos load only when played (preload="none"), so the grid costs one small poster image each.
export default function StoryVideoGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {storyVideos.map((v) => (
        <article
          key={v.slug}
          className="flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden"
        >
          <video
            controls
            preload="none"
            playsInline
            poster={posterSrc(v.slug)}
            className="w-full aspect-video bg-gray-900"
            aria-label={`${v.name}: ${v.title}. Illustrated story video with captions, ${v.duration}`}
          >
            <source src={videoSrc(v.slug)} type="video/mp4" />
          </video>
          <div className="flex flex-col flex-1 p-6">
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <h3 className="text-xl font-bold text-gray-900">{v.name}</h3>
              <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                {v.theme} · {v.duration}
              </span>
            </div>
            <p className="text-primary-600 font-semibold mb-3">{v.title}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{v.summary}</p>
            {v.quote && (
              <p className="mt-4 flex gap-2 text-gray-800 text-sm italic">
                <Quote className="h-4 w-4 flex-shrink-0 text-primary-400 mt-0.5" aria-hidden="true" />
                <span>“{v.quote}”</span>
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
