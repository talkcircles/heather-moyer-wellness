import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/content";

export const metadata = {
  title: "The Tribe — Grief & Healing Support Circle",
  description:
    "A compassionate online community to navigate grief, share your story, and grow as a Wounded Warrior. Weekly Zoom meetups and yoga for grief.",
};

const benefits = [
  {
    title: "Consistent support",
    body: "Weekly meet-ups to address new challenges, questions, and emotions as they arise.",
  },
  {
    title: "Safe space",
    body: "A compassionate environment to share tears, stories, and struggles without judgment.",
  },
  {
    title: "Yoga for grief",
    body: "Release pain and trauma through gentle, live yoga sessions designed for emotional healing.",
  },
  {
    title: "Community connection",
    body: "Build bonds with like-minded Wounded Warriors who understand your journey.",
  },
];

export default function TribePage() {
  return (
    <>
      <Hero
        image="/images/IMG_23101.jpg"
        alt="Group support circle"
        eyebrow="Join Heather's Tribe"
        title={
          <>
            Grief &amp; Healing{" "}
            <span className="italic font-accent text-brand-accent">Support Circle</span>
          </>
        }
        subtitle="A compassionate online community where you can navigate grief, share your story, and grow as a Wounded Warrior."
        cta={
          <CtaButton href={site.stripeTribe} external>
            Sign up today
          </CtaButton>
        }
      />

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-14 items-center relative">
          <Reveal direction="left">
            <SectionEyebrow withMark>Find your tribe</SectionEyebrow>
            <SectionHeading>
              Heal <span className="italic font-accent text-brand-primary">together.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              Led by Heather Moyer, a certified grief educator and transformational coach
              based in Mt. Shasta, California, our weekly Grief &amp; Healing Support
              Circle offers a safe space to connect, heal, and thrive.
            </p>
            <p className="mt-4 text-brand-text">
              Grief brings new challenges every day — but you don&apos;t have to face them
              alone.
            </p>
          </Reveal>
          <Reveal direction="right">
            <div className="img-hover-zoom relative aspect-[4/3] teardrop shadow-xl">
              <Image
                src="/images/Photo-Aug-02-2025-22-45-11.jpg"
                alt="Tribe meetup"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-accent-light/15 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-14 items-center relative">
          <Reveal direction="left">
            <SectionEyebrow>About the program</SectionEyebrow>
            <SectionHeading>
              A virtual haven for{" "}
              <span className="italic font-accent text-brand-primary">grievers.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              Heather&apos;s Tribe is for anyone seeking to process grief, find hope, and
              connect with others on a similar journey.
            </p>
            <p className="mt-4 text-brand-text">
              Founded in 2020 as part of Heather Moyer Wellness, this inclusive community
              is inspired by Heather&apos;s own path through the loss of her son, Hunter,
              in 2022.
            </p>
          </Reveal>
          <RevealStagger staggerChildren={0.08} className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <RevealItem key={b.title}>
                <div className="h-full rounded-3xl bg-brand-alt p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-brand-muted/10">
                  <BrandMark className="h-5 w-5 text-brand-accent mb-3" />
                  <h3 className="font-display text-lg text-brand-primary">{b.title}</h3>
                  <p className="mt-2 text-sm text-brand-text">{b.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Section>

      <Section className="bg-brand-secondary text-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[26rem] w-[26rem] rounded-full bg-brand-primary/30 blur-3xl animate-float" />
        <BrandMark className="pointer-events-none absolute left-[-10rem] -bottom-32 h-[26rem] w-[26rem] text-brand-bg/5 animate-slow-spin" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <p className="font-accent italic text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">
              Weekly schedule
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Connect every week,{" "}
              <span className="italic font-accent text-brand-accent">from anywhere.</span>
            </h2>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.15}
          className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto relative"
        >
          <RevealItem>
            <div className="h-full rounded-3xl bg-brand-bg text-brand-text p-7 hover:shadow-2xl transition-shadow duration-500">
              <BrandMark className="h-6 w-6 text-brand-primary mb-3" />
              <h3 className="font-display text-2xl text-brand-secondary">
                Grief &amp; Healing Support Circle
              </h3>
              <ul className="mt-4 text-sm space-y-1.5">
                <li>Live 60-minute sessions</li>
                <li>Every Tuesday</li>
                <li>5 PM PT / 8 PM ET</li>
              </ul>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="h-full rounded-3xl bg-brand-bg text-brand-text p-7 hover:shadow-2xl transition-shadow duration-500">
              <BrandMark className="h-6 w-6 text-brand-primary mb-3" />
              <h3 className="font-display text-2xl text-brand-secondary">
                Yoga for Grief
              </h3>
              <ul className="mt-4 text-sm space-y-1.5">
                <li>Live 60-minute sessions</li>
                <li>Every Sunday</li>
                <li>10 AM PT / 1 PM ET</li>
              </ul>
            </div>
          </RevealItem>
        </RevealStagger>
        <div className="mt-12 text-center relative">
          <CtaButton href={site.stripeTribe} external variant="ghost">
            Book your spot
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
