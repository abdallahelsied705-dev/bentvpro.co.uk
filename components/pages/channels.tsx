import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, card, cardHover } from "@/components/ui";
import { CHANNEL_CATEGORIES } from "@/lib/channel-categories";
import type { Lang } from "@/lib/i18n";
import { path, ROUTES, sectionHref } from "@/lib/routes";
import { pageMetadata, webPageLd } from "@/lib/seo";

const copy = {
  en: { title: "What's on IPTV UK: live TV, sport, films and box sets", description: "What you can watch with IPTV UK: live UK and international TV, live football and sport, films and box sets on demand, 24-hour news and children's programmes.", eyebrow: "What's on", h1: "What you can watch on IPTV UK", sub: "Everything is grouped into a few clear categories. The exact line-up depends on your plan, so the simplest way to check what is included is a free trial on your own TV.", crumb: "What's on", note: "We do not advertise a fixed channel count. Line-ups change over time and depend on licensing, so a big number on a website tells you very little. Ask us what is currently included, or test it yourself with a free trial.", trial: "Ask for a free trial", plans: "See prices" },
} as const;

export const channelsMetadata = (lang: Lang): Metadata => pageMetadata({ lang, title: copy[lang].title, description: copy[lang].description, paths: { ...ROUTES.channels } });

export function ChannelsPage({ lang }: { lang: Lang }) {
  const t = copy[lang]; const p = path(lang, "channels"); const cats = CHANNEL_CATEGORIES[lang];
  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: t.crumb, path: p }]} />
      <JsonLd data={webPageLd({ lang, path: p, name: t.title, description: t.description, type: "CollectionPage" })} />
      <Section>
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.h1} sub={t.sub} />
        <div data-stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${card} ${cardHover} p-7`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-grad text-white"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
              <h2 className="font-display mt-4 text-lg font-bold text-header">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
        <p className={`${card} mx-auto mt-8 max-w-3xl p-6 text-center text-sm leading-relaxed text-ink-soft`}>{t.note}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href={sectionHref(lang, "trial")} className="btn btn-primary">{t.trial}</Link><Link href={sectionHref(lang, "plans")} className="btn btn-ghost">{t.plans}</Link></div>
      </Section>
    </>
  );
}
