"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "@/lib/animations";

export default function QuoteSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-32 md:py-56 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
      >
        <blockquote className="font-headline text-3xl md:text-5xl lg:text-7xl italic text-on-surface leading-[1.15] mb-12 font-light">
          &ldquo;Precision is not about perfection, it&apos;s about creating
          solutions where <span className="text-gold italic">technical excellence</span> meets
          human needs.&rdquo;
        </blockquote>

        <div className="w-16 h-[1px] bg-gold mx-auto mb-8" />

        <cite className="font-label tracking-[0.4em] uppercase text-xs not-italic text-muted">
          Director&apos;s Note / inDEF
        </cite>
      </motion.div>
    </section>
  );
}
