import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { CtaButton } from "@/components/cta-button";
import { Hero } from "@/components/hero";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/content";

export const metadata = {
  title: "1-on-1 Coaching",
  description:
    "Personalized grief coaching with Heather Moyer — flexible weekly sessions, remote or in-person, tailored to your unique path.",
};

const pillars = [
  { title: "Personalized", body: "Sessions tailored to your needs." },
  { title: "Focus", body: "Grief counseling to overcome depression." },
  { title: "Holistic tools", body: "Mindfulness, yoga, nutrition, and more." },
  { title: "Flexible scheduling", body: "In-person or remote, on your own time." },
];

const path = [
  {
    n: "01",
    title: "Define your focus",
    body: "In your free discovery call, share your story and goals.",
  },
  {
    n: "02",
    title: "Choose your schedule",
    body: "An online 8-week program with my support, or at your own pace for deep, lasting growth.",
  },
  {
    n: "03",
    title: "Select your setting",
    body: "In-person in Mt. Shasta, or remote from wherever you are.",
  },
  {
    n: "04",
    title: "Transform with guidance",
    body: "Mindfulness exercises, grief integration techniques, trauma-informed discussion, and gentle somatic movement.",
  },
];

const packages = [
  {
    name: "3-Day Reset",
    blurb: "A gentle weekend to unplug and begin again.",
    rows: [
      { label: "Single Room", regular: "$420", early: "$380" },
      { label: "Shared Room", regular: "$360", early: "$330" },
    ],
  },
  {
    name: "7-Day Immersion",
    blurb: "A full week of deep rest and healing practices.",
    rows: [
      { label: "Single Room", regular: "$890", early: "$820" },
      { label: "Shared Room", regular: "$790", early: "$730" },
    ],
  },
  {
    name: "Couples Package",
    blurb: "Shared accommodation and dual participation for two.",
    rows: [
      { label: "Standard Room", regular: "$1,600", early: "$1,480" },
      { label: "Premium Room", regular: "$1,800", early: "$1,650" },
    ],
  },
];

export default function CoachingPage() {
  return (
    <>
      <Hero
        image="/images/IMG_2202.jpg"
        alt="Mt. Shasta serenity"
        eyebrow="1-on-1"
        title={
          <>
            Transform <span className="italic font-accent text-brand-accent">Your Life</span>
          </>
        }
        subtitle="Take control of your healing and growth with 1-on-1 coaching from Heather Moyer."
        cta={
          <CtaButton href={site.calendly} external>
            Schedule intro call
          </CtaButton>
        }
      />

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-accent/25 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-14 items-center relative">
          <Reveal direction="left">
            <SectionEyebrow withMark>Grief coach</SectionEyebrow>
            <SectionHeading>
              You choose a{" "}
              <span className="italic font-accent text-brand-primary">path forward.</span>
            </SectionHeading>
            <p className="mt-6 text-brand-text">
              Heather is a certified grief educator and grief coach based in Mt. Shasta,
              California. Whether you&apos;re navigating grief, feeling stuck, or overcome
              with depression, Heather will provide the tools to unlock your inner warrior.
              With flexible weekly sessions, in-person or remote, Heather tailors each
              step to your unique needs — empowering you to live vibrantly, anywhere in
              the world.
            </p>
          </Reveal>
          <Reveal direction="right">
            <div className="img-hover-zoom relative aspect-[4/5] teardrop shadow-xl">
              <Image
                src="/images/Photo-Jul-29-2025-12-21-20.jpg"
                alt="Coaching in Mt. Shasta"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-accent-light/15 blur-3xl" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <SectionEyebrow className="justify-center">Why 1-on-1?</SectionEyebrow>
            <SectionHeading>
              Your coaching,{" "}
              <span className="italic font-accent text-brand-primary">your way.</span>
            </SectionHeading>
            <p className="mt-5 text-brand-text">
              You decide what&apos;s holding you back — whether it&apos;s processing loss,
              overcoming emotional hurdles, or finding hope for the future.
            </p>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.1}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative"
        >
          {pillars.map((p) => (
            <RevealItem key={p.title}>
              <div className="h-full rounded-3xl bg-brand-alt p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-brand-muted/10">
                <BrandMark className="h-5 w-5 text-brand-accent mb-3" />
                <h3 className="font-display text-xl text-brand-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-text">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>

      <Section className="bg-brand-bg">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <SectionEyebrow className="justify-center" withMark>
              Your path to transformation
            </SectionEyebrow>
            <SectionHeading>
              Free yourself for the{" "}
              <span className="italic font-accent text-brand-primary">future.</span>
            </SectionHeading>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.1}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {path.map((step) => (
            <RevealItem key={step.n}>
              <li className="block h-full rounded-3xl bg-brand-alt p-7 border border-brand-muted/15 hover:border-brand-primary/40 hover:shadow-lg transition-all duration-500">
                <span className="font-accent italic text-brand-primary text-2xl">
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-2xl text-brand-secondary">
                  {step.title}
                </h3>
                <p className="mt-2 text-brand-text">{step.body}</p>
              </li>
            </RevealItem>
          ))}
        </RevealStagger>
        <div className="text-center mt-12">
          <CtaButton href={site.calendly} external>
            Find out more
          </CtaButton>
        </div>
      </Section>

      <Section className="bg-brand-secondary text-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-primary/30 blur-3xl animate-float" />
        <BrandMark className="pointer-events-none absolute -left-32 -bottom-32 h-[24rem] w-[24rem] text-brand-bg/5 animate-slow-spin" />
        <Reveal>
          <div className="text-center max-w-2xl mx-auto relative">
            <p className="font-accent italic text-brand-accent tracking-[0.3em] uppercase text-xs mb-3">
              Participation packages
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Start your{" "}
              <span className="italic font-accent text-brand-accent">escape.</span>
            </h2>
          </div>
        </Reveal>
        <RevealStagger
          staggerChildren={0.12}
          className="mt-12 grid gap-6 md:grid-cols-3 relative"
        >
          {packages.map((pkg) => (
            <RevealItem key={pkg.name}>
              <div className="h-full rounded-3xl bg-brand-bg text-brand-text p-7 hover:shadow-2xl transition-shadow duration-500">
                <h3 className="font-display text-2xl text-brand-secondary">{pkg.name}</h3>
                <p className="mt-2 text-sm text-brand-text">{pkg.blurb}</p>
                <table className="mt-5 w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-brand-muted">
                      <th className="py-2">Room</th>
                      <th className="py-2">Regular</th>
                      <th className="py-2">Early</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.rows.map((row) => (
                      <tr key={row.label} className="border-t border-brand-muted/20">
                        <td className="py-2 text-brand-secondary">{row.label}</td>
                        <td className="py-2">{row.regular}</td>
                        <td className="py-2 text-brand-primary">{row.early}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Section>
    </>
  );
}
