"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, stagger } from "@/lib/animations";
import { Ruler, Eye, HardHat, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "3D models from day one. Bespoke blueprints for high-end residential and commercial estates.",
    tag: "01 / CONCEPTUAL",
  },
  {
    icon: Eye,
    title: "3D Visualization",
    description: "Photorealistic immersive environments and virtual walkthroughs that bring your vision to life.",
    tag: "02 / RENDERING",
  },
  {
    icon: HardHat,
    title: "Construction & Execution",
    description: "Turnkey project management with absolute adherence to spec. Built with precision and durability.",
    tag: "03 / EXECUTION",
  },
  {
    icon: ShieldCheck,
    title: "Technical Audit",
    description: "Structural integrity assessments and material lifecycle analysis for lasting value.",
    tag: "04 / ANALYSIS",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      className="py-24 md:py-40 bg-surface blueprint-grid relative"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4">
          <h2 className="font-headline text-4xl md:text-6xl font-light text-on-surface">
            Our Specializations
          </h2>
          <p className="font-label text-muted/60 tracking-[0.3em] text-xs">
            SERVICES / 04 CATEGORIES
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel/10"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="bg-dark-bg p-10 md:p-14 group relative overflow-hidden hover:bg-surface-high transition-[background-color] duration-300"
              >
                {/* Hover right bar */}
                <div className="absolute top-0 right-0 w-1 h-0 bg-gold group-hover:h-full transition-[height] duration-300" />

                <Icon
                  className="text-steel mb-8"
                  size={40}
                  strokeWidth={1.2}
                />

                <h3 className="font-headline text-2xl text-on-surface mb-4 font-light relative inline-block">
                  {service.title}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-[width] duration-300" />
                </h3>

                <p className="text-muted text-base leading-relaxed mb-8 font-body font-light">
                  {service.description}
                </p>

                <span className="text-[10px] font-label text-muted/40 tracking-[0.2em] group-hover:text-steel transition-colors">
                  {service.tag}
                </span>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-steel/5 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
