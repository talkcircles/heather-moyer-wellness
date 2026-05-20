import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/content";

export const metadata = {
  title: "Meet Heather",
  description:
    "Heather Moyer is a third-generation Mt. Shasta native, certified grief educator, grief movement guide, and yoga instructor.",
};

export default function MeetHeatherPage() {
  return (
    <>
      <Hero
        image="/images/Photo-Jul-29-2025-12-21-21.jpg"
        alt="Heather Moyer in Mt. Shasta"
        eyebrow="Your Guide"
        title={
          <>
            Meet <span className="italic font-accent text-brand-accent">Heather Moyer</span>
          </>
        }
        subtitle="In the light of majestic Mt. Shasta, California — a place renowned for its breathtaking scenery, spiritual energy, and serene landscapes — a third-generation native named Heather Moyer came into the world."
      />

      <Section className="bg-brand-bg">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal direction="left">
            <div className="img-hover-zoom relative aspect-[4/5] teardrop shadow-xl">
              <Image
                src="/images/TianaSheridanPhoto-HMW-12.jpg"
                alt="Heather portrait"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <SectionEyebrow withMark>A path to wellness</SectionEyebrow>
            <SectionHeading>
              Built from{" "}
              <span className="italic font-accent text-brand-primary">rock bottom.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              Heather&apos;s path to wellness began over a decade ago, when she hit rock
              bottom physically and mentally. At a time when many might falter, she
              committed to reclaiming her vitality. Drawing from holistic principles, she
              dove into nutrition, supplementation, yoga, and mindfulness techniques —
              tools that transformed her from the inside out.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-accent/30 blur-3xl animate-float" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <SectionEyebrow className="justify-center">Credentials</SectionEyebrow>
            <SectionHeading>
              Certified, trained,{" "}
              <span className="italic font-accent text-brand-primary">and lived.</span>
            </SectionHeading>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.12}
          className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto relative"
        >
          {[
            { year: "2023", title: "Certified Grief Educator" },
            { year: "2023", title: "Certified Grief Movement Guide" },
            { year: "2021", title: "200-hr Yoga Instructor" },
          ].map((c) => (
            <RevealItem key={c.title}>
              <li className="block h-full rounded-3xl bg-brand-alt p-6 shadow-sm text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-brand-muted/10">
                <BrandMark className="mx-auto h-6 w-6 text-brand-accent mb-3" />
                <p className="font-accent italic text-brand-muted text-xs uppercase tracking-[0.3em]">
                  {c.year}
                </p>
                <h3 className="mt-2 font-display text-xl text-brand-secondary">{c.title}</h3>
              </li>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-brand-bg">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <SectionEyebrow className="justify-center" withMark>
              A purpose
            </SectionEyebrow>
            <SectionHeading>
              Four pillars of{" "}
              <span className="italic font-accent text-brand-primary">holistic healing.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              Heather Moyer Wellness is a thriving hub of transformation.
            </p>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.1}
          className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {[
            "One-on-One grief coaching for grieving women.",
            "Grief & Healing and Fix Your Shit Retreats — 5-day experiences in the Mt. Shasta foothills.",
            "Heather's Tribe — weekly virtual meetups.",
            "Custom-designed experiences anywhere in the world.",
          ].map((line, i) => (
            <RevealItem key={i}>
              <li className="block h-full rounded-3xl bg-brand-alt p-6 border border-brand-muted/15 hover:border-brand-primary/40 hover:shadow-lg transition-all duration-500">
                <span className="font-accent italic text-brand-primary text-2xl">
                  0{i + 1}
                </span>
                <p className="mt-2 text-brand-text">{line}</p>
              </li>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-brand-secondary text-brand-bg text-center relative overflow-hidden">
        <BrandMark className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] text-brand-bg/8 animate-slow-spin" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[30rem] w-[30rem] rounded-full bg-brand-accent/15 blur-3xl animate-float" />
        </div>
        <Reveal>
          <p className="font-accent italic text-brand-accent tracking-[0.3em] uppercase text-xs mb-3 relative">
            Featured in
          </p>
          <p className="font-display text-3xl relative">The Good Trade · The Times</p>
          <h2 className="mt-16 font-display text-4xl md:text-5xl relative">
            Grieve fully to{" "}
            <span className="italic font-accent text-brand-accent">live fully.</span>
          </h2>
          <div className="mt-10 flex justify-center gap-3 flex-wrap relative">
            <CtaButton href={site.calendly} external variant="ghost">
              Schedule intro call
            </CtaButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
