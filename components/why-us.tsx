import { Home, Languages, MonitorSmartphone, PoundSterling, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const icons: LucideIcon[] = [Languages, Home, PoundSterling, MonitorSmartphone, Wrench, ShieldCheck];
const copy = {
  en: { eyebrow: "Why IPTV UK", title: "Polish TV that fits a life in Britain", items: [
    ["Help in both your languages", "Message us on WhatsApp in Polish or English, whichever is easier for you or your children."],
    ["Renter-friendly", "Nothing to drill or fix to the wall, so there is no need to ask a landlord. Move house and your TV comes with you."],
    ["Pay in pounds, no contract", "Clear GBP prices from 1 to 24 months. No credit check, no auto-renewing deal, no exit fee."],
    ["Every screen in the house", "One plan covers up to 4 devices watching at once: the living-room TV, a tablet in the kitchen, a phone on the night bus."],
    ["Set up in minutes", "Step-by-step guides for the Fire TV Stick, Samsung and LG TVs, Android, iPhone, MAG and computers."],
    ["Try before you pay", "A free trial on your own broadband, and a 7-day refund if it does not work on your device."],
  ] },
} as const;

export function WhyUs({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section tone="muted">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <ul className="grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map(([title, text], i) => { const Icon = icons[i]; return (
          <li key={title} className="flex gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm ring-1 ring-border"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span><div><h3 className="font-display text-lg font-bold text-header">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p></div></li>
        ); })}
      </ul>
    </Section>
  );
}
