"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    // Intercept all anchor clicks so Lenis handles smooth scrolling to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { duration: 1.0, offset: -80 });
    };
    document.addEventListener("click", handleAnchorClick);

    let lastTime = 0;
    function raf(time: number) {
      if (time - lastTime > 4) {
        lenis.raf(time);
        lastTime = time;
      }
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
