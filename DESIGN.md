---
name: GPAK Girls
description: Donor-grade nonprofit site for Girl Pride Africa Kenya, evidence-first not sympathy-first
colors:
  signal-rose: "#e63950"
  signal-rose-deep: "#b01a30"
  signal-rose-pale: "#fef2f3"
  hope-green: "#22c55e"
  hope-green-deep: "#15803d"
  hope-green-pale: "#f0fdf4"
  warm-gold: "#f59e0b"
  warm-gold-deep: "#b45309"
  warm-gold-pale: "#fffbeb"
  ink: "#111827"
  ink-muted: "#4b5563"
  surface: "#ffffff"
  surface-alt: "#f9fafb"
  hairline: "#e5e7eb"
typography:
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.signal-rose-deep}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "#93182d"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.signal-rose-deep}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: GPAK Girls

## 1. Overview

**Creative North Star: "The Field Report"**

GPAK's site reads like a well-run organization's field report to a funder doing due diligence, not a plea for sympathy. Every section leads with mechanism and evidence: what happens, to whom, measured how, with a Registration link never more than a click away. Density is moderate: enough white space to feel unhurried and credible, not so much that it feels like a thin marketing site with little behind it.

The system explicitly rejects the generic-charity-stock-photo aesthetic: no "sad African child" imagery, no poverty framing, no passive-victim language. Girls served are shown as agents building a future. It also rejects unsupported virtue claims; every impact statement is traceable to a source or a program page, never asserted as a bare adjective ("honest", "transparent") about itself.

**Key Characteristics:**
- Evidence-led: mechanism and sourcing before sentiment.
- Warm but restrained: one saturated brand color (Signal Rose) used deliberately, not drenched.
- Dignity-first imagery and copy; girls as agents, not subjects.
- Donor-grade findability: registration, accountability, and financials never buried.

## 2. Colors

A single warm, vibrant brand color carries identity; a green and gold pair support it for hope/growth and highlight/gold-standard moments respectively. Everything else is a clean neutral scale so the evidence, not the palette, does the persuading.

