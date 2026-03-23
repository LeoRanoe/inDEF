"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectImage } from "@/lib/projects";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );
  }, [images.length]);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prev, next, close]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-steel"
            aria-label={`View ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading={i < 3 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-dark-bg/40 to-transparent flex items-end p-5">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface">
                {image.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/96 flex items-center justify-center"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-6 font-label text-xs tracking-[0.2em] uppercase text-on-surface/50 hover:text-on-surface transition-colors z-10"
              aria-label="Close lightbox"
            >
              ✕ Close
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-6 font-label text-xs tracking-[0.2em] uppercase text-on-surface/40">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl mx-12 aspect-[16/10]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-on-surface/50">
                {images[lightboxIndex].caption}
              </span>
            </div>

            {/* Prev */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 md:left-6 text-on-surface/40 hover:text-on-surface transition-colors text-3xl p-3 leading-none"
                  aria-label="Previous image"
                >
                  ‹
                </button>

                {/* Next */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 md:right-6 text-on-surface/40 hover:text-on-surface transition-colors text-3xl p-3 leading-none"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
