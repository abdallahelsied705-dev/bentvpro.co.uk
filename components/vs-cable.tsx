import { Check, Minus } from "lucide-react";
import { Section, SectionHeading, card } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: { eyebrow: "IPTV or pay-TV?", title: "IPTV UK compared with satellite and cable TV", sub: "Most UK homes still pay for TV through a satellite or cable package. Here is how IPTV compares.", cols: ["", "IPTV UK", "Satellite and cable"], caption: "IPTV UK compared with satellite and cable TV packages", note: "A general comparison. Prices and terms vary by provider and package.", rows: [
    ["Price", "From £15 a month, or about £4.58 a month on 24 months.", "Often £30 to £90 a month once sport and films are added."],
    ["Contract", "Pay for 1 to 24 months, no auto-renewal.", "Usually an 18 to 24 month contract."],
    ["Installation", "None. Install an app and log in.", "A dish or cable line and an engineer visit."],
    ["Screens", "Up to 4 at once: TV, phone, tablet, laptop.", "Extra rooms often cost extra each month."],
    ["Moving house", "Log in at the new address and carry on.", "Transfer fees, new installation or a new contract."],
    ["Price rises", "Fixed for the plan you buy.", "Mid-contract price rises are common."],
  ] },
} as const;

export function VsCable({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <div data-reveal className={`${card} mx-auto max-w-5xl overflow-x-auto`}>
        <table className="w-full min-w-[38rem] border-collapse text-left">
          <caption className="sr-only">{t.caption}</caption>
          <thead><tr className="bg-surface2 text-xs uppercase tracking-wider"><th scope="col" className="px-5 py-4"><span className="sr-only">Topic</span></th><th scope="col" className="px-5 py-4 font-extrabold text-accent">{t.cols[1]}</th><th scope="col" className="px-5 py-4 font-bold text-ink-soft">{t.cols[2]}</th></tr></thead>
          <tbody data-stagger>{t.rows.map(([label, a, b]) => (<tr key={label} className="border-t border-border align-top"><th scope="row" className="whitespace-nowrap px-5 py-4 font-bold text-header">{label}</th><td className="px-5 py-4 text-header"><span className="flex items-start gap-2.5"><Check size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />{a}</span></td><td className="px-5 py-4 text-ink-soft"><span className="flex items-start gap-2.5"><Minus size={18} className="mt-0.5 shrink-0 text-ink-soft/60" aria-hidden="true" />{b}</span></td></tr>))}</tbody>
        </table>
      </div>
      <p className="mx-auto mt-4 max-w-5xl text-center text-xs text-ink-soft">{t.note}</p>
    </Section>
  );
}
