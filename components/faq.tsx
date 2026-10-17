import Link from "next/link";
import { Plus } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, card } from "@/components/ui";
import { locales, type Lang } from "@/lib/i18n";
import { blogPath, path } from "@/lib/routes";
import { whatsappLink } from "@/lib/site";

type Item = { q: string; a: string; link?: { label: string; href: string } };
const copy: Record<Lang, { eyebrow: string; title: string; more: string; ask: string; msg: string; items: Item[] }> = {
  en: {
    eyebrow: "FAQ", title: "IPTV Polska in the UK: your questions answered", more: "Still have a question? Message us, we answer in English and Polish.", ask: "Ask us on WhatsApp", msg: "Hi! I have a question about Polish IPTV in the UK.",
    items: [
      { q: "What is IPTV Polska?", a: "IPTV Polska means Polish television delivered over the internet. Instead of a satellite dish or a cable box, the picture reaches you through your broadband and you watch it in an app on a smart TV, Fire TV Stick, phone, tablet or computer.", link: { label: "Polish TV in the UK, explained", href: blogPath("en", "polish-tv-in-the-uk") } },
      { q: "Can I watch Polish TV in the UK with IPTV?", a: "Yes. IPTV works over any normal UK broadband or fibre connection, so you can watch Polish live TV and on-demand programmes anywhere in England, Scotland, Wales or Northern Ireland without a dish." },
      { q: "How much does IPTV Polska cost in the UK?", a: "For one screen: £15 for 1 month, £35 for 3 months, £45 for 6 months, £60 for 12 months and £110 for 24 months. That is £5 a month on the 12-month plan and about £4.58 a month on 24 months. Plans for 2, 3 or 4 screens cost more; see the full price table." },
      { q: "Is there a contract or automatic renewal?", a: "No. You pay once for the period you choose, from 1 to 24 months. Nothing renews automatically and there is no exit fee. When your plan ends, you decide whether to renew." },
      { q: "Which devices work with it?", a: "Amazon Fire TV Stick, Samsung and LG smart TVs, Android TV and Google TV, Android phones and tablets, iPhone, iPad and Apple TV, MAG boxes, and Windows or Mac computers.", link: { label: "Setup guide for every device", href: path("en", "guide") } },
      { q: "How many people can watch at the same time?", a: "Each plan covers 1 to 4 devices watching at once, depending on what you choose. For five or more screens, message us and we will quote a price." },
      { q: "Do I need a satellite dish or landlord permission?", a: "No. There is nothing to install on the building, which is why IPTV suits people who rent. If you move, you simply log in at your new address." },
      { q: "What broadband speed do I need?", a: "Roughly 10 Mbps per screen for HD and around 25 Mbps for 4K where it is available. Most UK fibre broadband handles two or three screens comfortably.", link: { label: "Broadband speed for Polish IPTV", href: blogPath("en", "broadband-speed-for-polish-iptv") } },
      { q: "How do I pay and when do I get my login?", a: "Pay through PayPal (which also takes Visa and Mastercard) or order on WhatsApp. Orders are checked by a person, and your login details arrive by e-mail, usually within 5 minutes to 6 hours." },
      { q: "Can I try it before I pay?", a: "Yes. Request a free trial with the form on this page and test it on your own TV and broadband before choosing a plan." },
      { q: "What if it does not work on my TV?", a: "Our support team will help you set it up. If it still will not work on your device within 7 days of activation, we refund the plan.", link: { label: "Refund policy", href: path("en", "refunds") } },
      { q: "Is IPTV legal in the UK?", a: "IPTV itself is simply a way of delivering TV over the internet and is used by many mainstream broadcasters. What matters is whether a service has the rights to what it shows. Our copyright policy explains how rights holders can contact us.", link: { label: "Copyright policy", href: path("en", "copyright") } },
    ],
  },
};

export function Faq({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const jsonLd = { "@type": "FAQPage", inLanguage: locales[lang].html, mainEntity: t.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })) };
  return (
    <Section id="faq" tone="muted">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="mx-auto max-w-3xl space-y-3">
        {t.items.map((item) => (
          <details key={item.q} className={`${card} group open:border-brand/40`}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-header"><span>{item.q}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background text-brand"><Plus size={18} className="faq-icon transition-transform" aria-hidden="true" /></span></summary>
            <div className="px-5 pb-5 leading-relaxed text-ink-soft"><p>{item.a}</p>{item.link && (<p className="mt-3"><Link href={item.link.href} className="font-bold text-brand underline underline-offset-2">{item.link.label}</Link></p>)}</div>
          </details>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-3xl text-center"><p className="text-ink-soft">{t.more}</p><a href={whatsappLink(t.msg)} target="_blank" rel="noopener noreferrer" className="btn btn-teal mt-5">{t.ask}</a></div>
      <JsonLd data={jsonLd} />
    </Section>
  );
}
