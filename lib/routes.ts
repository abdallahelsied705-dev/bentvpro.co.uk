import type { Lang } from "@/lib/i18n";

export const ROUTES = {
  home: { en: "/" },
  guide: { en: "/setup-guide" },
  channels: { en: "/channels" },
  contact: { en: "/contact" },
  about: { en: "/about" },
  terms: { en: "/terms" },
  refunds: { en: "/refund-policy" },
  privacy: { en: "/privacy-policy" },
  copyright: { en: "/copyright-policy" },
  blog: { en: "/blog" },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const path = (lang: Lang, key: RouteKey) => ROUTES[key][lang];
export const sectionHref = (lang: Lang, id: string) => `${ROUTES.home[lang]}#${id}`;
export const blogPath = (lang: Lang, slug: string) => `${ROUTES.blog[lang]}/${slug}`;
