import Link from "next/link";
import { Section, card } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { blogPath, sectionHref } from "@/lib/routes";

const copy = {
  en: {
    eyebrow: "What is IPTV UK?",
    title: "IPTV UK is live TV and sport streamed over your broadband",
    p1: "IPTV (Internet Protocol Television) sends the TV picture through your internet connection instead of a satellite dish, an aerial or a cable box. You watch in an app on the smart TV, Fire TV Stick, phone or laptop you already own, and the whole thing works on ordinary UK broadband.",
    p2: "brings live channels, live sport, films and box sets to every screen in your home, from a flat in London to a farmhouse in the Highlands. Pay in pounds for 1 to 24 months, watch on 1 to 4 devices at once, and get your login details by e-mail with a setup guide for every device.",
    read: "Read: the complete IPTV UK guide", slug: "iptv-uk-guide", plans: "See prices",
    specTitle: "At a glance",
    spec: [["Who for", "Households anywhere in England, Scotland, Wales and Northern Ireland"], ["Screens", "1 to 4 devices watching at the same time"], ["Plans", "1, 3, 6, 12 or 24 months"], ["Price", "from £15 a month, or about £4.58 a month on 24 months"], ["Quality", "4K, Full HD and HD, with a TV guide (EPG)"], ["Devices", "Fire TV Stick, Samsung, LG, Android TV, iPhone, iPad, Android, MAG, Windows, Mac"], ["Payment", "PayPal, including Visa and Mastercard"], ["Start", "login details usually within 5 minutes to 6 hours"]],
  },
} as const;

export function Intro({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12">
        <div data-reveal="left" className="lg:col-span-7">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-header md:text-5xl">{t.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{t.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft"><strong className="text-header">IPTV UK</strong> {t.p2}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={sectionHref(lang, "plans")} className="btn btn-primary">{t.plans}</Link>
            <Link href={blogPath(lang, t.slug)} className="font-bold text-accent underline underline-offset-4 hover:text-white">{t.read}</Link>
          </div>
        </div>
        <aside data-reveal="right" className={`${card} glow-border p-7 lg:col-span-5`} aria-label={t.specTitle}>
          <h3 className="font-display text-xl font-bold text-header">{t.specTitle}</h3>
          <dl data-stagger className="mt-4 divide-y divide-border">{t.spec.map(([k, v]) => (<div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm"><dt className="font-bold uppercase tracking-wider text-accent">{k}</dt><dd className="text-header">{v}</dd></div>))}</dl>
        </aside>
      </div>
    </Section>
  );
}
