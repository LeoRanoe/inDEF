"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";

type Category = "All" | "Residential" | "Commercial" | "Renovation";

interface Project {
  title: string;
  category: Category;
  image: string;
  span: string;
  aspect: string;
}

const projects: Project[] = [
  {
    title: "The Obsidian Pavilion",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Vertex Studio Hub",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    span: "md:col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Paramaribo Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    span: "md:col-span-1",
    aspect: "aspect-square",
  },
  {
    title: "Horizon Office Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Heritage Renewal",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Riverfront Lofts",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    span: "md:col-span-1",
    aspect: "aspect-[3/4]",
  },
];

const categories: Category[] = ["All", "Residential", "Commercial", "Renovation"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-40 bg-dark-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
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

          {/* Filter Tabs */}
          <div className="flex gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-xs tracking-[0.2em] uppercase px-4 py-2 transition-[color,background-color,border-color] duration-200 ${
                  activeCategory === cat
                    ? "bg-steel text-white"
                    : "text-muted hover:text-on-surface border border-steel/20 hover:border-steel/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="sync">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`relative group cursor-pointer overflow-hidden ${project.span} ${project.aspect}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark-bg/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="font-label text-steel tracking-[0.4em] text-[10px] uppercase mb-2">
                    {project.category}
                  </span>
                  <h4 className="font-headline text-3xl md:text-4xl font-light text-on-surface mb-4">
                    {project.title}
                  </h4>
                  <span className="font-label tracking-[0.3em] text-xs text-on-surface border-b border-steel pb-1 inline-block w-fit hover:text-steel transition-colors">
                    VIEW ARCHIVE
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
