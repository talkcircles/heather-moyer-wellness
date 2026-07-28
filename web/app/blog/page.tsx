import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { RevealItem, RevealStagger } from "@/components/reveal";
import { Section } from "@/components/section";
import { blogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Essays and reflections from Heather Moyer on grief, healing, and retreat life.",
};

export default function BlogIndex() {
  return (
    <>
      <Hero
        image="/images/Private-Retreat-Sep-3-72025-21.jpg"
        alt="A quiet moment in the Mt. Shasta foothills"
        eyebrow="Writing"
        title={
          <>
            From the <span className="italic font-accent text-brand-accent">journal.</span>
          </>
        }
        subtitle="Essays and reflections on grief, healing, and retreat life."
      />

      <Section className="bg-brand-bg relative overflow-hidden">
      <RevealStagger
        staggerChildren={0.12}
        className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto"
      >
        {blogPosts.map((post) => (
          <RevealItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full rounded-3xl overflow-hidden bg-brand-alt shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/40 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-wide text-brand-primary">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-2 font-display text-2xl text-brand-secondary">{post.title}</h2>
                <p className="mt-3 text-brand-text text-sm">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-brand-primary group-hover:gap-3 transition-all">
                  Read post <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
      </Section>
    </>
  );
}
