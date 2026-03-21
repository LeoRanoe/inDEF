"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";
import { Box, Leaf, Target } from "lucide-react";

const features = [
  {
    icon: Box,
    number: "01",
    title: "Digital Twin Modelling",
    description:
      "We create a digital twin of your space prior to demolition construction — simulating lighting, physics, and load before a single brick is laid.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Material Intelligence",
    description:
      "Sourcing the world's most sustainable and durable construction materials through verified global networks.",
  },
  {
    icon: Target,
    number: "03",
    title: "Zero-Margin Tolerance",
    description:
      "Engineering solutions that meet the strictest performance requirements for lasting generational value.",
  },
];

export default function WhyIndefSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="py-24 md:py-40 bg-surface relative">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left features */}
          <div className="lg:col-span-5">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-headline text-4xl md:text-6xl mb-12 font-light text-on-surface"
            >
              Why{" "}
              <span className="text-steel">inDEF?</span>
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-10"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    className="flex gap-5"
                  >
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <Icon className="text-steel" size={24} strokeWidth={1.5} />
                      <span className="font-label text-steel text-sm tracking-[0.2em]">
                        {feature.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl text-on-surface mb-2 font-light">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted font-body font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <div className="aspect-video relative overflow-hidden border border-steel/20">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural wireframe visualization"
                fill
                className="object-cover opacity-50 grayscale"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />

              {/* Scanning line animation */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] bg-steel shadow-[0_0_20px_rgba(26,82,118,0.5)] pointer-events-none"
                style={{
                  animation: "scan 4s linear infinite",
                }}
              />

              {/* HUD overlay */}
              <div className="absolute top-6 left-6 bg-dark-bg/80 backdrop-blur-md p-4 border-l-2 border-steel">
                <p className="font-label text-[10px] tracking-[0.3em] text-steel">
                  STATUS: OPTIMIZING LAYERS...
                  <br />
                  RENDER_ENGINE: V-RAY PRO_V8.2
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(100vh * 0.56)); }
        }
      `}</style>
    </section>
  );
}
