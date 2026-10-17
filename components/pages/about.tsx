import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, card } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { path, ROUTES, sectionHref } from "@/lib/routes";
import { pageMetadata, webPageLd } from "@/lib/seo";

const copy = {
  en: { title: "About IPTV UK", description: "IPTV UK streams Polish TV to households across the United Kingdom, with prices in pounds, a free trial and support in English and Polish.", eyebrow: "About us", h1: "About IPTV UK", crumb: "About",
    lead: "IPTV UK is a new service with one job: making Polish television easy to watch for Polish people living in Britain. Clear prices in pounds, no contract, a free trial and real help when you need it.",
    blocks: [["Who it is for", "Polish speakers across England, Scotland, Wales and Northern Ireland, and mixed families who want their children to grow up hearing Polish at home."], ["What we offer", "Plans from 1 to 24 months for 1 to 4 screens, a free trial on your own broadband, setup guides for every common UK device and a 7-day refund."], ["How we work", "Orders are checked by a person, not a bot. We answer on WhatsApp and e-mail in English or Polish. We respect intellectual property, and our copyright policy explains how rights holders can reach us."]],
    links: ["Read the setup guide", "See prices", "Copyright policy"] },
} as const;

export const aboutMetadata = (lang: Lang): Metadata => pageMetadata({ lang, title: copy[lang].title, description: copy[lang].description, paths: { ...ROUTES.about } });

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang]; const p = path(lang, "about");
  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: t.crumb, path: p }]} />
      <JsonLd data={webPageLd({ lang, path: p, name: t.title, description: t.description, type: "AboutPage" })} />
      <Section>
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.h1} sub={t.lead} />
        <div data-stagger className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">{t.blocks.map(([h, d]) => (<div key={h} className={`${card} p-7`}><h2 className="font-display text-lg font-bold text-header">{h}</h2><p className="mt-3 text-sm leading-relaxed text-ink-soft">{d}</p></div>))}</div>
        <div className="mt-10 flex flex-wrap justify-center gap-3"><Link href={path(lang, "guide")} className="btn btn-ghost">{t.links[0]}</Link><Link href={sectionHref(lang, "plans")} className="btn btn-primary">{t.links[1]}</Link><Link href={path(lang, "copyright")} className="btn btn-ghost">{t.links[2]}</Link></div>
      </Section>
    </>
  );
}
