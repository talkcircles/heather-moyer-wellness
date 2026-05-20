"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandMark } from "@/components/brand-mark";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // run on next frame so the entrance animation has time to play
    const t = setTimeout(() => setDone(true), 1400);
    // ensure scroll lock while loader is up
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg"
        >
          {/* gradient wash behind logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
          </motion.div>

          <div className="relative flex flex-col items-center gap-7">
            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* outer ring */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute inset-0 -m-6 rounded-full border border-brand-primary/30"
              />
              {/* second ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 -m-12 rounded-full border border-brand-primary/15"
              />
              <BrandMark className="h-20 w-20 text-brand-primary animate-slow-spin" title="Heather Moyer Wellness" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="font-accent italic text-brand-primary tracking-[0.3em] text-xs uppercase"
            >
              Grieve fully · live fully
            </motion.p>

            {/* progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative h-px w-40 overflow-hidden bg-brand-primary/15"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-full bg-brand-primary"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
