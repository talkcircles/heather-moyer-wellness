import Image from "next/image";
import { ArrowUpRight, CalendarDays, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Heather Moyer — book a free intro call, send an email, or reach out on social.",
};

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "LinkedIn", href: site.social.linkedin, Icon: Linkedin },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        image="/images/2026/panther-meadow.jpg"
        alt="Wildflowers below Mt. Shasta"
        imagePosition="object-center"
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s <span className="italic font-accent text-brand-accent">connect.</span>
          </>
        }
        subtitle="The fastest way to start is a free 30-minute intro call. Prefer to write? Send an email or reach out on social — I read every message."
      />

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl animate-float" />
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] teardrop shadow-xl">
              <Image
                src="/images/meet-heather-moyer.jpg"
                alt="Heather Moyer"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <SectionEyebrow withMark>Ways to reach me</SectionEyebrow>
            <SectionHeading>
              Reach out <span className="italic font-accent text-brand-primary">any time.</span>
            </SectionHeading>

            <div className="mt-8 space-y-4">
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-brand-muted/15 bg-brand-alt p-5 hover:border-brand-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/25 text-brand-primary">
                  <CalendarDays size={22} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-lg text-brand-secondary">
                    Book a free intro call
                  </span>
                  <span className="block text-sm text-brand-text">
                    A relaxed 30 minutes to talk through where you are — no pressure.
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-brand-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-brand-muted/15 bg-brand-alt p-5 hover:border-brand-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/25 text-brand-primary">
                  <Mail size={22} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-lg text-brand-secondary">
                    Email Heather
                  </span>
                  <span className="block text-sm text-brand-text break-words">
                    {site.email}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-brand-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="font-accent italic text-brand-muted text-xs uppercase tracking-[0.3em]">
                Also on
              </span>
              <div className="flex items-center gap-4 text-brand-primary">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-brand-secondary hover:scale-110 transition-transform"
                  >
                    <Icon size={20} />
                  </a>
                ))}
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand-secondary transition-colors"
                >
                  TikTok
                </a>
                <a
                  href={site.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand-secondary transition-colors"
                >
                  Google reviews
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
