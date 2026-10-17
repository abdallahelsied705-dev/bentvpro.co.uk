"use client";

import Link from "next/link";
import { Loader2, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Lang } from "@/lib/i18n";
import { path } from "@/lib/routes";
import { SITE, whatsappLink } from "@/lib/site";

const copy = {
  en: { email: "Your e-mail address", device: "What will you watch on?", devices: ["Amazon Fire TV Stick", "Samsung smart TV", "LG smart TV", "Android TV / Google TV", "Android phone or tablet", "iPhone, iPad or Apple TV", "MAG box", "Windows PC or Mac", "Something else"], consent1: "I agree to be contacted about my free trial. Data controller:", consent2: "We use your e-mail address and device type only to set up the trial and reply to you. You can withdraw consent at any time by writing to us. See our", privacy: "privacy policy", submit: "Send me a free trial", sending: "Sending...", okTitle: "Thanks! We have your request.", okText: "Your trial details will be sent to", okHint: "If nothing arrives, check your spam or junk folder.", waTitle: "Finish your request on WhatsApp.", errTitle: "Sorry, the form did not send.", waText: "Message us directly and we will set up your free trial. Your details are already filled in.", wa: "Message us on WhatsApp", waMsg: (d: string, e: string) => `Hi! I would like a free trial of ${SITE.name}. Device: ${d}. E-mail: ${e}` },
} as const;

type Status = "idle" | "sending" | "sent" | "whatsapp" | "error";
const input = "w-full rounded-xl border border-border bg-background px-4 py-3 text-header placeholder:text-ink-soft/60 transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export function TrialForm({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [device, setDevice] = useState<string>(t.devices[0]);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/trial", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, device, consent, website }) });
      if (!res.ok) throw new Error(String(res.status));
      const data = (await res.json()) as { delivered?: boolean };
      setStatus(data.delivered === false ? "whatsapp" : "sent");
    } catch { setStatus("error"); }
  }

  if (status === "sent") return (<div role="status" className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center"><p className="font-display text-xl font-bold text-header">{t.okTitle}</p><p className="mt-2 text-ink-soft">{t.okText} <strong className="text-header">{email}</strong>. {t.okHint}</p></div>);
  if (status === "whatsapp" || status === "error") return (<div role="status" className="rounded-xl border border-border bg-surface2 p-8 text-center"><p className="font-display text-xl font-bold text-header">{status === "error" ? t.errTitle : t.waTitle}</p><p className="mt-2 text-ink-soft">{t.waText}</p><a href={whatsappLink(t.waMsg(device, email))} target="_blank" rel="noopener noreferrer" className="btn btn-teal mt-6"><MessageCircle size={18} aria-hidden="true" /> {t.wa}</a></div>);
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div><label htmlFor="trial-email" className="mb-1.5 block text-sm font-bold text-header">{t.email}</label><input id="trial-email" type="email" required autoComplete="email" maxLength={254} placeholder="name@example.co.uk" value={email} onChange={(e) => setEmail(e.target.value)} className={input} /></div>
      <div><label htmlFor="trial-device" className="mb-1.5 block text-sm font-bold text-header">{t.device}</label><select id="trial-device" value={device} onChange={(e) => setDevice(e.target.value)} className={`${input} appearance-none`}>{t.devices.map((d) => (<option key={d} value={d}>{d}</option>))}</select></div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label>Do not fill this field<input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label></div>
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft"><input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#e11d48]" /><span>{t.consent1} {SITE.name}, {SITE.email}. {t.consent2}{" "}<Link href={path(lang, "privacy")} className="font-bold text-accent underline underline-offset-2">{t.privacy}</Link>.</span></label>
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full !py-4 disabled:opacity-70">{status === "sending" ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" /> {t.sending}</>) : t.submit}</button>
    </form>
  );
}
