import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { HeroBroadcast } from "@/components/hero-broadcast";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const copy = {
  en: {
    badge: "IPTV Polska · Made for Poles living in the UK",
    h1a: "IPTV Polska in the UK",
    h1b: "Polish TV on your British broadband, from £15 a month",
    sub: "Live Polish channels, films, series and sport on the smart TV, Fire TV Stick, phone or laptop you already own. No dish on the wall, no satellite installer, no long contract. Try it free tonight, then pick a plan for 1 to 4 screens.",
    primary: "Get a free trial",
    secondary: "See prices in £",
    bullets: ["Works on UK broadband", "Prices in pounds, no contract", "Help in English and Polish"],
    art: "Animated illustration: a broadcast mast sending a signal to a wall of TV tiles",
  },
} as const;

export function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="band-dark on-dark relative overflow-hidden">
      <div aria-hidden="true" className="hex-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 md:pt-20 lg:grid-cols-12 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-white">{t.badge}</p>
          <h1 className="mt-6">
            <span className="font-display block text-5xl font-bold leading-none text-white md:text-6xl">{t.h1a}</span>
            <span className="font-display mt-3 block text-2xl font-semibold leading-tight text-accent md:text-4xl">{t.h1b}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{t.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={sectionHref(lang, "trial")} className="btn btn-primary !px-8 !py-4">{t.primary}</Link>
            <Link href={sectionHref(lang, "plans")} className="btn btn-outline !px-8 !py-4">{t.secondary}</Link>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            {t.bullets.map((b) => (<li key={b} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" aria-hidden="true" />{b}</li>))}
          </ul>
        </div>
        <div className="lg:col-span-6"><HeroBroadcast label={t.art} /></div>
      </div>
    </section>
  );
}
