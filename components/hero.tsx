import Link from "next/link";
import { CheckCircle2, Clapperboard, Newspaper, Trophy, Tv, Users } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const copy = {
  en: {
    badge: "IPTV UK · Live TV, sport & 4K for UK homes",
    h1a: "IPTV UK",
    h1b: "without the contract",
    lead: "Live TV and sport on your",
    words: ["Fire TV Stick", "Samsung TV", "iPhone", "laptop"],
    sub: "Live channels, every big match, films and box sets in 4K and HD over your UK broadband. No dish, no engineer visit, no 18-month contract. From £15 a month, for 1 to 4 screens.",
    primary: "Start my free trial",
    secondary: "See prices in £",
    bullets: ["No dish or engineer visit", "Pay in pounds, no contract", "24/7 UK support"],
    tv: "Animated preview: a TV playing live TV with an on-screen programme guide",
    live: "LIVE", now: "Now playing", guide: "TV guide",
    rows: [
      { icon: Trophy, t: "Live football", s: "Every weekend fixture" },
      { icon: Tv, t: "UK live TV", s: "Entertainment · Drama" },
      { icon: Clapperboard, t: "Films & box sets", s: "On demand" },
      { icon: Newspaper, t: "24/7 news", s: "UK & world" },
      { icon: Users, t: "Kids & family", s: "Cartoons · Learning" },
    ],
    chips: ["4K & Full HD", "TV guide (EPG)", "1–4 screens"],
  },
} as const;

export function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const rows = [...t.rows, ...t.rows];
  return (
    <section className="relative overflow-hidden bg-[#07060d] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora left-[-10%] top-[-20%] h-[32rem] w-[32rem] bg-[#e11d48]" />
        <div className="aurora right-[-8%] top-[10%] h-[30rem] w-[30rem] bg-[#7c3aed]" style={{ animationDelay: "-5s" }} />
        <div className="aurora bottom-[-30%] left-[30%] h-[26rem] w-[26rem] bg-[#22d3ee] opacity-25" style={{ animationDelay: "-9s" }} />
        <div className="hex-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 md:pt-24 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-6">
          <p data-reveal className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-wide text-white/90 backdrop-blur">
            <span className="live-dot h-2 w-2 rounded-full bg-brand" aria-hidden="true" />{t.badge}
          </p>
          <h1 data-reveal style={{ ["--d" as string]: "100ms" }} className="font-display mt-6 text-[3.4rem] font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            <span className="block">{t.h1a}</span>
            <span className="text-grad block">{t.h1b}</span>
          </h1>
          <p data-reveal style={{ ["--d" as string]: "200ms" }} className="font-display mt-6 text-2xl font-semibold text-white/90 md:text-3xl">
            {t.lead}{" "}
            <span className="word-swap align-bottom text-accent">{t.words.map((w) => <span key={w}>{w}</span>)}</span>
          </p>
          <p data-reveal style={{ ["--d" as string]: "300ms" }} className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{t.sub}</p>
          <div data-reveal style={{ ["--d" as string]: "400ms" }} className="mt-9 flex flex-wrap gap-3">
            <Link href={sectionHref(lang, "trial")} className="btn btn-primary !px-8 !py-4 text-base">{t.primary}</Link>
            <Link href={sectionHref(lang, "plans")} className="btn btn-outline !px-8 !py-4 text-base">{t.secondary}</Link>
          </div>
          <ul data-stagger className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/75">
            {t.bullets.map((b) => (<li key={b} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" aria-hidden="true" />{b}</li>))}
          </ul>
        </div>

        {/* Animated TV mockup */}
        <div data-reveal="zoom" style={{ ["--d" as string]: "250ms" }} className="relative lg:col-span-6">
          <div role="img" aria-label={t.tv} className="bob relative mx-auto max-w-[34rem]">
            <div className="glow-border rounded-[1.75rem]">
              <div className="overflow-hidden rounded-[1.7rem] bg-[#0d0b18] p-3 shadow-[0_40px_120px_-30px_rgb(192_38_211_/_.6)]">
                <div className="grid grid-cols-5 gap-3">
                  {/* Player */}
                  <div className="relative col-span-3 overflow-hidden rounded-2xl p-4" style={{ background: "radial-gradient(circle at 30% 20%, rgb(192 38 211 / .85), transparent 55%), radial-gradient(circle at 80% 90%, rgb(225 29 72 / .85), transparent 55%), #1b1030" }} aria-hidden="true">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 rounded-md bg-brand px-2 py-0.5 text-[0.65rem] font-extrabold tracking-wider"><span className="live-dot h-1.5 w-1.5 rounded-full bg-white" />{t.live}</span>
                      <span className="eq flex h-5 items-end gap-0.5"><span /><span /><span /><span /></span>
                    </div>
                    <div className="mt-14 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur md:mt-20">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <p className="mt-6 text-[0.65rem] font-bold uppercase tracking-widest text-white/60">{t.now}</p>
                    <p className="font-display text-lg font-bold">Live sport · 4K</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="progress-fill h-full rounded-full bg-accent" /></div>
                  </div>
                  {/* Guide */}
                  <div className="col-span-2 flex flex-col rounded-2xl bg-white/[.04] p-3" aria-hidden="true">
                    <p className="mb-2 text-[0.6rem] font-extrabold uppercase tracking-widest text-white/50">{t.guide}</p>
                    <div className="relative h-56 overflow-hidden md:h-64 [mask-image:linear-gradient(transparent,#000_12%,#000_88%,transparent)]">
                      <ul className="guide-scroll space-y-2">
                        {rows.map(({ icon: Icon, t: title, s }, i) => (
                          <li key={i} className="flex items-center gap-2 rounded-xl bg-white/[.05] p-2">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-grad"><Icon size={15} /></span>
                            <span className="min-w-0"><span className="block truncate text-[0.72rem] font-bold">{title}</span><span className="block truncate text-[0.62rem] text-white/50">{s}</span></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-4 w-40 rounded-b-2xl bg-gradient-to-b from-[#1b1830] to-transparent" aria-hidden="true" />
            {/* Floating chips */}
            {t.chips.map((c, i) => (
              <span key={c} aria-hidden="true" className={`bob absolute hidden rounded-full border border-white/15 bg-[#12101d]/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur sm:block ${["-left-6 -top-4", "-right-5 top-1/2", "-bottom-2 left-10"][i]}`} style={{ animationDelay: `${i * -1.6}s` }}>
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />{c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
