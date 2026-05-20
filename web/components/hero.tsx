"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cta?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function Hero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  cta,
  align = "center",
  className,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden flex items-center min-h-dvh",
        className
      )}
    >
      <motion.div
        initial={{ scale: reduce ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20"
      >
        <Image src={image} alt={alt} fill priority className="object-cover" />
      </motion.div>

      {/* Light slate-teal tint — keeps the image visible while unifying the hue */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(19,39,44,0.42) 0%, rgba(44,86,97,0.38) 55%, rgba(85,106,137,0.42) 100%)",
        }}
      />

      {/* Soft radial darkening behind the headline only */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at center, rgba(19,39,44,0.45) 0%, rgba(19,39,44,0.15) 55%, transparent 80%)",
        }}
      />

      {/* decorative brand-tinted blurs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="absolute -top-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-brand-accent/30 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="absolute -bottom-40 -left-16 h-[24rem] w-[24rem] rounded-full bg-brand-primary/40 blur-[100px]"
        />
      </div>

      <div
        className={cn(
          "relative w-full mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-36 md:pb-20 text-brand-bg",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-accent italic text-brand-accent/95 mb-4 tracking-[0.18em] uppercase text-xs"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl leading-[1.05] text-balance text-brand-bg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className={cn(
              "mt-6 text-lg md:text-xl text-brand-bg/90",
              align === "center" && "max-w-2xl mx-auto"
            )}
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className={cn("mt-10 flex flex-wrap gap-3", align === "center" && "justify-center")}
          >
            {cta}
          </motion.div>
        )}
      </div>
    </section>
  );
}
