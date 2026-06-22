# Heather Moyer Wellness

New site for [Heather Moyer Wellness](https://www.heathermoyer.co/) — Next.js 16 + Tailwind 4 build for Vercel.

## Directory map

```
heather-moyer-wellness/
├── brand.md              # colors, type, voice, logo tokens (from live site)
├── scraped/
│   ├── content/          # every page captured as markdown
│   │   ├── 00-site-map.md
│   │   ├── 01-home.md
│   │   ├── 02-1-on-1-coaching.md
│   │   ├── 03-retreats.md
│   │   ├── 04-the-tribe.md
│   │   ├── 05-meet-heather.md
│   │   ├── 06-contact.md
│   │   ├── 07-faq.md
│   │   ├── 08-blog-index.md
│   │   └── blog/         # full blog posts
│   ├── images/           # original-resolution images + named avatars
│   └── raw-html/         # raw curl'd HTML in case we need to re-extract
├── open-questions.md     # what I need from Heather/Patrick to finish
└── web/                  # the Next.js app (Vercel target)
    ├── app/
    │   ├── layout.tsx
    │   ├── globals.css
    │   ├── page.tsx                                     # /
    │   ├── 1-on-1-coaching/page.tsx                     # /1-on-1-coaching
    │   ├── retreats/page.tsx                            # /retreats
    │   ├── the-tribe/page.tsx                           # /the-tribe
    │   ├── meet-heather/page.tsx                        # /meet-heather
    │   ├── contact/page.tsx                             # /contact
    │   ├── faq/page.tsx                                 # /faq
    │   └── blog/
    │       ├── page.tsx                                 # /blog
    │       ├── the-echo-of-sorrow/page.tsx
    │       └── 10-biggest-things-…/page.tsx
    ├── components/       # SiteHeader, SiteFooter, Section, CtaButton
    ├── lib/              # content.ts (all data) + utils.ts (cn helper)
    └── public/images/    # all assets copied from scraped/images
```

## Running locally

```bash
cd web
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build — verified passing
```

## Stack

- **Next.js 16** App Router · Turbopack
- **React 19**, TypeScript 5.7, strict mode
- **Tailwind v4** (CSS-first config — see `app/globals.css` `@theme` block)
- **Fonts via ********`next/font/google`**: Marcellus (display), Lato (body), Playfair Display (accent)
- **`@vercel/analytics`** wired in `app/layout.tsx`
- All pages **prerender as static** — fully edge-cacheable

## Design choices

- Kept the brand tokens lifted directly from the live `zen-retreat` WP theme (deep forest teal, cream, sage). See `brand.md`.
- Restructured the home page to flow: hero → purpose → meet Heather → pathways → mission → upcoming retreats → testimonials → final CTA. Same content, cleaner editorial pacing.
- All bookings push out to **Calendly** (intro call), **WeTravel** (retreats), **Stripe** (Tribe). No payment logic in the app yet.
- `1-on-1 Coaching` page faithfully reproduces the pricing tables but flags an ambiguity (see `open-questions.md`).
- Blog has its own full-bleed editorial layout with the two existing essays carried over verbatim.

## What's intentionally NOT here yet

- Contact **form** (live site doesn't have one either — confirm if Heather wants one).
- Newsletter signup.
- Real CMS — copy lives in `lib/content.ts` for now. Easy to migrate to MDX/Sanity/Notion later.
- Custom domain, Vercel project link, env vars.

See `open-questions.md` for what's blocking us from going live.
