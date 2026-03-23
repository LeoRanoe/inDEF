"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, stagger } from "@/lib/animations";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-56 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20 text-center"
        >
          <span className="font-label text-steel tracking-[0.4em] uppercase text-xs block mb-6">
            Our Philosophy
          </span>
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface font-light leading-tight">
            Vision, Mission & Values
          </h2>
        </motion.div>

        {/* Vision & Mission - Top Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32"
        >
          {/* Our Vision */}
          <motion.div variants={fadeUp} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative border-l-4 border-teal p-12 bg-surface-low/30 backdrop-blur-sm hover:bg-surface-low/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-teal/20 rounded-lg">
                  <div className="w-2 h-6 bg-teal" />
                </div>
                <h3 className="font-label text-teal tracking-[0.4em] uppercase text-xs">
                  Our Vision
                </h3>
              </div>
              <p className="text-on-surface text-lg leading-relaxed font-body font-light">
                To redefine the future of architecture and construction by seamlessly blending creativity, precision and sustainable practices, taking every design to new heights.
              </p>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={fadeUp} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative border-l-4 border-teal p-12 bg-surface-low/30 backdrop-blur-sm hover:bg-surface-low/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-teal/20 rounded-lg">
                  <div className="w-2 h-6 bg-teal" />
                </div>
                <h3 className="font-label text-teal tracking-[0.4em] uppercase text-xs">
                  Our Mission
                </h3>
              </div>
              <p className="text-on-surface text-lg leading-relaxed font-body font-light">
                To make building your dream space simple, clear, and rewarding. Combining innovative design, precision execution, and a process that lets you see and love your project before it&apos;s built.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Who We Are - Bottom Section */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 border-t border-steel/10"
        >
          {/* Left Text */}
          <motion.div variants={fadeUp}>
            <span className="font-label text-steel tracking-[0.4em] uppercase text-xs block mb-6">
              About inDEF
            </span>
            <h3 className="font-headline text-5xl md:text-6xl text-on-surface mb-8 leading-tight font-light">
              Who We Are
            </h3>
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

          {/* Right Core Values Block */}
          <motion.div variants={fadeUp}>
            <div className="border-l-4 border-gold p-12 bg-surface-low/50 backdrop-blur-sm">
              <h4 className="font-label text-gold tracking-[0.2em] uppercase text-xs block mb-8">
                Core Values
              </h4>
              <p className="font-headline text-5xl md:text-6xl italic text-on-surface leading-tight font-light mb-8">
                Creativity
                <span className="text-gold"> · </span>
                Clarity
                <span className="text-gold"> · </span>
                Care
              </p>
              <div className="h-1 w-12 bg-gold" />
              <p className="text-muted text-sm mt-8 font-body font-light leading-relaxed">
                These three principles guide every decision, design, and interaction we have with our clients.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
