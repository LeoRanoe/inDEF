import Link from "next/link";
import Image from "next/image";

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
            <Link href="#hero" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="inDEF Design & Construction N.V. — Luxury Architecture Suriname"
                width={64}
                height={70}
                className="h-16 w-auto object-contain"
              />
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
            <div className="flex flex-col gap-3 text-sm font-body">
              <a
                href="tel:+597874302"
                className="text-muted hover:text-steel transition-colors"
              >
                +597 874 3028
              </a>
              <a
                href="mailto:devane.tirtosemito@indefdesign.com"
                className="text-muted hover:text-steel transition-colors"
              >
                devane.tirtosemito@indefdesign.com
              </a>
              <a
                href="mailto:devtirto@gmail.com"
                className="text-muted hover:text-steel transition-colors"
              >
                devtirto@gmail.com
              </a>
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
