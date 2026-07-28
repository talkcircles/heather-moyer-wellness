import { Hero } from "@/components/hero";
import { RevealItem, RevealStagger } from "@/components/reveal";
import { Section } from "@/components/section";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about retreats in Mt. Shasta — travel, lodging, weather, and what to do nearby.",
};

export default function FaqPage() {
  return (
    <>
      <Hero
        image="/images/IMG_2202.jpg"
        alt="Mt. Shasta at golden hour"
        eyebrow="Good questions"
        title={
          <>
            Frequently asked{" "}
            <span className="italic font-accent text-brand-accent">questions.</span>
          </>
        }
        subtitle="Everything you need to know about joining a retreat in Mt. Shasta — travel, lodging, weather, and what to do nearby."
      />

      <Section className="bg-brand-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-accent/25 blur-3xl animate-float" />
        <div className="max-w-3xl mx-auto relative">
          <RevealStagger staggerChildren={0.07} className="space-y-5">
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
    </>
  );
}
