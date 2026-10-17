import Link from "next/link";
import { Section } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const copy = { en: { title: "Bring Polish TV home, wherever home is now", text: "Start with a free trial tonight, or choose a plan from £15.", trial: "Get a free trial", plans: "See prices" } } as const;

export function Closing({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section tone="dark">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{t.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href={sectionHref(lang, "trial")} className="btn btn-primary !px-8 !py-4">{t.trial}</Link><Link href={sectionHref(lang, "plans")} className="btn btn-outline !px-8 !py-4">{t.plans}</Link></div>
      </div>
    </Section>
  );
}
