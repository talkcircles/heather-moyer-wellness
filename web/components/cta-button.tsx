import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  external?: boolean;
  variant?: "primary" | "outline" | "ghost";
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function CtaButton({
  href,
  external,
  variant = "primary",
  withArrow = true,
  children,
  className,
}: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5";
  const styles = {
    primary:
      "bg-brand-accent text-brand-secondary hover:bg-brand-primary hover:text-brand-bg shadow-sm hover:shadow-xl",
    outline:
      "border border-brand-primary/40 text-brand-primary hover:bg-brand-primary hover:text-brand-bg hover:border-brand-primary",
    ghost:
      "bg-brand-bg/15 backdrop-blur text-brand-bg hover:bg-brand-bg hover:text-brand-primary border border-brand-bg/30",
  }[variant];

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles, className)}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, styles, className)}>
      {inner}
    </Link>
  );
}
