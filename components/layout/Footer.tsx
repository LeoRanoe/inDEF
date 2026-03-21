import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <Link href="#hero" className="flex flex-col leading-none mb-4">
              <span className="font-headline text-2xl font-bold tracking-tight">
                <span className="text-teal">in</span>
                <span className="text-gold">DEF</span>
              </span>
              <span className="font-label text-[9px] tracking-[0.25em] uppercase text-muted">
                Design & Construction
              </span>
            </Link>
            <p className="text-muted text-sm mt-4 font-body leading-relaxed max-w-xs">
              From vision to reality, we create your dream space without the stress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label tracking-[0.3em] uppercase text-xs text-steel mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-label text-sm text-muted hover:text-on-surface transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-label tracking-[0.3em] uppercase text-xs text-steel mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted font-body">
              <p>info@indefdesign.com</p>
              <p>+597 874 3028</p>
              <p>+597 847-4488</p>
              <p>De Crane Weg #70, Wanica</p>
              <p>Suriname</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-steel/10 mt-12 pt-8 text-center">
          <p className="font-label text-[11px] tracking-[0.3em] text-muted/60">
            © 2025 inDEF Design & Construction N.V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
