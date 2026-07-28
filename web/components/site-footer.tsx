import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { site } from "@/lib/content";
import { BrandMark } from "@/components/brand-mark";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "1 on 1 Coaching", href: "/1-on-1-coaching" },
  { label: "Retreats", href: "/retreats" },
  { label: "Meet Heather", href: "/meet-heather" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-secondary text-brand-bg">
      <BrandMark className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 text-brand-bg/5 animate-slow-spin" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-[1.6fr_1fr_1.2fr] relative">
        {/* Brand + social */}
        <div className="max-w-sm">
          <Image
            src="/images/hmw_3x-8.avif"
            alt=""
            width={360}
            height={120}
            className="mb-6 h-12 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="font-display text-2xl">{site.shortBlurb}</p>
          <p className="mt-3 text-xs font-accent italic text-brand-accent tracking-[0.3em] uppercase">
            {site.tagline}
          </p>
          <div className="mt-7 flex flex-wrap gap-4 items-center">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 hover:text-brand-accent transition-all">
              <Facebook size={20} />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 hover:text-brand-accent transition-all">
              <Instagram size={20} />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 hover:text-brand-accent transition-all">
              <Linkedin size={20} />
            </a>
            <span aria-hidden className="h-4 w-px bg-brand-bg/20" />
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-accent transition-colors">
              TikTok
            </a>
            <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-accent transition-colors">
              Google
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-accent italic text-brand-accent/90 tracking-[0.3em] uppercase text-xs mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className="font-accent italic text-brand-accent/90 tracking-[0.3em] uppercase text-xs mb-4">
            Get in touch
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                Book a free intro call
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-accent transition-colors break-words">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-accent transition-colors">
                Contact page
              </Link>
            </li>
          </ul>
          <p className="mt-5 text-xs text-brand-bg/55">Mt. Shasta, California</p>
        </div>
      </div>
      <div className="border-t border-brand-bg/10 relative">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-brand-bg/60">
          © {new Date().getFullYear()} Heather Moyer Wellness LLC · Mt. Shasta, California
        </p>
      </div>
    </footer>
  );
}
