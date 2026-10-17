import { Home, Languages, MonitorSmartphone, PoundSterling, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const icons: LucideIcon[] = [Home, Languages, PoundSterling, MonitorSmartphone, Wrench, ShieldCheck];
/** Bento layout: the first tile spans two columns and the last one the full row. */
const spans = ["lg:col-span-2", "", "", "", "", "md:col-span-2 lg:col-span-3"];
const copy = {
  en: { eyebrow: "Why IPTV UK", title: <>Polish TV that fits <span className="text-grad">a life in Britain</span></>, items: [
    ["Renter-friendly, nothing on the wall", "No dish to drill, no landlord to ask, no installer to wait in for. Move house and your Polish TV simply comes with you: log in at the new address and carry on."],
    ["Help in both your languages", "WhatsApp us in Polish or English, whichever is easier for you, your partner or your children."],
    ["Pay in pounds, no contract", "Clear GBP prices from 1 to 24 months. No credit check, no auto-renewal, no exit fee."],
    ["Every screen in the house", "Up to 4 devices at once: the living-room TV, a tablet in the kitchen, a phone on the night bus."],
    ["Set up in minutes", "Guides for Fire TV Stick, Samsung, LG, Android, iPhone, MAG and computers."],
    ["Try before you pay", "Start with a free trial on your own broadband. If it will not work on your device within 7 days of activation, you get a refund. Orders are checked by a real person, never a bot."],
  ] },
} as const;

export function WhyUs({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section tone="muted">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <ul data-stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map(([title, text], i) => { const Icon = icons[i]; return (
          <li key={title} className={`card card-hover group p-7 ${spans[i]}`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grad text-white shadow-lg shadow-brand2/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon size={22} strokeWidth={1.9} aria-hidden="true" /></span>
            <h3 className="font-display mt-5 text-xl font-bold text-header">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
          </li>
        ); })}
      </ul>
    </Section>
  );
}
