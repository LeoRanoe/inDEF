import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";

const reasons = [
  {
    title: "See Before You Decide",
    description:
      "Because with us, you don't have to guess what you're getting. Before we build anything, we help you see your space clearly, so you can make decisions with confidence, not uncertainty.",
  },
  {
    title: "Fewer Surprises, More Peace",
    description:
      "That means fewer surprises, less stress, and a result that actually matches what you had in mind. We don't just focus on the final outcome — we make sure the entire process feels clear, smooth, and well-managed from start to finish.",
  },
  {
    title: "Your Partner, Not Just a Contractor",
    description:
      "At inDEF, you're not just hiring a contractor. You're working with a partner who guides you from idea to reality, without the headaches.",
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
              className="space-y-8"
            >
              {reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  className="group"
                >
                  <h4 className="font-headline text-2xl text-on-surface mb-3 font-light group-hover:text-teal transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-base text-muted font-body font-light leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="h-1 w-0 bg-gradient-to-r from-teal to-transparent mt-4 group-hover:w-12 transition-[width] duration-300" />
                </motion.div>
              ))}
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
