export type Stat = {
  value: string
  label: string
  source: string
}

export type Challenge = {
  slug: string
  name: string
  tagline: string
  summary: string
  stats: Stat[]
  context: string[]
  response: { text: string; href: string; linkLabel: string }[]
  sources: { name: string; url: string }[]
}

export const challenges: Challenge[] = [
  {
    slug: 'teenage-pregnancy',
    name: 'Teenage Pregnancy',
    tagline: 'A pregnancy at fifteen should not end a girl’s future.',
    summary:
      'Nearly one in four teenage girls in Homa Bay has begun childbearing, and most who become mothers lose school, family support and safety at the same time.',
    stats: [
      {
        value: '23%',
        label: 'of girls aged 15–19 in Homa Bay County have begun childbearing',
        source: 'KDHS 2022',
      },
      {
        value: '15%',
        label: 'national average for girls aged 15–19 in Kenya',
        source: 'KDHS 2022',
      },
      {
        value: '85%',
        label: 'of the girls we support for school re-entry are back in class',
        source: 'GPAK programme records',
      },
    ],
    context: [
      'Homa Bay has one of the highest teenage pregnancy rates in Kenya. Here, early pregnancy rarely arrives alone: it is tied to poverty, unequal relationships with older men, and one of the highest HIV burdens in the country.',
      'When a girl becomes pregnant, she is often sent away from home, stops attending school, and misses antenatal care because she is afraid of being judged at the clinic. Each loss makes the next one more likely, and her child inherits the same disadvantages.',
      'Kenya’s school re-entry guidelines allow a young mother to return to class, but few manage it without someone to negotiate with the school, arrange childcare and cover the costs.',
    ],
    response: [
      {
        text: 'Trained mentor mothers in each community, alongside schools and health workers, connect pregnant girls and young mothers to us early, and each girl agrees a support plan with us.',
        href: '/programs#psychosocial',
        linkLabel: 'Psychosocial support',
      },
      {
        text: 'We accompany girls to antenatal, postnatal and child health appointments until they are settled in care.',
        href: '/programs#health',
        linkLabel: 'Health & HIV referrals',
      },
      {
        text: 'We negotiate school re-entry, help with fees and childcare, and offer literacy and life-skills classes for mothers who will not return to formal school.',
        href: '/programs#education',
        linkLabel: 'Education & re-entry',
      },
    ],
    sources: [
      {
        name: 'Kenya National Bureau of Statistics, Kenya Demographic and Health Survey 2022',
        url: 'https://www.knbs.or.ke/reports/kdhs-2022/',
      },
    ],
  },
  {
    slug: 'hiv',
    name: 'HIV & Mother-to-Child Transmission',
    tagline: 'Every baby should be born free of HIV.',
    summary:
      'The four counties where we work have the highest HIV prevalence in Kenya, and young people carry a large share of new infections.',
    stats: [
      {
        value: '15.2%',
        label: 'adult HIV prevalence in Homa Bay, the highest of any county, against 3.7% nationally',
        source: 'Kenya HIV Estimates 2022',
      },
      {
        value: '41%',
        label: 'of Kenya’s new HIV infections in 2022 were among young people aged 15–24',
        source: 'Kenya HIV Estimates 2022',
      },
      {
        value: '8.6%',
        label: 'mother-to-child transmission rate in Kenya, above the elimination target of under 5%',
        source: 'Kenya HIV Estimates 2022',
      },
    ],
    context: [
      'Homa Bay (15.2%), Kisumu (14.5%), Siaya (13.2%) and Migori (9.7%) are the four counties with the highest HIV prevalence in Kenya. They are also the four counties where GPAK works.',
      'An adolescent mother living with HIV faces the hardest version of every barrier: she may hide her status from family, miss clinic visits to avoid being seen, and stop treatment while breastfeeding. Mothers stopping treatment during pregnancy or breastfeeding is one of the main reasons babies are still infected.',
      'Services exist. Testing, PMTCT and treatment are free in public facilities. What breaks is the pathway between a frightened girl and the clinic, and keeping her in care once she is there.',
    ],
    response: [
      {
        text: 'We refer girls to adolescent-friendly HIV testing, counselling and treatment, and to PMTCT services during pregnancy and breastfeeding.',
        href: '/programs#health',
        linkLabel: 'Health & HIV referrals',
      },
      {
        text: 'We track referral completion and clinic attendance with local health facilities, so a girl who drops out of care is followed up.',
        href: '/programs#health',
        linkLabel: 'How referrals are tracked',
      },
      {
        text: 'Counselling and peer groups tackle the stigma and fear that keep girls away from care.',
        href: '/programs#psychosocial',
        linkLabel: 'Psychosocial support',
      },
    ],
    sources: [
      {
        name: 'National Syndemic Diseases Control Council (NSDCC), Kenya HIV Estimates',
        url: 'https://analytics.nsdcc.go.ke/estimates/',
      },
    ],
  },
  {
    slug: 'gender-based-violence',
    name: 'Gender-Based Violence',
    tagline: 'Every girl deserves to be safe at home.',
    summary:
      'Violence and teenage pregnancy are closely linked: many adolescent pregnancies begin with coercion, and violence at home makes it harder for a young mother to stay in school or in care.',
    stats: [
      {
        value: '34%',
        label: 'of Kenyan women aged 15–49 have experienced physical violence since age 15',
        source: 'KDHS 2022',
      },
      {
        value: '41%',
        label: 'of ever-partnered women have experienced violence from an intimate partner',
        source: 'KDHS 2022',
      },
    ],
    context: [
      'For many of the girls we meet, pregnancy followed coercion, exploitation by an older man, or an exchange of sex for money, food or school fees. After the pregnancy, some face violence at home from relatives who feel shamed.',
      'Violence also undermines health care. A girl in an abusive relationship is less able to insist on testing, to disclose her HIV status, or to take treatment openly.',
    ],
    response: [
      {
        text: 'Each girl’s needs assessment covers her safety, and girls facing violence or abuse get crisis support and safe referral.',
        href: '/programs#psychosocial',
        linkLabel: 'Psychosocial support',
      },
      {
        text: 'Parenting and caregiver sessions informed by the Sinovuyo approach reduce harsh treatment at home and rebuild family support.',
        href: '/programs#family',
        linkLabel: 'Family strengthening',
      },
      {
        text: 'Livelihood training reduces the dependence that keeps girls in exploitative relationships.',
        href: '/programs#livelihoods',
        linkLabel: 'Livelihoods',
      },
    ],
    sources: [
      {
        name: 'Kenya National Bureau of Statistics, Kenya Demographic and Health Survey 2022',
        url: 'https://www.knbs.or.ke/reports/kdhs-2022/',
      },
      {
        name: 'Intimate partner violence among reproductive-age women, KDHS 2022 analysis, BMC Public Health (2024)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11144306/',
      },
    ],
  },
  {
    slug: 'early-marriage',
    name: 'Early Marriage',
    tagline: 'A pregnancy should not become a marriage she did not choose.',
    summary:
      'When a girl becomes pregnant, families sometimes push her into marriage with the father to settle the matter, ending her schooling for good.',
    stats: [
      {
        value: '13%',
        label: 'of Kenyan women aged 20–24 were married or in a union before age 18',
        source: 'KDHS 2022',
      },
      {
        value: '2%',
        label: 'were married or in a union before age 15',
        source: 'KDHS 2022',
      },
    ],
    context: [
      'Child marriage in Kenya has fallen sharply over the past 25 years, but it has not disappeared, and it is closely tied to teenage pregnancy. A pregnancy can turn into an informal union that no one registers or reports.',
      'A girl married young is more likely to leave school, less able to negotiate safe sex or health care, and more exposed to violence from a partner.',
    ],
    response: [
      {
        text: 'Family mediation and caregiver dialogue help a pregnancy lead to support at home, not a forced union.',
        href: '/programs#family',
        linkLabel: 'Family strengthening',
      },
      {
        text: 'Getting a young mother back into school or training is the strongest protection against early marriage.',
        href: '/programs#education',
        linkLabel: 'Education & re-entry',
      },
    ],
    sources: [
      {
        name: 'Girls Not Brides, Child Marriage Data Portal: Kenya (KDHS 2022)',
        url: 'https://childmarriagedata.org/country-profiles/kenya/',
      },
    ],
  },
  {
    slug: 'period-poverty',
    name: 'Period Poverty',
    tagline: 'A period should never cost a girl her safety or her schooling.',
    summary:
      'Many girls in rural Kenya cannot reliably get sanitary products. In Siaya, researchers found girls entering transactional relationships to pay for pads.',
    stats: [
      {
        value: '65%',
        label: 'of girls in rural Kenya have difficulty accessing sanitary products',
        source: 'UNFPA Kenya, citing KDHS 2022',
      },
      {
        value: '52%',
        label: 'of girls in urban areas face the same difficulty',
        source: 'UNFPA Kenya, citing KDHS 2022',
      },
    ],
    context: [
      'Period poverty is not only about missed school days. A study in Siaya County found girls entering transactional relationships to get menstrual products, which exposes them to pregnancy and HIV.',
      'In Migori County, researchers found that taboos and myths about menstruation stop girls from asking for information or help. For young mothers, the cost of pads competes directly with food and baby supplies.',
    ],
    response: [
      {
        text: 'We distribute sanitary pads to the girls we support, so no girl has to trade her safety for a pack of pads.',
        href: '/programs#health',
        linkLabel: 'Health & HIV referrals',
      },
      {
        text: 'Menstrual health education is part of our sexual and reproductive health sessions.',
        href: '/programs#health',
        linkLabel: 'Health education',
      },
    ],
    sources: [
      {
        name: 'UNFPA Kenya, Menstrual Health and Hygiene Management in Kenya, policy brief (May 2025)',
        url: 'https://kenya.unfpa.org/en/publications/menstrual-health-and-hygiene-management-policy-brief',
      },
      {
        name: 'Ministry of Health, Kenya Menstrual Hygiene Management Policy 2019–2030',
        url: 'https://wesnetwork.org/wp-content/uploads/2020/06/MHM-Policy-Kenya.pdf',
      },
    ],
  },
  {
    slug: 'poverty',
    name: 'Poverty',
    tagline: 'Income is protection.',
    summary:
      'Poverty drives many of the pregnancies we see, and a baby deepens it. Without income, a young mother is pushed back towards the relationships that put her at risk.',
    stats: [
      {
        value: '39.8%',
        label: 'of Kenyans live below the national poverty line',
        source: 'KNBS, Kenya Poverty Report 2022',
      },
      {
        value: '16M+',
        label: 'people (31.7%) could not meet the food poverty line',
        source: 'KNBS, Kenya Poverty Report 2022',
      },
    ],
    context: [
      'For an adolescent mother, poverty arrives twice: she is often from a poor household to begin with, and the baby adds costs just as she loses school and family support.',
      'Poverty is also what links teenage pregnancy to HIV around Lake Victoria. Girls exchange sex for school fees, food or pads, often with older men, and the same relationships carry the highest HIV risk.',
    ],
    response: [
      {
        text: 'Vocational training in tailoring and hairdressing, kitchen gardens, agribusiness training and group farming give young mothers their own income.',
        href: '/programs#livelihoods',
        linkLabel: 'Livelihoods & agriculture',
      },
      {
        text: 'Support moves by M-Pesa against documented needs, never as untracked cash.',
        href: '/programs#technology',
        linkLabel: 'How we use technology',
      },
    ],
    sources: [
      {
        name: 'Kenya National Bureau of Statistics, The Kenya Poverty Report 2022',
        url: 'https://www.knbs.or.ke/reports/kenya-poverty-report-2022/',
      },
    ],
  },
]

export function getChallenge(slug: string) {
  return challenges.find((c) => c.slug === slug)
}
