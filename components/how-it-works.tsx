import { Inbox, MousePointerClick, PlayCircle, Wallet, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const icons: LucideIcon[] = [MousePointerClick, Wallet, Inbox, PlayCircle];
const copy = { en: { eyebrow: "How it works", title: "Watching Polish TV tonight, in four steps", steps: [
  ["Pick a plan", "Choose how long (1 to 24 months) and how many screens should watch at once."],
  ["Order", "Pay through PayPal or by card, or simply send us a WhatsApp message."],
  ["Check your inbox", "Once the payment is confirmed, your login details arrive by e-mail."],
  ["Log in and watch", "Follow the guide for your device. Most people are watching within 15 minutes."],
] } } as const;

/** Timeline: the connecting line draws itself when the list scrolls into view. */
export function HowItWorks({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div data-reveal className="relative">
        <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-border md:block"><div className="timeline-line h-full bg-grad" /></div>
        <ol data-stagger className="relative grid gap-10 md:grid-cols-4">
          {t.steps.map(([title, text], i) => { const Icon = icons[i]; return (
            <li key={title} className="text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border-strong bg-surface text-accent shadow-[0_0_0_6px_var(--background)]">
                <Icon size={26} aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-grad text-xs font-extrabold text-white">{i + 1}</span>
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-header">{title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] leading-relaxed text-ink-soft">{text}</p>
            </li>
          ); })}
        </ol>
      </div>
    </Section>
  );
}
