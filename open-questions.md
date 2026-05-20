# What I need from you to finish this

The Next.js scaffold is built, branded, and building cleanly with all of Heather's content carried over. To ship it I still need answers / assets on the following.

## 1. Goals & scope
- **Direct replacement or experiment?** Should the new Next.js site replace `heathermoyer.co` 1-for-1, or are you exploring a redesign before committing?
- **Heather's involvement.** Do I have license to rewrite copy where the current site is thin (e.g. the retreats page is mostly generic — there's no real itinerary), or do I keep things verbatim until Heather reviews?
- **Timeline / first review date?** Want me to spin up a Vercel preview now or wait until X?

## 2. Domain & infra
- Will this go on **heathermoyer.co** (Heather already owns it) or a new domain?
- Where is DNS today (Cloudflare, Squarespace registrar, GoDaddy)? Need that to point to Vercel later.
- Should I create a GitHub repo under `patrickcmaxwell/` and wire Vercel automatically, or do you want it under a different org?

## 3. Content / copy clarifications
- **1-on-1 Coaching pricing.** The live site labels a table "Participation Packages" with 3-Day Reset / 7-Day Immersion / Couples — under the *1-on-1* page. That reads like retreat room pricing, not coaching pricing. Which is it? Should it move to /retreats?
- **The Tribe price.** The Stripe button (`buy.stripe.com/…`) sends people straight to checkout — I don't have the price to show on the page. Is the membership $X/mo? One-time? Worth showing on-page.
- **Custom retreats inquiry flow.** Currently a `mailto:`. Want me to build a real inquiry form (name, group size, location, dates, themes)? If yes — where do submissions go?
- **Newsletter / email capture.** The current site has none. Want one? (Mailchimp / ConvertKit / Beehiiv / Resend?)
- **Retreat itineraries.** The retreats page is light. Got a sample day-by-day schedule we could publish?

## 4. Contact form
The current contact page has no form, only a `mailto:`. Two options:
- **Keep mailto + Calendly only** (current behavior, ship-ready).
- **Add a real form** — needs a backend. Cheapest: Vercel form action → email via Resend/Postmark, or Notion DB. Tell me which.

## 5. Assets
Pulled from the live site:
- 25 hero/feature photos at original resolution (`scraped/images/`)
- 6 testimonial avatars
- Logo (`hmw_3x-8.avif`) + the two `Asset-4/5_4x-8.avif` variants
- OG image (`Heather-Moyer-OG-Image.png`)

**Still want:**
- Vector logo (SVG, PDF, or AI) — the AVIF rasters compress oddly on retina. If Heather has the original Illustrator file, that's gold.
- A favicon set if you have a tighter one than the WordPress default.
- A short Heather intro video (for the Meet Heather hero), if one exists.
- Permission/sourcing on retreat photography (is it all Heather's IP, or is some Tiana Sheridan's? — there's a `TianaSheridanPhoto-HMW-…` file, suggests a photographer credit).

## 6. Integrations to plug in later
- **Calendly** — currently hardcoded link, fine. Want the inline widget on /contact?
- **WeTravel** — same. Could embed their booking widget, but link-outs are simpler.
- **Stripe (Tribe)** — same. If membership grows, would justify a real members area (Stripe Customer Portal + auth).
- **Analytics** — already wired `@vercel/analytics`. Add Google Analytics / Plausible / Meta pixel too?
- **SEO** — should I generate sitemap + robots + a structured-data block (LocalBusiness, Service)?

## 7. Legal / boilerplate
- Privacy policy + terms? The current site doesn't have them visible. If she sells via Stripe and collects emails, she really should.
- Cookie banner needed? (Only if we add tracking beyond Vercel Analytics.)

---

**My recommended next move:** answer §1, §2, and §4 — that unblocks me to deploy a Vercel preview Heather can click through and react to. Everything else can iterate after.
