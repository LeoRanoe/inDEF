"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-dark-bg/95 border-b border-white/5"
          : "bg-gradient-to-b from-dark-bg/60 to-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#hero" className="flex flex-col leading-none">
          <span className="font-headline text-2xl font-bold tracking-tight">
            <span className="text-teal">in</span>
            <span className="text-gold">DEF</span>
          </span>
          <span className="font-label text-[9px] tracking-[0.25em] uppercase text-muted">
            Design & Construction
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label uppercase tracking-[0.2em] text-xs text-muted hover:text-on-surface transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-label uppercase tracking-[0.2em] text-xs bg-gold/90 text-dark-bg px-6 py-2.5 hover:bg-gold transition-colors duration-300 font-semibold"
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Open menu" className="text-on-surface">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-dark-bg border-l border-steel/20 w-72"
          >
            <div className="flex flex-col gap-6 mt-12">
              <div className="flex flex-col leading-none mb-8">
                <span className="font-headline text-3xl font-bold tracking-tight">
                  <span className="text-teal">in</span>
                  <span className="text-gold">DEF</span>
                </span>
                <span className="font-label text-[10px] tracking-[0.25em] uppercase text-muted">
                  Design & Construction
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-label uppercase tracking-[0.2em] text-sm text-muted hover:text-on-surface transition-colors duration-300 py-2 border-b border-steel/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-label uppercase tracking-[0.2em] text-sm bg-gold/90 text-dark-bg px-6 py-3 text-center hover:bg-gold transition-colors duration-300 font-semibold mt-4"
              >
                Start Your Project
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
