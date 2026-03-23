"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, stagger } from "@/lib/animations";
import { Ruler, Eye, HardHat, Briefcase } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "Bespoke, innovative designs tailored to your needs, ambitions, and environment.",
    tag: "01 / DESIGN",
  },
  {
    icon: HardHat,
    title: "Construction & Execution",
    description: "High-quality building services delivered with precision, reliability, and attention to details.",
    tag: "02 / EXECUTION",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project leadership ensuring smooth coordination, cost-efficiency, and timely delivery.",
    tag: "03 / MANAGEMENT",
  },
  {
    icon: Eye,
    title: "Consultancy",
    description: "Expert advice on design, planning, and sustainable building practices.",
    tag: "04 / CONSULTATION",
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
