import { Check } from "lucide-react";
import { TrialForm } from "@/components/trial-form";
import { Section } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const copy = { en: { eyebrow: "No risk", title: "Try IPTV UK free on your own screen", text: "See the picture quality on your broadband, browse what is included and check it works on your TV before you spend a penny.", points: ["Test on your own TV or phone", "No card details needed", "Login sent to your e-mail", "Setup help if you need it"] } } as const;

export function TrialSection({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section id="trial" tone="dark">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div data-reveal="left">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{t.text}</p>
          <ul data-stagger className="mt-8 space-y-3">{t.points.map((p) => (<li key={p} className="flex items-start gap-3 text-white"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-grad text-white"><Check size={14} strokeWidth={3.5} aria-hidden="true" /></span>{p}</li>))}</ul>
        </div>
        <div data-reveal="right" className="card glow-border p-6 md:p-8"><TrialForm lang={lang} /></div>
      </div>
    </Section>
  );
}
