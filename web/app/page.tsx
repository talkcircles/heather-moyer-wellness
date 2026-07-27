import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { pathways, retreats, site, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/heather-moyer-wellness-12.jpg"
        alt="Mt. Shasta foothills at golden hour"
        eyebrow="Mt. Shasta, California"
        title={
          <>
            Discover Your
            <br />
            Inner <span className="italic font-accent text-brand-accent">Warrior.</span>
          </>
        }
        subtitle="Where transformation meets the magic of Mt. Shasta. As a certified grief educator, grief coach, and retreat leader, I'm here to guide you toward holistic healing and empowerment."
        cta={
          <>
            <CtaButton href={site.calendly} external>
              Schedule an intro call
            </CtaButton>
            <CtaButton href="/retreats" variant="ghost">
              Explore retreats
            </CtaButton>
          </>
        }
      />

      {/* Marquee value strip */}
      <div className="relative bg-brand-secondary text-brand-bg py-5 overflow-hidden border-y border-brand-bg/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <ul key={i} className="flex shrink-0 items-center gap-10 px-5 font-accent italic text-lg">
              <li className="flex items-center gap-3">
                <BrandMark className="h-3.5 w-3.5 text-brand-accent" /> Certified Grief Educator
              </li>
              <li className="flex items-center gap-3">
                <BrandMark className="h-3.5 w-3.5 text-brand-accent" /> Grief Movement Guide
              </li>
              <li className="flex items-center gap-3">
                <BrandMark className="h-3.5 w-3.5 text-brand-accent" /> Mt. Shasta Native
              </li>
              <li className="flex items-center gap-3">
                <BrandMark className="h-3.5 w-3.5 text-brand-accent" /> Retreats Worldwide
              </li>
              <li className="flex items-center gap-3">
                <BrandMark className="h-3.5 w-3.5 text-brand-accent" /> Featured in The Good Trade
              </li>
              <li className="flex items-center gap-3">
                <BrandMark className="h-3.5 w-3.5 text-brand-accent" /> Weekly Tribe Meetups
              </li>
            </ul>
          ))}
        </div>
      </div>

      {/* Purpose — centered with brand mark above */}
      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl animate-float" />
        <Reveal>
          <div className="text-center max-w-3xl mx-auto relative">
            <BrandMark className="mx-auto h-16 w-16 text-brand-muted/70 animate-slow-spin mb-6" />
            <p className="font-accent italic text-brand-muted tracking-[0.3em] uppercase text-xs mb-5">
              My Purpose
            </p>
            <p className="font-display text-2xl md:text-3xl text-brand-secondary leading-snug">
              &ldquo;I&apos;m a grief coach and I&apos;m here to help grieving women overcome
              depression. We cannot walk this path alone and I&apos;m here to help you regain
              hope for the future. My coaching and retreats will help you transform your mind
              and your body. I believe in helping people transform their lives through somatic
              expression and emotional release techniques because life&apos;s too short to NOT
              fix your shit.&rdquo;
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Meet Heather */}
      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-accent-light/15 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <Reveal direction="left" className="order-2 md:order-1">
            <div className="img-hover-zoom relative aspect-[4/5] teardrop shadow-xl">
              <Image
                src="/images/meet-heather-moyer.jpg"
                alt="Heather Moyer portrait"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-3">
              <BrandMark className="h-4 w-4 text-brand-muted" />
              <span className="font-accent italic text-brand-muted tracking-[0.3em] uppercase text-xs">
                Your Guide
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-brand-secondary leading-tight">
              Meet <span className="italic font-accent text-brand-primary">Heather Moyer</span>
            </h2>
            <div className="mt-6 space-y-4 text-brand-text">
              <p>
                Third-generation Mt. Shasta native. Former K–8 teacher. Certified grief
                educator and grief movement guide with 20+ years of mental, emotional, and
                physical wellness tools in her toolkit.
              </p>
              <p>
                After losing her son Hunter in 2022, Heather built her practice around
                resilience and love-based healing — guiding others through the wild edge of
                sorrow with honesty, humor, and grit.
              </p>
              <CtaButton href="/meet-heather" variant="outline" className="mt-2">
                Read her story
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Pathways — teardrop cards */}
      <Section className="bg-brand-bg relative overflow-hidden">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl text-brand-secondary leading-tight">
              Pathways to Your{" "}
              <span className="italic font-accent text-brand-primary">Transformation</span>
            </h2>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.12}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pathways.map((p) => (
            <RevealItem key={p.title}>
              <Link href={p.href} className="group block h-full">
                <div className="img-hover-zoom relative aspect-[4/5] teardrop shadow-md group-hover:shadow-2xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/30 via-transparent to-transparent" />
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-2xl text-brand-secondary group-hover:text-brand-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-text leading-relaxed">{p.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-primary group-hover:gap-2.5 transition-all">
                    Learn more <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Mission — dark teal section */}
      <Section className="bg-brand-secondary text-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-primary/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[22rem] w-[22rem] rounded-full bg-brand-accent/15 blur-3xl" />
        <BrandMark className="pointer-events-none absolute right-[-10rem] bottom-[-10rem] h-[28rem] w-[28rem] text-brand-bg/5 animate-slow-spin" />
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <Reveal direction="left">
            <div className="relative aspect-[4/3] teardrop shadow-2xl ring-1 ring-brand-bg/15">
              <Image
                src="/images/ef99c3_598df2cedcf64339aec30840d310ef8emv2.avif"
                alt="Mission imagery"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className="font-accent italic text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">
              My Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Empowering you to{" "}
              <span className="italic font-accent text-brand-accent">thrive.</span>
            </h2>
            <p className="mt-6 text-brand-bg/85">
              Holistic wellness through nutrition, supplementation, yoga, and mindfulness —
              tailored to grief processing. We all have an inner warrior, even when wounded.
            </p>
            <div className="mt-8">
              <CtaButton href="/1-on-1-coaching" variant="ghost">
                Start with 1-on-1 coaching
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Upcoming retreats — live from WeTravel */}
      <Section className="bg-brand-bg relative overflow-hidden">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionEyebrow>Upcoming Retreats</SectionEyebrow>
              <SectionHeading>
                Step into the foothills of{" "}
                <span className="italic font-accent text-brand-primary">Mt. Shasta.</span>
              </SectionHeading>
            </div>
            <a
              href={site.wetravel}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-secondary transition-colors"
            >
              See all on WeTravel
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:rotate-45"
              />
            </a>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.08}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {retreats.map((r, i) => (
            <RevealItem key={`${r.name}-${i}`}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-3xl border border-brand-muted/15 bg-brand-alt p-7 hover:border-brand-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <BrandMark className="absolute -top-6 -right-6 h-24 w-24 text-brand-accent/15 group-hover:text-brand-accent/30 group-hover:rotate-45 transition-all duration-700" />
                <p className="text-xs text-brand-muted tracking-[0.2em] uppercase relative">
                  {r.dates}
                </p>
                <h3 className="mt-3 font-display text-2xl text-brand-secondary relative">
                  {r.name}
                </h3>
                <p className="mt-2 text-sm text-brand-text relative">{r.location}</p>
                <div className="mt-6 flex items-center justify-between text-sm relative">
                  <span className="font-display text-xl text-brand-primary">
                    ${r.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-brand-primary group-hover:gap-2.5 transition-all">
                    Book
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:rotate-45"
                    />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Testimonials */}
      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-brand-accent/10 blur-3xl" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <SectionEyebrow>Client Stories</SectionEyebrow>
            <SectionHeading>
              Real words from real{" "}
              <span className="italic font-accent text-brand-primary">warriors.</span>
            </SectionHeading>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.08}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative"
        >
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="h-full rounded-3xl bg-brand-alt p-7 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-brand-muted/10">
                <div className="flex items-center gap-1 text-brand-accent mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <blockquote className="text-brand-text italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-brand-accent/40"
                  />
                  <span className="font-display text-brand-secondary">{t.name}</span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-bg text-center relative overflow-hidden">
        <BrandMark className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] text-brand-accent/15 animate-slow-spin" />
        <Reveal>
          <SectionHeading className="max-w-3xl mx-auto relative">
            Take the{" "}
            <span className="italic font-accent text-brand-primary">first step</span> today.
          </SectionHeading>
          <p className="mt-5 text-brand-text max-w-2xl mx-auto relative">
            Book a free discovery call to talk through how we can support your journey.
          </p>
          <div className="mt-10 flex justify-center gap-3 flex-wrap relative">
            <CtaButton href={site.calendly} external>
              Schedule an intro call
            </CtaButton>
            <CtaButton href="/retreats" variant="outline">
              Explore retreats
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
