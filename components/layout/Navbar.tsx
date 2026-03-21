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
            <button aria-label="Open menu" className="text-on-surface hover:text-gold transition-colors">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-gradient-to-b from-dark-bg to-surface-low border-0 w-64 p-0 flex flex-col"
          >
            {/* Top logo area */}
            <div className="border-b border-steel/20 px-6 py-6">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-4 text-muted hover:text-on-surface transition-colors"
                aria-label="Close menu"
              >
                ✕
              </button>
              <Link href="#hero" onClick={() => setOpen(false)} className="flex flex-col leading-none">
                <span className="font-headline text-2xl font-bold tracking-tight">
                  <span className="text-teal">in</span>
                  <span className="text-gold">DEF</span>
                </span>
                <span className="font-label text-[8px] tracking-[0.25em] uppercase text-muted">
                  Design & Construction
                </span>
              </Link>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-label uppercase tracking-[0.15em] text-xs text-muted hover:text-gold transition-colors duration-200 py-3 px-4 rounded-sm hover:bg-steel/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="border-t border-steel/20 px-6 py-6">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center font-label uppercase tracking-[0.2em] text-xs bg-gold text-dark-bg px-6 py-4 text-center hover:bg-gold/90 transition-colors duration-200 font-semibold rounded-sm"
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
