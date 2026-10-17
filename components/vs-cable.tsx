import { Check, Minus } from "lucide-react";
import { Section, SectionHeading, card } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: { eyebrow: "IPTV or a satellite dish?", title: "Watching Polish TV in the UK: IPTV compared with satellite", sub: "Until recently, the usual way to get Polish TV in Britain was a dish pointed at a European satellite. Here is how the two compare.", cols: ["", "IPTV Polska", "Satellite dish"], caption: "IPTV Polska compared with a satellite dish for Polish TV in the UK", note: "A general comparison. Costs and rules vary by provider, building and council.", rows: [
    ["Installation", "None. Install an app and log in.", "A dish, cabling and often an installer visit."],
    ["Renting", "Nothing on the wall, no landlord permission.", "Landlord or freeholder consent usually needed."],
    ["Contract", "Pay for 1 to 24 months, no auto-renewal.", "Often a 12 to 24 month subscription."],
    ["Screens", "Up to 4 at once: TV, phone, tablet, laptop.", "Usually the one TV the decoder is plugged into."],
    ["Moving house", "Log in at the new address and carry on.", "Take the dish down and re-install it."],
    ["Weather", "Unaffected by rain or snow.", "Heavy rain can break up the picture."],
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
