import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { Section, SectionEyebrow, SectionHeading } from "@/components/section";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about retreats in Mt. Shasta — travel, lodging, weather, and what to do nearby.",
};

export default function FaqPage() {
  return (
    <Section className="bg-brand-bg pt-44 md:pt-52 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-accent/25 blur-3xl animate-float" />
      <div className="max-w-3xl mx-auto relative">
        <Reveal>
          <div className="text-center">
            <SectionEyebrow>Good questions</SectionEyebrow>
            <SectionHeading>FAQ</SectionHeading>
          </div>
        </Reveal>
        <RevealStagger staggerChildren={0.07} className="mt-14 space-y-5">
          {faqs.map((faq) => (
            <RevealItem key={faq.q}>
              <details className="group rounded-2xl border border-brand-border/30 bg-brand-alt p-6 open:shadow-lg transition-shadow duration-300">
                <summary className="cursor-pointer list-none font-display text-xl text-brand-secondary flex items-start justify-between gap-3">
                  <span>{faq.q}</span>
                  <span className="font-accent italic text-brand-primary text-2xl leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-brand-text">{faq.a}</p>
              </details>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Section>
  );
}
