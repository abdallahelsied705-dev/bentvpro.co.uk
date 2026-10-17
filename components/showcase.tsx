import Link from "next/link";
import { Section } from "@/components/ui";
import { CHANNEL_CATEGORIES } from "@/lib/channel-categories";
import type { Lang } from "@/lib/i18n";
import { path, sectionHref } from "@/lib/routes";

const copy = {
  en: { eyebrow: "What you can watch", title: "Polish television, films and sport, in one app", text: "Everything arrives through the same player app on the screens you already have. The line-up depends on your plan, so the easiest way to see exactly what is included is a free trial on your own TV.", cta: "Get a free trial", more: "See what's on" },
} as const;

export function Showcase({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const tiles = CHANNEL_CATEGORIES[lang];
  return (
    <Section tone="muted">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-header md:text-[2.65rem]">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={sectionHref(lang, "trial")} className="btn btn-primary">{t.cta}</Link>
            <Link href={path(lang, "channels")} className="btn btn-ghost">{t.more}</Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {tiles.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card card-hover p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-brand"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
              <h3 className="font-display mt-4 font-bold text-header">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
