"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, stagger } from "@/lib/animations";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-40 bg-dark-bg relative">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text */}
          <motion.div variants={fadeUp}>
            <span className="font-label text-steel tracking-[0.4em] uppercase text-xs block mb-6">
              Introduction
            </span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface mb-8 leading-tight font-light">
              Who We Are
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6 font-body font-light max-w-lg">
              At inDEF Design & Construction N.V., we combine creativity, clarity,
              and care to deliver spaces that inspire and stand the test of time. Our
              methodology is rooted in absolute technical precision, utilizing
              high-end 3D environments to perfect every detail before a single
              foundation is poured.
            </p>
            <p className="text-muted text-lg leading-relaxed font-body font-light max-w-lg">
              From vision to reality, we create your dream space without the
              stress — see your space before construction begins.
            </p>
          </motion.div>

          {/* Right Quote Block */}
          <motion.div variants={fadeUp}>
            <div className="border-l-4 border-gold p-10 bg-surface-low/50">
              <p className="font-headline text-4xl md:text-5xl italic text-on-surface leading-tight font-light">
                Creativity
                <span className="text-gold"> · </span>
                Clarity
                <span className="text-gold"> · </span>
                Care
              </p>
              <div className="h-[2px] w-10 bg-gold mt-8" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
