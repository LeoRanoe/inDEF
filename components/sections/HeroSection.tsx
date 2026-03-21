"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Premium architecture and design"
          fill
          className="object-cover brightness-[0.35]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/20 via-dark-bg/50 to-dark-bg" />
        <div className="absolute inset-0 blueprint-grid opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div
              variants={fadeUp}
              className="font-label text-teal tracking-[0.4em] uppercase text-xs mb-8 block"
            >
              Vision TO REALITY...
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-headline text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] text-on-surface mb-8 font-light"
            >
              Dream it,
              <br />
              <span className="italic text-teal">see it,</span>
              <br />
              realize it,
              <br />
              <span className="text-gold">stress-free.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="font-label uppercase tracking-[0.2em] text-xs bg-bright-blue text-white px-8 py-4 hover:bg-steel transition-colors duration-200 font-semibold rounded-sm"
              >
                View Our Projects →
              </a>
              <a
                href="#contact"
                className="font-label uppercase tracking-[0.2em] text-xs border-2 border-gold text-gold px-8 py-4 hover:bg-gold hover:text-dark-bg transition-[background-color,color] duration-200 font-semibold rounded-sm"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Quote Block */}
          <motion.div variants={fadeUp} className="hidden lg:block">
            <div className="bg-surface-low/50 border-l-4 border-teal p-12 backdrop-blur-sm">
              <p className="font-headline text-3xl italic text-on-surface leading-relaxed font-light mb-6">
                Your vision deserves a partner who sees further, plans deeper, and builds better.
              </p>
              <div className="h-1 w-12 bg-gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="text-teal" size={28} />
      </motion.div>
    </section>
  );
}
