// News and updates. Newest first. Only real events: no invented figures, names or places.
// To add a post, put a new object at the top of the list.

export type NewsBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'video'; slug: string; caption: string }
  | { type: 'storyVideos' }

export type NewsPost = {
  slug: string
  date: string // ISO yyyy-mm-dd
  category: 'Stories' | 'Programmes' | 'Events' | 'Partners' | 'Giving'
  title: string
  summary: string
  image: string
  imageAlt: string
  body: NewsBlock[]
  links?: { label: string; href: string }[]
}

export const news: NewsPost[] = [
  {
    slug: 'seven-stories-on-film',
    date: '2026-11-02',
    category: 'Stories',
    title: 'Seven stories of courage, now on film',
    summary:
      'Mercy, Faith, Joy, Brenda, Sharon, Esther and Mary: seven short illustrated films about girls and women we walk with, in their own words.',
    image: '/videos/stories/01_mercy.jpg',
    imageAlt: 'Illustration of a young mother and a mentor mother walking towards a rising sun',
    body: [
      {
        type: 'p',
        text: 'Today we are sharing seven short films. Each one tells the true story of a girl or woman GPAK Girls walks with in western Kenya: a teen mother sent away by her family, a girl who dreams of nursing, a mother who needed a safe place to sleep, and women rebuilding their health and income.',
      },
      {
        type: 'p',
        text: 'Every film is about a minute long, with captions so it works with the sound off. The quotes are their own words, translated where needed. Nothing is invented.',
      },
      { type: 'h2', text: 'How we protect them' },
      {
        type: 'list',
        items: [
          'Every name is changed, and the only place named is western Kenya.',
          'There are no real photos or footage. The characters are illustrated and faceless, and each film says so on screen.',
          'We leave out villages, schools, markets, amounts of money and medical figures, so no one can be identified.',
        ],
      },
      { type: 'h2', text: 'Watch the stories' },
      { type: 'storyVideos' },
      {
        type: 'p',
        text: 'Please share them. One story per post works best, with a link to gpakgirls.org/walk-with-her.',
      },
    ],
    links: [
      { label: 'Read more stories', href: '/stories' },
      { label: 'Walk with her monthly', href: '/walk-with-her' },
    ],
  },
  {
    slug: 'how-we-walk-with-a-girl-film',
    date: '2026-11-02',
    category: 'Programmes',
    title: 'A three-minute film: how we walk with a girl',
    summary:
      'An illustrated film that follows one girl, chapter by chapter, from the day she is pushed out of school to the day she walks with the next girl.',
    image: '/videos/stories/how-we-work-film.jpg',
    imageAlt: 'Illustration of a mentor mother walking beside a teen mother on a green hillside',
    body: [
      {
        type: 'p',
        text: 'People often ask us what GPAK Girls actually does, day to day. This short film answers that. It follows one girl, a composite of the girls we work with, through seven chapters.',
      },
      {
        type: 'video',
        slug: 'how-we-work-film',
        caption: 'Walk with her: how we work (3 min 6 s). An illustrative story; the girl is a composite.',
      },
      { type: 'h2', text: 'The seven chapters' },
      {
        type: 'list',
        items: [
          'Pushed out: at 15, her pregnancy shows and she stops going to school.',
          'A knock on the door: a mentor mother from the next village visits. The first conversation is about how she is feeling, not about what she did. Nothing happens without her consent.',
          'Someone to talk to: she is screened for depression and anxiety, starts counselling and joins a weekly circle of girls in the same situation.',
          'To the clinic, together: her mentor goes with her to antenatal care, HIV testing, postnatal checks and her baby’s first vaccinations.',
          'Home again: through a parenting programme, the team sits down with her family, and over a few months they reconcile.',
          'Back to class, or a trade: we negotiate her return to school and help arrange childcare. Where school is no longer realistic, a girl trains in tailoring or hairdressing, with a starter kit at graduation.',
          'Walking with others: a year on, she is back in class and helps lead a peer group for the next girl who arrives.',
        ],
      },
    ],
    links: [
      { label: 'See our model', href: '/our-model' },
      { label: 'Our programmes', href: '/programs' },
    ],
  },
  {
    slug: 'school-holiday-health-sessions-2026',
    date: '2026-11-02',
    category: 'Events',
    title: 'School holiday health sessions for girls and young mothers',
    summary:
      'From the week of 9 November, we are running weekly health sessions through the long school holiday, ending with a reflection fun day in December.',
    image: '/images/annie-spratt-W3WO3QQwAxM-unsplash.jpg',
    imageAlt: 'Girls sitting together in a group discussion',
    body: [
      {
        type: 'p',
        text: 'The long school holiday can be a risky time for adolescent girls. Without the routine of school, many have less support and less access to good health information. This November and December, GPAK Girls is running weekly sessions that are safe, age-appropriate and open to adolescent girls on holiday and to young mothers in western Kenya.',
      },
      { type: 'h2', text: 'What is planned' },
      {
        type: 'list',
        items: [
          'Four weekly sessions in November: two led by the GPAK Girls team and two led by partners, such as a local health facility.',
          'A reflection fun day in December to close the programme.',
        ],
      },
      { type: 'h2', text: 'Topics' },
      {
        type: 'list',
        items: [
          'Wellness circles: self-esteem, stress, peer pressure and where to get help',
          'Menstrual health and hygiene',
          'Puberty, reproductive health and preventing unintended pregnancy',
          'HIV prevention, testing and treatment literacy',
          'Consent, healthy relationships and how to get help after abuse',
          'Postnatal care, breastfeeding, nutrition and infant health for young mothers',
          'Youth-friendly health services, with confidential and voluntary referrals',
        ],
      },
      { type: 'h2', text: 'How we keep girls safe' },
      {
        type: 'p',
        text: 'Every session starts with ground rules and consent. Referrals are voluntary and confidential, and no one is pressured into any health choice. We do not photograph girls’ faces without consent, and any disclosure is handled under our safeguarding policy.',
      },
      {
        type: 'p',
        text: 'We will also listen. We will ask girls and young mothers what makes health services hard to reach, and what support they want from us in 2027.',
      },
    ],
    links: [
      { label: 'How we keep girls safe', href: '/accountability#safeguarding' },
      { label: 'Support the sessions', href: '/donate' },
    ],
  },
  {
    slug: 'our-model-a-girls-journey',
    date: '2026-10-25',
    category: 'Programmes',
    title: 'Our model, step by step: one girl, one plan',
    summary:
      'A new page explains how we work: a girl’s journey from first contact to independence, and the theory of change behind it.',
    image: '/images/mentorship.jpg',
    imageAlt: 'A mentor talking with a young woman',
    body: [
      {
        type: 'p',
        text: 'We have published a new Our Model page. It shows how GPAK Girls works with each girl through one plan made for her: counselling and mental health, health and HIV care, school re-entry or a trade, livelihoods, and work with her family.',
      },
      {
        type: 'p',
        text: 'The page follows an illustrative girl through each step, and sets out our theory of change: what we do and what we expect to change for the girl, her baby and her family.',
      },
    ],
    links: [{ label: 'Read Our Model', href: '/our-model' }],
  },
  {
    slug: 'new-ways-to-give',
    date: '2026-09-29',
    category: 'Giving',
    title: 'New ways to give: Walk With Her, giving circles and planned giving',
    summary:
      'Supporters can now give monthly, join a giving circle with friends, or remember GPAK Girls in a will.',
    image: '/images/annie-spratt-msrFBd0OaIo-unsplash.jpg',
    imageAlt: 'Women walking together along a road',
    body: [
      {
        type: 'p',
        text: 'We have added three ways to give that last beyond a single gift.',
      },
      {
        type: 'list',
        items: [
          'Walk With Her: a monthly gift that keeps mentor mothers walking with girls through the whole journey.',
          'Giving circles: friends, families, churches and colleagues pool their giving and follow the work together.',
          'Planned giving: a gift in a will, with sample wording and our registration details.',
        ],
      },
      {
        type: 'p',
        text: 'Our Ways to Support page also now covers dedicating a gift in someone’s honour, hosting a gathering, employer matching and company giving.',
      },
    ],
    links: [
      { label: 'Walk With Her', href: '/walk-with-her' },
      { label: 'Giving circles', href: '/giving-circles' },
      { label: 'Planned giving', href: '/planned-giving' },
      { label: 'All ways to support', href: '/get-involved' },
    ],
  },
  {
    slug: 'thank-you-partners',
    date: '2026-09-29',
    category: 'Partners',
    title: 'Thank you to the partners who walk with us',
    summary:
      'Our work depends on local partners. We now recognise them on our home page.',
    image: '/images/partners/larcod.png',
    imageAlt: 'Lake Region Community Development Initiative logo',
    body: [
      {
        type: 'p',
        text: 'No organisation can walk with a girl alone. Churches, schools and community groups make our work possible. We are grateful to the partners who have walked with us, including:',
      },
      {
        type: 'list',
        items: [
          'Christ Greater Exploits Church (CGEC)',
          'Lake Region Community Development Initiative (LARCOD)',
          'Devine Women Foundation Inc',
          'Doro Mabaan Community Primary School',
        ],
      },
      {
        type: 'p',
        text: 'If your organisation would like to partner with us, we would love to hear from you.',
      },
    ],
    links: [
      { label: 'Partner with us', href: '/get-involved#partner' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
]

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
