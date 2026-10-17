"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide motion: scroll reveal ([data-reveal], [data-stagger]), count-up numbers ([data-count]),
 * cursor spotlight on .card, scroll progress bar and header state. Respects prefers-reduced-motion.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count); const decimals = Number(el.dataset.decimals ?? 0);
      const prefix = el.dataset.prefix ?? ""; const suffix = el.dataset.suffix ?? "";
      const fmt = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
      if (reduced) { el.textContent = fmt(target); return; }
      const start = performance.now(); const dur = 1600;
      const tick = (now: number) => { const t = Math.min(1, (now - start) / dur); el.textContent = fmt(target * (1 - Math.pow(1 - t, 3))); if (t < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add("in");
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
        if (el.dataset.count) countUp(el);
        io.unobserve(el);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    const observeAll = () => document.querySelectorAll("[data-reveal]:not(.in), [data-stagger]:not(.in), [data-count]:not(.in)").forEach((el) => io.observe(el));
    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.(".card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const header = document.querySelector<HTMLElement>(".site-header");
    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight;
      root.style.setProperty("--p", String(max > 0 ? root.scrollTop / max : 0));
      header?.setAttribute("data-scrolled", String(root.scrollTop > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduced) window.addEventListener("pointermove", onMove, { passive: true });

    return () => { io.disconnect(); mo.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("pointermove", onMove); };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