### Primary
- **Signal Rose** (#e63950): The one recognizably-GPAK color. Primary CTAs (Donate, Give Monthly), active nav states, key numerals in stat displays. Deepens to **Signal Rose Deep** (#b01a30) for button hover/active and for body-size text on tinted backgrounds (contrast).

### Secondary
- **Hope Green** (#22c55e): Growth, health, and "this part of the model is working" signals: secondary CTAs, positive metrics, health/wellbeing iconography. Pale tint **Hope Green Pale** (#f0fdf4) is a section background, never a text color.

### Tertiary
- **Warm Gold** (#f59e0b): Reserved for a single accent moment per screen: a milestone, an award, a "flagship" tag (e.g. Project FAHARI). Not used at button scale; it is a highlight, not a UI workhorse.

### Neutral
- **Ink** (#111827, i.e. Tailwind `gray-900`): Primary text and headlines.
- **Ink Muted** (#4b5563, `gray-600`): Body copy on white; verify 4.5:1 before shipping any new tint pairing.
- **Surface** (#ffffff): Default page background.
- **Surface Alt** (#f9fafb, `gray-50`): Alternating section background for rhythm between stacked sections.
- **Hairline** (#e5e7eb, `gray-200`): Card borders, dividers. Never used as a colored side-stripe (see Don'ts).

### Named Rules
**The One Accent Rule.** Signal Rose is the only color allowed to carry primary-action weight (a filled CTA button or an active nav underline) on any given screen. Hope Green and Warm Gold support; they never compete with Rose for the visitor's first click.

## 3. Typography

**Body/Headline Font:** System-ui stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`), aliased in code as `--font-inter` / `font-sans`. Note: despite the variable name, no Google Font "Inter" file is actually loaded; this resolves to each OS's native UI font. Treat this as the current real token, not an aspiration to a webfont.
**Unused token:** `--font-display` (Georgia serif) exists in `tailwind.config.ts` but is not referenced by any page today. Don't design new work around it without confirming it should be revived; the working system is single-family.

**Character:** One neutral, highly legible system sans carrying every weight from body copy to hero headline. The credibility comes from restraint and hierarchy (size, weight, spacing), not from a second decorative typeface.

### Hierarchy
- **Headline** (700, `clamp(2.25rem, 4vw, 3.75rem)`, 1.1 line-height, -0.02em tracking): Page hero H1s and major section H2s.
- **Title** (600, 1.5rem, 1.25 line-height): Card headings, sub-section H3s.
- **Body** (400, 1rem, 1.65 line-height): Paragraph copy. Cap prose measure at 65–75ch; this codebase's `.section-subheading` already constrains to `max-w-3xl`.
- **Label** (600, 0.875rem): Nav items, button labels, footer legal links.

### Named Rules
**The No Second Voice Rule.** Don't introduce a serif or second sans "for warmth." The one-family system is deliberate; personality comes from color and copy, not font pairing.

## 4. Elevation

Flat by default with tonal layering, not shadow-driven depth. Most surfaces are `Surface` white on `Surface Alt` gray-50 backgrounds; separation between a card and its background comes first from a 1px `Hairline` border, with a soft shadow as a secondary, almost subliminal cue, not the primary depth signal.

### Shadow Vocabulary
- **card-rest** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`, Tailwind `shadow-sm`): Default resting state for any card or contained panel.
- **image-lifted** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)`, Tailwind `shadow-lg`): Reserved for feature imagery (e.g. the About page portrait), not for cards or buttons.

### Named Rules
**The Border-Before-Shadow Rule.** A card's depth reads primarily from its `Hairline` border (and, where on a tinted section, a border tinted to that section's hue, e.g. `border-primary-100` on a rose-tinted panel) and only secondarily from `card-rest` shadow. Never stack a heavy shadow onto a card that already has a colored border; pick one signal.

## 5. Components

### Buttons
- **Shape:** 8px radius (`rounded-lg`), not pill-shaped.
- **Primary:** Signal Rose Deep-adjacent fill (`bg-primary-600` #d1253d resting, current code), white text, 12–14px vertical / 24–32px horizontal padding, min 44px touch target.
- **Hover / Focus:** Darkens one step (`hover:bg-primary-700`), 200ms transition; focus-visible ring in the same hue (`focus:ring-primary-500`); active press scales to 95% (`active:scale-95`) for tactile feedback.
- **Secondary:** Same shape in Hope Green, for lower-stakes or supporting actions (e.g. "Learn More" next to a rose "Donate").
- **Outline/Ghost:** Transparent fill, 2px Signal Rose border, rose text; fills to a pale rose tint on hover, never inverts to a solid rose fill (that's the primary button's job).

### Cards / Containers
- **Corner Style:** 12–16px radius (`rounded-xl` / `rounded-2xl`) depending on card size; larger cards get the larger radius.
- **Background:** Surface white, occasionally a section-matched pale tint for a callout card.
- **Border:** 1px Hairline by default; a section-tinted 1px border (`border-primary-100`, `border-secondary-100`) when the card sits inside a themed block (e.g. Mission in rose, Vision in green).
- **Shadow Strategy:** `card-rest` only; see Elevation.
- **Internal Padding:** 24px small cards, 32–48px feature cards.

### Navigation
- Sticky top header, white background, `shadow-sm` on scroll-adjacent boundary. Label-weight links (600, gray-700), Signal Rose on hover, no underline. Primary CTA ("Donate Now") stays a filled rose button distinct from the text links even in the mobile drawer.

## 6. Do's and Don'ts

### Do:
- **Do** lead every claim of impact with a source or a link to the program/page that substantiates it (Design Principle: "evidence over sentiment").
- **Do** keep Signal Rose to CTA-weight uses only; Hope Green and Warm Gold support, never compete.
- **Do** show girls served as agents (a step, a milestone, a skill gained), consistent with PRODUCT.md's "dignity over pity" principle.
- **Do** keep the Registration/accountability link visible near any legal or trust-relevant copy, not buried.

### Don't:
- **Don't** use "sad African child" or poverty-porn stock imagery, or frame anyone served as a passive victim; PRODUCT.md's anti-reference rules this out explicitly.
- **Don't** write self-labelling copy ("our honest numbers", "we're transparent about...") — state the data and its source, let the reader conclude it's honest.
- **Don't** stack a heavy shadow and a colored border on the same card; pick one depth signal (see The Border-Before-Shadow Rule).
- **Don't** introduce a second display/serif typeface for "warmth"; the unused `--font-display` token is not an invitation, it's dead code (see The No Second Voice Rule).
- **Don't** use a `border-left`/`border-right` colored stripe as a card accent; this codebase has no such pattern today and it should stay that way.
