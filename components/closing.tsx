import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const copy = { en: { title: <>Cut the pay-TV bill,<br /><span className="text-grad">keep every channel you love</span></>, text: "Start with a free trial tonight, or choose a plan from £15.", trial: "Start my free trial", plans: "See prices" } } as const;

export function Closing({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="cta-glow relative overflow-hidden text-white">
      <div aria-hidden="true" className="hex-grid absolute inset-0" />
      <div data-reveal="zoom" className="relative mx-auto max-w-4xl px-4 py-24 text-center md:py-32">
        <h2 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">{t.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{t.text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3"><Link href={sectionHref(lang, "trial")} className="btn btn-primary !px-9 !py-4 text-base">{t.trial}</Link><Link href={sectionHref(lang, "plans")} className="btn btn-outline !px-9 !py-4 text-base">{t.plans}</Link></div>
      </div>
    </section>
  );
}
