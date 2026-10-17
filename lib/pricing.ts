import { locales, type Lang } from "@/lib/i18n";
import { CONNECTION_OPTIONS, PLAN_DEFS, PRICES, type Connections, type PlanId } from "@/lib/site";

export type PricedPlan = { id: PlanId; months: number; price: number | null };

export const CURRENCY = "GBP";

export const gbp = (lang: Lang, n: number) =>
  new Intl.NumberFormat(locales[lang].intl, { style: "currency", currency: CURRENCY, minimumFractionDigits: Number.isInteger(n) ? 0 : 2 }).format(n);

export function getPlans(connections: Connections): PricedPlan[] {
  return PLAN_DEFS.map((def) => ({ ...def, price: PRICES[connections][def.id] }));
}

export function planMeta(plan: PricedPlan, connections: Connections) {
  const monthly = PRICES[connections]["1-month"];
  const perMonth = plan.price != null ? plan.price / plan.months : null;
  const saving = plan.price != null && monthly != null && plan.months > 1 ? Math.round((1 - plan.price / (monthly * plan.months)) * 100) : null;
  return { perMonth, saving };
}

export function cheapestPerMonthId(connections: Connections): PlanId | null {
  const ranked = getPlans(connections).filter((p) => p.price != null).map((p) => ({ id: p.id, v: (p.price as number) / p.months })).sort((a, b) => a.v - b.v);
  return ranked[0]?.id ?? null;
}

export function planDays(months: number) {
  if (months === 12) return 365;
  if (months === 24) return 730;
  return months * 30;
}

export const ALL_PRICES = CONNECTION_OPTIONS.flatMap((c) => PLAN_DEFS.flatMap((def) => { const price = PRICES[c][def.id]; return price == null ? [] : [{ connections: c, plan: def, price }]; }));
export const LOWEST_PRICE = Math.min(...ALL_PRICES.map((p) => p.price));
export const LOWEST_MONTHLY = PRICES[1]["1-month"] as number;
/** Lowest effective monthly price (longest plan, one device). */
export const LOWEST_PER_MONTH = Math.min(...PLAN_DEFS.map((d) => (PRICES[1][d.id] as number) / d.months));
