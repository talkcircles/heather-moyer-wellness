"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  amount = 0.2,
  once = true,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  amount?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
}) {
  const reduce = useReducedMotion();
  const distance = reduce ? 0 : 32;
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };
  const off = offsets[direction];
  const MotionTag = motion[As] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, x: off.x, y: off.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealStagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  amount = 0.2,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = useReducedMotion();
  const distance = reduce ? 0 : 28;
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };
  const off = offsets[direction];
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: off.x, y: off.y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
