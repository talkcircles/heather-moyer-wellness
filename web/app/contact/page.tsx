import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { Reveal } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { site } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Heather Moyer — email, intro call, or follow on social.",
};

export default function ContactPage() {
  return (
    <Section className="bg-brand-bg pt-44 md:pt-52 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[34rem] w-[34rem] rounded-full bg-brand-accent/25 blur-3xl animate-float" />
      </div>
      <Reveal>
        <div className="max-w-3xl mx-auto text-center relative">
          <SectionEyebrow>Get in touch</SectionEyebrow>
          <SectionHeading>Contact</SectionHeading>
          <p className="mt-6 text-brand-text">
            The fastest way to start is a free 30-minute intro call. Otherwise, send
            Heather an email or reach out on social — she reads every message.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
            <CtaButton href={site.calendly} external>
              Schedule intro call
            </CtaButton>
            <CtaButton href={`mailto:${site.email}`} variant="outline">
              <Mail size={16} className="mr-2" />
              Email Heather
            </CtaButton>
          </div>

          <div className="mt-16">
            <p className="font-accent italic text-brand-primary text-sm uppercase tracking-wide">
              Also on
            </p>
            <div className="mt-4 flex justify-center gap-5 text-brand-primary">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 hover:text-brand-secondary transition-transform">
                <Facebook size={22} />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 hover:text-brand-secondary transition-transform">
                <Instagram size={22} />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 hover:text-brand-secondary transition-transform">
                <Linkedin size={22} />
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary">
                TikTok
              </a>
              <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary">
                Google reviews
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
