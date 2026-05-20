import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/brand-mark";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionEyebrow({
  children,
  className,
  withMark = false,
}: {
  children: React.ReactNode;
  className?: string;
  withMark?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2 mb-3", className)}>
      {withMark && <BrandMark className="h-4 w-4 text-brand-muted shrink-0" />}
      <p className="font-accent italic text-brand-muted tracking-[0.3em] uppercase text-xs">
        {children}
      </p>
    </div>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-4xl md:text-5xl leading-tight text-brand-secondary",
        className
      )}
    >
      {children}
    </h2>
  );
}
