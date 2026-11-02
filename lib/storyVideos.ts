// Seven illustrated story videos (Nov 2026). Names are changed, location is only "western Kenya",
// characters are illustrated and faceless. Quotes are the person's own words, translated where needed.
// Source and safeguarding rules: gpak-workspace/projects/2026-11_story-videos/README.md

export type StoryVideo = {
  slug: string
  name: string
  title: string
  summary: string
  quote?: string
  duration: string
  theme: string
}

export const storyVideos: StoryVideo[] = [
  {
    slug: '01_mercy',
    name: 'Mercy',
    title: 'Loved again',
    summary:
      'Mercy was 16 when she gave birth. Her family sent her to live alone. Our team visited with food and time to listen, and on the second visit her parents agreed to take her back home. She wants to train in tailoring.',
    quote: 'Your visit has made me feel loved again.',
    duration: '1:22',
    theme: 'Family',
  },
  {
    slug: '02_faith',
    name: 'Faith',
    title: 'A dream of nursing',
    summary:
      'Faith was 14 when she had her baby girl. Rejected and out of school, she lost hope. Today we are helping her return to school, and she dreams of becoming a nurse.',
    duration: '0:55',
    theme: 'Education',
  },
  {
    slug: '03_joy',
    name: 'Joy',
    title: 'A safe home',
    summary:
      'Joy is 22, a single mother of two. At home, she and her children faced violence, and she had nowhere else to go. GPAK Girls helped her pay rent for a safe home of her own.',
    quote: 'I feel I have hope and a future for my kids.',
    duration: '1:08',
    theme: 'Safety',
  },
  {
    slug: '04_brenda',
    name: 'Brenda',
    title: 'Breadwinner at 17',
    summary:
      'At 17, Brenda is a mother and the breadwinner for her three younger siblings. We counselled her, helped with rent and food, and make sure her baby gets clinic check-ups.',
    quote: 'God bless you, GPAK.',
    duration: '1:02',
    theme: 'Family',
  },
  {
    slug: '05_sharon',
    name: 'Sharon',
    title: 'Back on treatment, back in school',
    summary:
      'Sharon has lived with HIV since childhood. At boarding school, with nowhere private to take her medicine, she stopped. With her consent, her school matron was asked to support her. Within months, her viral load came down sharply.',
    quote: 'It is nice to know that someone cares and loves me the way I am.',
    duration: '1:27',
    theme: 'Health & HIV',
  },
  {
    slug: '06_esther',
    name: 'Esther',
    title: 'A shop of her own',
    summary:
      'Esther and her young son both live with HIV. Rejected by her family, she struggled to keep going. Regular visits, counselling and a small business grant changed things. Today her son’s viral load is undetectable.',
    duration: '1:14',
    theme: 'Livelihoods',
  },
  {
    slug: '07_mary',
    name: 'Mary',
    title: 'A growing business',
    summary:
      'Mary, a mother of five, sold vegetables from a small stock. A business grant and her savings group helped her grow it. Now her family eats a balanced diet, and all her children stay in school.',
    duration: '0:59',
    theme: 'Livelihoods',
  },
]

export const videoSrc = (slug: string) => `/videos/stories/${slug}.mp4`
export const posterSrc = (slug: string) => `/videos/stories/${slug}.jpg`
