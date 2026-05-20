import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { footerLinks, site } from "@/lib/content";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-secondary text-brand-bg">
      <BrandMark className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 text-brand-bg/5 animate-slow-spin" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-3 relative">
        <div>
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
        </div>

        <div>
          <h4 className="font-accent italic text-brand-accent/90 tracking-[0.3em] uppercase text-xs mb-4">
            Follow
          </h4>
          <div className="flex gap-5 items-center">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 hover:text-brand-accent transition-all">
              <Facebook size={22} />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 hover:text-brand-accent transition-all">
              <Instagram size={22} />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 hover:text-brand-accent transition-all">
              <Linkedin size={22} />
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-accent transition-colors">
              TikTok
            </a>
            <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-accent transition-colors">
              Google
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-accent italic text-brand-accent/90 tracking-[0.3em] uppercase text-xs mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-accent transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
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
