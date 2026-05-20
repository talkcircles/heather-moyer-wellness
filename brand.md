# Heather Moyer Wellness — Brand reference

Extracted from the live WordPress theme (`zen-retreat`) CSS variables on 2026-05-20.

## Color palette

| Token | Hex | Use |
| --- | --- | --- |
| Primary | `#074240` | Deep forest teal — primary CTAs, headings on light, accents |
| Secondary | `#151515` | Near-black — body headings, high-contrast text |
| Accent | `#c3dbc5` | Sage — hover states, soft surfaces, ribbons |
| Tertiary | `#fae1fb` | Pale pink/lavender — link hover, decorative |
| Text | `#434a4a` | Warm dark gray — body copy |
| Background | `#f8f3ed` | Cream — page background |
| Alternate | `#ffffff` | White — cards |
| Border | `#8b8a82` | Warm gray — dividers, outlines |

The palette skews **earthy, calm, premium-wellness** — cream + forest green + sage with quiet pink accents. Pairs naturally with photography of Mt. Shasta, soft natural light, and warm portraiture.

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Primary / Secondary (display) | **Marcellus** | Serif; used for h1–h3 and feature copy |
| Body | **Lato** | Humanist sans; weight 400–500, 1.55 line-height |
| Accent / pull-quotes | **Playfair Display** | Higher-contrast serif for editorial moments |

All three are Google Fonts → `display=swap` on the live site. In Next.js, load via `next/font/google`.

Defaults observed on live site:
- Body: Lato 500 / 18px / 1.55
- Display: Marcellus 400 / 30px / 1.2
- Accent: Playfair Display

## Voice & tone

- Direct, intimate, second-person. "I'm here to help…"
- Doesn't sanitize grief. Profanity appears ("life's too short to NOT fix your shit"; the Echo of Sorrow post uses "fucking" repeatedly). Keep it. Do not soften.
- Recurring vocabulary: "inner warrior," "wounded warrior," "BAB's," "transformation," "holistic," "tribe," "grieve fully to live fully."
- Calls grieving people **warriors**, not victims or survivors.
- Pairs softness (yoga, mindfulness, nutrition) with grit (fix your shit, somatic release, no platitudes).

## Imagery direction

- Mt. Shasta foothills, soft natural light, golden hour.
- Heather on-camera; warm portraits with attendees.
- Group circles, hands, candles, retreat interiors.
- Avoid stock-y "wellness influencer" imagery; the site leans authentic, slightly grainy iPhone photography.

## Logo

- Word-mark / monogram located at `scraped/images/hmw_3x-8.avif`.
- Secondary brand assets: `Asset-4_4x-8.avif` and `Asset-5_4x-8.avif` (likely banner/logotype variations).

## Suggested Tailwind tokens

```ts
// tailwind.config.ts (excerpt)
extend: {
  colors: {
    brand: {
      primary: '#074240',
      secondary: '#151515',
      accent: '#c3dbc5',
      tertiary: '#fae1fb',
      text: '#434a4a',
      bg: '#f8f3ed',
      alt: '#ffffff',
      border: '#8b8a82',
    },
  },
  fontFamily: {
    display: ['var(--font-marcellus)', 'serif'],
    body: ['var(--font-lato)', 'sans-serif'],
    accent: ['var(--font-playfair)', 'serif'],
  },
}
```
