import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, card, cardHover } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { path, ROUTES, sectionHref } from "@/lib/routes";
import { pageMetadata, webPageLd } from "@/lib/seo";
import { SITE, whatsappLink } from "@/lib/site";

const copy = {
  en: { title: "Contact IPTV UK – Polish IPTV support", description: "Contact IPTV UK on WhatsApp or by e-mail, in English or Polish. Ask about prices, request a free trial or get help setting up Polish TV on your device.", eyebrow: "Contact", h1: "Talk to us in English or Polish", sub: "We help with setup, device questions and connection problems, and we answer questions before you buy. Support is available 24/7.", waText: "The quickest way to reach us. Send a photo of your screen if something looks wrong.", waBtn: "Open WhatsApp", waMsg: "Hi! I have a question about Polish IPTV in the UK.", mailText: "For longer questions, order queries and copyright notices.", trialTitle: "Want to try it first?", trialText: "Request a free trial and check the service on your own TV and broadband.", trialBtn: "Get a free trial", crumb: "Contact", copyright: "Rights holders: see our copyright policy." },
} as const;

export const contactMetadata = (lang: Lang): Metadata => pageMetadata({ lang, title: copy[lang].title, description: copy[lang].description, paths: { ...ROUTES.contact } });

export function ContactPage({ lang }: { lang: Lang }) {
  const t = copy[lang]; const p = path(lang, "contact");
  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: t.crumb, path: p }]} />
      <JsonLd data={webPageLd({ lang, path: p, name: t.title, description: t.description, type: "ContactPage" })} />
      <Section>
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.h1} sub={t.sub} />
        <div data-stagger className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          <div className={`${card} ${cardHover} p-7`}><span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300"><MessageCircle size={24} aria-hidden="true" /></span><h2 className="font-display mt-4 text-xl font-bold text-header">WhatsApp</h2><p className="mt-1 text-sm text-ink-soft">{t.waText}</p><p className="mt-3 font-bold text-header">{SITE.phoneDisplay}</p><a href={whatsappLink(t.waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5">{t.waBtn}</a></div>
          <div className={`${card} ${cardHover} p-7`}><span className="flex h-12 w-12 items-center justify-center rounded-full bg-grad text-white"><Mail size={24} aria-hidden="true" /></span><h2 className="font-display mt-4 text-xl font-bold text-header">E-mail</h2><p className="mt-1 text-sm text-ink-soft">{t.mailText}</p><p className="mt-3 break-all font-bold text-header">{SITE.email}</p><a href={`mailto:${SITE.email}`} className="btn btn-ghost mt-5">E-mail</a></div>
        </div>
        <div className={`${card} mx-auto mt-6 max-w-3xl p-7 text-center`}><h2 className="font-display text-xl font-bold text-header">{t.trialTitle}</h2><p className="mt-2 text-ink-soft">{t.trialText}</p><Link href={sectionHref(lang, "trial")} className="btn btn-teal mt-5">{t.trialBtn}</Link></div>
        <p className="mt-8 text-center text-sm"><Link href={path(lang, "copyright")} className="font-semibold text-accent underline underline-offset-2">{t.copyright}</Link></p>
      </Section>
    </>
  );
}
