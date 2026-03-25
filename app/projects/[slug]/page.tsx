import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allProjects, getProjectBySlug } from "@/lib/projects";
import ProjectGallery from "./ProjectGallery";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description.slice(0, 160),
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-dark-bg text-on-surface">
      {/* Top nav bar */}
      <div className="fixed top-0 left-0 w-full z-40 bg-dark-bg/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="font-label text-xs tracking-[0.2em] uppercase text-muted hover:text-on-surface transition-colors duration-200 flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="inDEF"
              width={40}
              height={44}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative pt-[57px] h-[75vh]">
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-16 md:pb-16 max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4 flex-wrap">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="font-label text-[10px] tracking-[0.3em] uppercase text-steel border border-steel/40 px-3 py-1"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-light text-on-surface leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Project metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-b border-white/5 pb-16">
          <div className="md:col-span-2">
            <p className="font-body text-muted text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-steel block mb-1">
                Year
              </span>
              <span className="font-body text-sm text-on-surface">{project.year}</span>
            </div>
            <div>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-steel block mb-1">
                Location
              </span>
              <span className="font-body text-sm text-on-surface">{project.location}</span>
            </div>
            <div>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-steel block mb-1">
                Scope
              </span>
              <span className="font-body text-sm text-on-surface">{project.scope}</span>
            </div>
            <div>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-steel block mb-1">
                Renders
              </span>
              <span className="font-body text-sm text-on-surface">
                {project.images.length} images
              </span>
            </div>
          </div>
        </div>

        {/* Video Walkthrough */}
        {project.video && (
          <div className="mb-20">
            <div className="mb-8">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-steel block mb-2">
                Walkthrough
              </span>
              <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface">
                Project <span className="italic text-steel">Video</span>
              </h2>
            </div>
            <div className="relative w-full max-w-4xl aspect-video rounded-sm bg-black overflow-hidden">
              <video
                controls
                playsInline
                className="w-full h-full object-cover"
                poster={project.heroImage}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </div>
        )}

        {/* Gallery heading */}
        <div className="mb-8">
          <h2 className="font-headline text-3xl md:text-4xl font-light text-on-surface">
            Project <span className="italic text-steel">Gallery</span>
          </h2>
          <p className="font-label text-xs tracking-[0.2em] uppercase text-muted mt-2">
            Click any image to expand
          </p>
        </div>

        {/* Gallery (client component) */}
        <ProjectGallery images={project.images} />

        {/* Footer CTA */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-headline text-2xl md:text-3xl font-light text-on-surface">
              Interested in a similar project?
            </p>
            <p className="font-body text-sm text-muted mt-1">
              Let&apos;s discuss your vision.
            </p>
          </div>
          <Link
            href="/#contact"
            className="font-label text-xs tracking-[0.2em] uppercase bg-gold/90 text-dark-bg px-8 py-3 hover:bg-gold transition-colors duration-200 font-semibold whitespace-nowrap"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
