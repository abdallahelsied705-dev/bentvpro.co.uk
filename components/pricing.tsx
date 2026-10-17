import { Check, Headset, RotateCcw, ShieldCheck, Wallet, Zap } from "lucide-react";
import { PricingPlans } from "@/components/pricing-plans";
import { Section, SectionHeading, card } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

const copy = {
  en: { eyebrow: "Prices", title: "IPTV UK prices", sub: "Choose how many screens and for how long. All prices are in pounds sterling, paid once, with nothing that renews behind your back.", trust: [{ icon: Zap, text: "Free trial first" }, { icon: RotateCcw, text: "7-day refund" }, { icon: Headset, text: "24/7 support" }, { icon: Wallet, text: "PayPal, Visa, Mastercard" }], incEyebrow: "In every plan", incTitle: "Same service, whichever plan you pick", incText: "Plans differ only in length and number of screens.", features: ["Live TV, live sport, films and box sets", "Smart TV, Fire TV Stick, phone, tablet and computer", "On-screen TV guide (EPG) in supported apps", "Free updates for the length of your plan", "Free setup help", "24/7 support on WhatsApp and e-mail", "7-day refund if it will not work on your device", "Free trial before you pay"], note: "Need more than four screens, for a large family or a shared house? Message us and we will put together a price.", noteCta: "Ask about 5+ screens", noteMsg: "Hi! I need an IPTV UK plan for more than four devices." },
} as const;

export function Pricing({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section id="plans">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <PricingPlans lang={lang} />
      <ul data-stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{t.trust.map(({ icon: Icon, text }) => (<li key={text} className={`${card} flex items-center gap-3 px-4 py-3 text-sm font-semibold text-header`}><Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />{text}</li>))}</ul>
      <div data-reveal className={`${card} mt-6 p-8 md:p-10`}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="eyebrow">{t.incEyebrow}</p><h3 className="font-display mt-4 text-2xl font-bold text-header">{t.incTitle}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.incText}</p></div>
          <ul data-stagger className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:col-span-8">{t.features.map((f) => (<li key={f} className="flex items-start gap-3 text-[0.95rem] text-header"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-grad text-white"><Check size={13} strokeWidth={3.5} aria-hidden="true" /></span><span>{f}</span></li>))}</ul>
        </div>
      </div>
      <div data-reveal className="card mt-6 flex flex-col items-start gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface2 text-accent"><ShieldCheck size={24} strokeWidth={1.8} aria-hidden="true" /></span><p className="text-sm leading-relaxed text-header">{t.note}</p></div>
        <a href={whatsappLink(t.noteMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-teal shrink-0">{t.noteCta}</a>
      </div>
    </Section>
  );
}
