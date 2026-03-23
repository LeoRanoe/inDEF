"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, stagger } from "@/lib/animations";
import { Lightbulb, Shield, Users, Zap, Leaf, Eye } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Clarity",
    description: "We believe every client should see their dreams before it's built.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries to create solutions that stand out.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We honor our commitments with transparency and professionalism.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We deliver work that exceeds expectations, every time.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We collaborate closely with our clients, guiding from first sketch to final stone.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We build for the future, using responsible and future-proof methods.",
  },
];

export default function ValuesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 md:py-40 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="font-label text-steel tracking-[0.4em] uppercase text-xs block mb-6">
            What Drives Us
          </span>
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface font-light leading-tight mb-6">
            Our Core Values
          </h2>
          <p className="text-muted text-lg font-body max-w-2xl mx-auto">
            At inDEF Design & Construction N.V., our values are not just words on paper.
            They shape every conversation, every sketch, and every brick we lay.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative border border-steel/20 rounded-lg p-8 bg-surface-low/30 backdrop-blur-sm hover:border-teal/50 hover:bg-surface-low/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-teal/20 rounded-lg group-hover:bg-teal/30 transition-colors">
                      <Icon className="text-teal" size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-headline text-2xl text-on-surface font-light">
                      {value.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted font-body font-light leading-relaxed text-base">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal to-transparent group-hover:w-full transition-[width] duration-300 rounded-b-lg" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
