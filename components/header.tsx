"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import type { Lang } from "@/lib/i18n";
import { path, sectionHref, type RouteKey } from "@/lib/routes";

const copy = {
  en: { menuOpen: "Open menu", menuClose: "Close menu", main: "Main menu", mobile: "Mobile menu", home: "IPTV UK home", trial: "Free trial", plans: "Prices" },
} as const;

const NAV: Record<Lang, { key: RouteKey; label: string }[]> = {
  en: [{ key: "home", label: "Home" }, { key: "channels", label: "What's on" }, { key: "guide", label: "Setup guide" }, { key: "blog", label: "Guides" }, { key: "contact", label: "Contact" }],
};

export function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = copy[lang];
  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="site-header sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl transition-[background-color,box-shadow] duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href={path(lang, "home")} aria-label={t.home} onClick={() => setOpen(false)}><Logo /></Link>
        <nav aria-label={t.main} className="hidden items-center gap-7 lg:flex">
          {NAV[lang].map((item) => { const href = path(lang, item.key); const active = isActive(href); return (
            <Link key={item.key} href={href} aria-current={active ? "page" : undefined} className={`relative text-sm font-semibold transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-grad after:transition-transform after:duration-300 hover:after:scale-x-100 ${active ? "text-white after:scale-x-100" : "text-ink-soft after:scale-x-0"}`}>{item.label}</Link>
          ); })}
          <Link href={sectionHref(lang, "plans")} className="text-sm font-semibold text-ink-soft transition-colors hover:text-white">{t.plans}</Link>
          <Link href={sectionHref(lang, "trial")} className="btn btn-primary !py-2.5">{t.trial}</Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <Link href={sectionHref(lang, "trial")} className="btn btn-primary !px-4 !py-2 text-sm">{t.trial}</Link>
          <button type="button" className="rounded-md p-2 text-header" aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label={t.mobile} className="border-t border-border px-4 pb-4 lg:hidden">
          <ul className="flex flex-col">
            {NAV[lang].map((item) => (<li key={item.key}><Link href={path(lang, item.key)} onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-header">{item.label}</Link></li>))}
            <li><Link href={sectionHref(lang, "plans")} onClick={() => setOpen(false)} className="block py-3 text-base font-semibold text-header">{t.plans}</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
