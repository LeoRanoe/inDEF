"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/animations";
import { allProjects } from "@/lib/projects";

export default function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 md:py-40 bg-dark-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-light text-on-surface">
            Selected{" "}
            <span className="italic text-steel">Projects</span>
          </h2>
          <p className="font-label text-xs tracking-[0.2em] uppercase text-muted">
            {allProjects.length} projects
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {allProjects.map((project, i) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden aspect-[4/3]"
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.heroImage}
                  alt={project.heroAlt}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Always-visible bottom strip */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-bg/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-label text-[9px] tracking-[0.3em] uppercase text-steel border border-steel/40 px-2 py-0.5"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-light text-on-surface">
                    {project.title}
                  </h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-bg/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-label text-[9px] tracking-[0.3em] uppercase text-steel border border-steel/40 px-2 py-0.5"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline text-2xl md:text-3xl font-light text-on-surface mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted text-xs leading-relaxed mb-5 max-w-sm hidden md:block">
                    {project.description.slice(0, 120)}…
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-label tracking-[0.3em] text-xs text-on-surface border-b border-steel pb-0.5 inline-block">
                      VIEW PROJECT
                    </span>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-muted">
                      {project.images.length} images
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
