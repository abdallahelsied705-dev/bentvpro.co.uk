import { Section, SectionHeading } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const copy = { en: { eyebrow: "How it works", title: "Watching Polish TV tonight, in four steps", steps: [
  ["Pick a plan", "Choose how long (1 to 24 months) and how many screens should watch at the same time."],
  ["Order", "Pay through PayPal or by card, or simply send us a WhatsApp message."],
  ["Check your inbox", "Once the payment is confirmed, your login details arrive by e-mail."],
  ["Log in and watch", "Follow the guide for your device. Most people are watching within 15 minutes."],
] } } as const;

export function HowItWorks({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section tone="white">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <ol className="grid gap-x-8 gap-y-10 md:grid-cols-4">
        {t.steps.map(([title, text], i) => (
          <li key={title} className="relative border-t-2 border-header pt-5">
            <span aria-hidden="true" data-n={String(i + 1).padStart(2, "0")} className="numeral" />
            <h3 className="font-display mt-3 text-xl font-bold text-header">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
