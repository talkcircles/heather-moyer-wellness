import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { expect, locations, retreats, site } from "@/lib/content";

export const metadata = {
  title: "Retreats",
  description:
    "Immersive monthly wellness retreats in Mt. Shasta and worldwide — grief, healing, yoga, and community.",
};

export default function RetreatsPage() {
  return (
    <>
      <Hero
        image="/images/2026/pink-mt-shasta.jpg"
        alt="Mt. Shasta at pink alpenglow reflected over the lake"
        eyebrow="Wellness Retreats"
        title={
          <>
            Embark on a{" "}
            <span className="italic font-accent text-brand-accent">journey.</span>
          </>
        }
        subtitle="Escape to the transformative power of Heather Moyer Wellness Retreats, where the spiritual energy of Mt. Shasta, California meets holistic healing."
        cta={
          <CtaButton href={site.wetravel} external>
            See upcoming retreats
          </CtaButton>
        }
      />

      {/* Live retreats grid */}
      <Section className="bg-brand-bg">
        <Reveal>
          <div>
            <SectionEyebrow withMark>Upcoming dates</SectionEyebrow>
            <SectionHeading>
              Reserve your spot in{" "}
              <span className="italic font-accent text-brand-primary">Mt. Shasta.</span>
            </SectionHeading>
            <div className="mt-8">
              <CtaButton href={site.wetravel} external>
                Book now
              </CtaButton>
            </div>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.08}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {retreats.map((r, i) => (
            <RevealItem key={`${r.name}-${i}`}>
              <div className="group relative flex h-full flex-col rounded-3xl border border-brand-muted/15 bg-brand-alt p-7 hover:border-brand-primary/50 hover:shadow-xl transition-all duration-500 overflow-hidden">
                <BrandMark className="absolute -top-6 -right-6 h-24 w-24 text-brand-accent/15 group-hover:text-brand-accent/30 group-hover:rotate-45 transition-all duration-700" />
                <h3 className="font-display text-2xl leading-tight text-brand-secondary relative min-h-[4rem]">
                  {r.name}
                </h3>
                <p className="mt-3 text-sm text-brand-text relative">{r.location}</p>
                {r.pricePerPerson ? (
                  <p className="mt-4 font-display text-2xl text-brand-primary relative">
                    ${r.pricePerPerson.toLocaleString()}
                  </p>
                ) : (
                  <Link
                    href={r.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand-primary hover:gap-2.5 transition-all relative"
                  >
                    Contact Heather for pricing
                    <ArrowUpRight size={14} />
                  </Link>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-brand-bg">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionEyebrow withMark className="justify-center">
              The art of refined well-being
            </SectionEyebrow>
            <SectionHeading>
              Immersive. Monthly. Designed for{" "}
              <span className="italic font-accent text-brand-primary">healing.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              Whether you&apos;re navigating grief, seeking personal growth, or craving
              connection with nature, our immersive monthly retreats offer a safe space to
              reconnect with your inner warrior. Join us in Mt. Shasta or select worldwide
              locations for a life-changing experience filled with yoga, mindfulness,
              nutrition, and community.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-brand-accent/25 blur-3xl animate-float" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <SectionEyebrow className="justify-center">What to expect</SectionEyebrow>
            <SectionHeading>
              Designed by <span className="italic font-accent text-brand-primary">Heather.</span>
            </SectionHeading>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.08}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative"
        >
          {expect.map((item) => (
            <RevealItem key={item.title}>
              <div className="h-full rounded-3xl bg-brand-alt p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-brand-muted/10">
                <BrandMark className="h-6 w-6 text-brand-accent mb-4" />
                <h3 className="font-display text-xl text-brand-secondary">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-text">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-brand-secondary text-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[26rem] w-[26rem] rounded-full bg-brand-primary/30 blur-3xl animate-float" />
        <BrandMark className="pointer-events-none absolute left-[-10rem] bottom-[-10rem] h-[26rem] w-[26rem] text-brand-bg/5 animate-slow-spin" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <p className="font-accent italic text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">
              Worldwide locations
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Healing,{" "}
              <span className="italic font-accent text-brand-accent">
                wherever inspires you.
              </span>
            </h2>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.12}
          className="mt-12 grid gap-6 md:grid-cols-3 relative"
        >
          {locations.map((loc) => (
            <RevealItem key={loc.name}>
              <div className="h-full rounded-3xl border border-brand-bg/15 p-7 hover:border-brand-accent/60 hover:bg-brand-bg/5 transition-all duration-500">
                <h3 className="font-display text-2xl">{loc.name}</h3>
                <p className="mt-3 text-brand-bg/80">{loc.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section id="custom" className="bg-brand-bg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="img-hover-zoom relative aspect-[4/3] teardrop shadow-xl">
              <Image
                src="/images/010fea5b-2c42-4161-934c-1feb7c0d3955.jpg"
                alt="Custom retreat experiences"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <SectionEyebrow withMark>Custom designed</SectionEyebrow>
            <SectionHeading>
              Your vision,{" "}
              <span className="italic font-accent text-brand-primary">curated together.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              For a truly personalized healing experience, Heather Moyer Wellness offers
              Custom Designed Retreats. You hold the reins — choose the location, dates,
              and themes to create a retreat that aligns with your needs or those of your
              group of four or more. Private grief-focused getaways in Mt. Shasta, family
              bonding by the ocean, or corporate wellness anywhere in the world.
            </p>
            <div className="mt-8">
              <CtaButton href="/contact">Contact Heather</CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-brand-bg text-center relative overflow-hidden">
        <BrandMark className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[24rem] w-[24rem] text-brand-accent/15 animate-slow-spin" />
        <Reveal>
          <SectionHeading className="max-w-3xl mx-auto relative">
            What&apos;s your{" "}
            <span className="italic font-accent text-brand-primary">next step?</span>
          </SectionHeading>
          <p className="mt-5 text-brand-text max-w-2xl mx-auto relative">
            Take a step to start your journey toward your best self with Heather Moyer
            Wellness.
          </p>
          <div className="mt-10 relative">
            <CtaButton href={site.wetravel} external>
              Book now
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
