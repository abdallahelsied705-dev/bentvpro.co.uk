import type { Lang } from "@/lib/i18n";

export const SITE = {
  name: "IPTV UK",
  /** Must equal the host your hosting actually serves. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bentvpro.co.uk",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "greeksiptv@gmail.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "212710141872",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+212 710 141 872",
} as const;

/** Business details shown on legal pages only when set (never invent them). */
export const COMPANY = {
  legalName: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "",
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? "",
  taxId: process.env.NEXT_PUBLIC_COMPANY_TAX_ID ?? "",
} as const;

export const SITE_HOST = new URL(SITE.url).hostname;

export function whatsappLink(text?: string) {
  const params = new URLSearchParams({ phone: SITE.whatsappNumber });
  if (text) params.set("text", text);
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}

/* ---------------- Plans and prices (GBP) ---------------- */

export const CONNECTION_OPTIONS = [1, 2, 3, 4] as const;
export type Connections = (typeof CONNECTION_OPTIONS)[number];

export const PLAN_DEFS = [
  { id: "1-month", months: 1 },
  { id: "3-months", months: 3 },
  { id: "6-months", months: 6 },
  { id: "1-year", months: 12 },
  { id: "2-years", months: 24 },
] as const;
export type PlanId = (typeof PLAN_DEFS)[number]["id"];

export const PLAN_NAMES: Record<Lang, Record<PlanId, string>> = {
  en: { "1-month": "1 month", "3-months": "3 months", "6-months": "6 months", "1-year": "12 months", "2-years": "24 months" },
};

export function deviceLabel(_lang: Lang, n: number) {
  return n === 1 ? "1 device" : `${n} devices`;
}

/** Prices in pounds sterling, by number of devices watching at the same time. */
export const PRICES: Record<Connections, Record<PlanId, number | null>> = {
  1: { "1-month": 15, "3-months": 35, "6-months": 45, "1-year": 60, "2-years": 110 },
  2: { "1-month": 20, "3-months": 45, "6-months": 60, "1-year": 80, "2-years": 145 },
  3: { "1-month": 25, "3-months": 55, "6-months": 75, "1-year": 100, "2-years": 180 },
  4: { "1-month": 30, "3-months": 65, "6-months": 90, "1-year": 120, "2-years": 215 },
};
