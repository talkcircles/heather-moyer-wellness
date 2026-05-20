"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(231, 237, 247, 0.86)" : "rgba(231, 237, 247, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderBottomColor: scrolled ? "rgba(85, 106, 137, 0.18)" : "rgba(85, 106, 137, 0)",
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-transparent"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <Link
            href="/"
            aria-label="Heather Moyer Wellness — home"
            className="flex items-center shrink-0"
          >
            <motion.div
              animate={{ scale: scrolled ? 0.88 : 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative origin-left"
            >
              {/* dark logo, visible on scroll */}
              <motion.div
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/hmw_3x-8.avif"
                  alt="Heather Moyer Wellness"
                  width={360}
                  height={120}
                  priority
                  className="h-10 w-auto md:h-12"
                />
              </motion.div>
              {/* white logo, visible at top */}
              <motion.div
                animate={{ opacity: scrolled ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
                style={{ filter: "brightness(0) invert(1)" }}
              >
                <Image
                  src="/images/hmw_3x-8.avif"
                  alt=""
                  width={360}
                  height={120}
                  priority
                  className="h-10 w-auto md:h-12 drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]"
                />
              </motion.div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative transition-colors duration-300",
                  scrolled
                    ? "text-brand-secondary hover:text-brand-primary"
                    : "text-brand-bg hover:text-brand-accent drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full",
                    scrolled ? "bg-brand-primary" : "bg-brand-accent"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                backgroundColor: scrolled ? "#ffffff" : "rgba(231, 237, 247, 0.12)",
                color: scrolled ? "#13272c" : "#e7edf7",
                borderColor: scrolled ? "rgba(85, 106, 137, 0.2)" : "rgba(231, 237, 247, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm tracking-wide backdrop-blur hover:!bg-brand-accent hover:!text-brand-secondary hover:!border-brand-accent transition-[background,color,border,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Intro Call
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "md:hidden p-2 transition-colors",
                scrolled
                  ? "text-brand-secondary hover:text-brand-primary"
                  : "text-brand-bg hover:text-brand-accent drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
              )}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>{open && <MobileMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[60] md:hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        exit={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-secondary"
      >
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-accent/35 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-accent-light/20 blur-3xl" />
        {/* giant rotating brand mark in the background */}
        <BrandMark className="absolute right-[-12rem] bottom-[-12rem] h-[34rem] w-[34rem] text-brand-bg/5 animate-slow-spin" />
      </motion.div>

      <div className="relative h-full flex flex-col">
        <div className="flex items-center justify-between px-6 pt-6">
          <Image
            src="/images/hmw_3x-8.avif"
            alt=""
            width={360}
            height={120}
            className="h-10 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-brand-bg hover:text-brand-accent transition-colors"
          >
            <X size={32} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center px-8">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: "easeOut" }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group block py-3 font-display text-4xl text-brand-bg hover:text-brand-accent transition-colors"
                >
                  <span className="inline-block transition-transform group-hover:translate-x-2">
                    {item.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="px-8 pb-12 space-y-4"
        >
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block w-full text-center rounded-full bg-brand-bg text-brand-secondary px-6 py-4 text-sm tracking-wide hover:bg-brand-accent transition-colors"
          >
            Schedule an intro call
          </a>
          <p className="text-center text-brand-bg/70 text-xs font-accent italic tracking-[0.3em] uppercase">
            {site.tagline}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
