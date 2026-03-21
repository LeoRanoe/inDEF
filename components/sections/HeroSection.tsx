"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
          alt="Modern architectural building facade"
          fill
          className="object-cover brightness-[0.28]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 md:pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8">
            <motion.h1
              variants={fadeUp}
              className="font-headline text-[clamp(3rem,9vw,8rem)] leading-[0.9] text-on-surface mb-6 font-light"
            >
              Technical Precision.
              <br />
              <span className="italic text-steel">Architectural Soul.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-headline text-xl md:text-2xl italic text-muted mb-10 font-light"
            >
              Crafting the Ethereal through the Structural.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="font-label uppercase tracking-[0.2em] text-xs bg-bright-blue text-white px-8 py-3.5 hover:bg-steel transition-colors duration-300 font-semibold"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="font-label uppercase tracking-[0.2em] text-xs border border-on-surface/30 text-on-surface px-8 py-3.5 hover:border-on-surface hover:bg-on-surface/5 transition-[border-color,background-color] duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex gap-4 items-center mt-10"
            >
              <div className="h-[1px] w-16 bg-steel" />
              <p className="font-label tracking-[0.4em] uppercase text-muted text-[10px]">
                Est. 2024 — Suriname
              </p>
            </motion.div>
          </div>

          {/* Decorative Quote Block */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="bg-dark-bg/80 border-l-2 border-steel p-8">
              <p className="font-headline text-2xl italic text-on-surface font-light mb-4">
                &ldquo;Space is the breath of art.&rdquo;
              </p>
              <p className="font-label text-[10px] tracking-[0.3em] text-steel uppercase">
                Frank Lloyd Wright
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* SVG Skyline Silhouette */}
      <div className="absolute bottom-0 right-0 w-full h-24 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-full text-steel">
          <rect x="100" y="40" width="30" height="80" />
          <rect x="140" y="20" width="20" height="100" />
          <rect x="170" y="50" width="25" height="70" />
          <rect x="250" y="10" width="35" height="110" />
          <rect x="295" y="30" width="20" height="90" />
          <rect x="400" y="25" width="40" height="95" />
          <rect x="450" y="45" width="20" height="75" />
          <rect x="480" y="15" width="30" height="105" />
          <rect x="600" y="35" width="25" height="85" />
          <rect x="635" y="5" width="35" height="115" />
          <rect x="680" y="50" width="20" height="70" />
          <rect x="800" y="20" width="30" height="100" />
          <rect x="840" y="40" width="25" height="80" />
          <rect x="900" y="10" width="40" height="110" />
          <rect x="950" y="55" width="20" height="65" />
          <rect x="1050" y="30" width="35" height="90" />
          <rect x="1095" y="15" width="25" height="105" />
          <rect x="1200" y="25" width="30" height="95" />
          <rect x="1240" y="45" width="20" height="75" />
          <rect x="1300" y="8" width="40" height="112" />
          <rect x="1350" y="35" width="25" height="85" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="text-steel" size={24} />
      </motion.div>
    </section>
  );
}
