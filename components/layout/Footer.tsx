import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582716983554",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/112520946/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="#hero" className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="inDEF Design & Construction N.V."
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
                href="tel:+5978474488"
                className="text-muted hover:text-steel transition-colors"
              >
                +597 847 4488
              </a>
              <a
                href="tel:+5978279940"
                className="text-muted hover:text-steel transition-colors"
              >
                +597 827 9940
              </a>
              <a
                href="mailto:info@indefdesign.com"
                className="text-muted hover:text-steel transition-colors"
              >
                info@indefdesign.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-label tracking-[0.3em] uppercase text-xs text-steel mb-6">
              Follow Us
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted hover:text-teal transition-colors"
                  >
                    <Icon size={18} />
                    <span className="font-label text-sm tracking-wide">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-steel/10 pt-8 text-center">
          <p className="font-label text-[11px] tracking-[0.3em] text-muted/60">
            © 2025 inDEF Design & Construction N.V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
