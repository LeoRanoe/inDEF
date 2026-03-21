"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="absolute inset-0 blueprint-grid opacity-10" />
      </div>

      {/* Neon Teal Curve Design */}
      <div className="absolute top-20 right-0 w-full h-1/3 pointer-events-none z-5 overflow-hidden">
        <svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 1440 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMin meet"
        >
          {/* Main flowing curve - thinner and more elegant */}
          <path
            d="M -200 80 Q 500 30, 900 50 T 1700 130"
            stroke="#148F77"
            strokeWidth="35"
            strokeLinecap="round"
            opacity="0.8"
            filter="drop-shadow(0 0 15px rgba(20, 143, 119, 0.6))"
          />
          {/* Subtle secondary curve */}
          <path
            d="M -200 120 Q 500 70, 900 90 T 1700 180"
            stroke="#148F77"
            strokeWidth="25"
            strokeLinecap="round"
            opacity="0.4"
            filter="drop-shadow(0 0 20px rgba(20, 143, 119, 0.4))"
          />
        </svg>
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
