import type { Lang } from "@/lib/i18n";

type Stat = { value: number; decimals?: number; prefix?: string; suffix?: string; label: string; sub: string };
const copy: Record<Lang, { aria: string; stats: Stat[] }> = {
  en: {
    aria: "Key numbers",
    stats: [
      { value: 4.58, decimals: 2, prefix: "£", label: "a month", sub: "on the 24-month plan" },
      { value: 4, label: "screens at once", sub: "for the whole family" },
      { value: 15, suffix: " min", label: "to set up", sub: "with our device guides" },
      { value: 24, suffix: "/7", label: "support", sub: "in English or Polish" },
    ],
  },
};

/** Count-up numbers, animated by components/motion.tsx when they scroll into view. */
export function StatsRibbon({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section aria-label={t.aria} className="bg-background">
      <ul data-stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-14 md:grid-cols-4">
        {t.stats.map((s) => (
          <li key={s.label} className="card card-hover p-6 text-center">
            <p className="font-display text-4xl font-extrabold md:text-5xl">
              <span className="text-grad" data-count={s.value} data-decimals={s.decimals ?? 0} data-prefix={s.prefix ?? ""} data-suffix={s.suffix ?? ""}>{`${s.prefix ?? ""}${s.value.toFixed(s.decimals ?? 0)}${s.suffix ?? ""}`}</span>
            </p>
            <p className="mt-2 font-bold text-header">{s.label}</p>
            <p className="mt-0.5 text-sm text-ink-soft">{s.sub}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
