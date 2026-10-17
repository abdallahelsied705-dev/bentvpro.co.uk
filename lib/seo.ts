import type { Metadata } from "next";
import { ALL_PRICES, CURRENCY } from "@/lib/pricing";
import { locales, type Lang } from "@/lib/i18n";
import { path } from "@/lib/routes";
import { PLAN_NAMES, SITE, deviceLabel } from "@/lib/site";

/** Launch date: every page and article is dated to it. */
export const LAST_MODIFIED = "2026-10-17";
export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const abs = (p: string) => `${SITE.url}${p === "/" ? "" : p}`;

type PageMeta = {
  lang: Lang; title: string; description: string;
  paths: Partial<Record<Lang, string>>;
  absolute?: boolean; image?: string; type?: "website" | "article";
};

export function pageMetadata({ lang, title, description, paths, absolute, image, type = "website" }: PageMeta): Metadata {
  const own = paths[lang] ?? "/";
  const withBrand = `${title} | ${SITE.name}`;
  const useAbsolute = absolute || withBrand.length > 60;
  const fullTitle = useAbsolute ? title : withBrand;
  const shareImage = image ?? `/og/${lang}`;
  return {
    title: useAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: own },
    openGraph: { type, url: own, title: fullTitle, description, locale: locales[lang].og, siteName: SITE.name, images: [{ url: shareImage, width: 1200, height: 630, alt: fullTitle }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [shareImage] },
  };
}

export const organizationLd = {
  "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: abs("/"),
  logo: { "@type": "ImageObject", url: abs("/images/logo-mark.svg"), width: 512, height: 512 },
  email: SITE.email,
  areaServed: { "@type": "Country", name: "United Kingdom" },
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: SITE.email, telephone: `+${SITE.whatsappNumber}`, availableLanguage: ["English"], areaServed: "GB" }],
};

export const websiteLd = { "@type": "WebSite", "@id": WEBSITE_ID, url: abs("/"), name: SITE.name, alternateName: ["IPTV UK subscription", "bentvpro.co.uk"], inLanguage: "en-GB", publisher: { "@id": ORG_ID } };

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return { "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: abs(item.path) })) };
}

export function webPageLd(opts: { lang: Lang; path: string; name: string; description: string; type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" }) {
  return { "@type": opts.type ?? "WebPage", "@id": `${abs(opts.path)}#webpage`, url: abs(opts.path), name: opts.name, description: opts.description, inLanguage: locales[opts.lang].html, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID }, datePublished: LAST_MODIFIED, dateModified: LAST_MODIFIED };
}

export function productLd(lang: Lang) {
  return {
    "@type": "Product", "@id": `${SITE.url}/#product`,
    name: "IPTV UK subscription",
    description: "IPTV UK subscription for households in the United Kingdom: live TV, live sport and a large film and series library on smart TVs, Fire TV Stick, phones, tablets and computers. Plans from 1 to 24 months, for 1 to 4 devices, priced in pounds.",
    brand: { "@id": ORG_ID }, inLanguage: locales[lang].html,
    offers: {
      "@type": "AggregateOffer", priceCurrency: CURRENCY,
      lowPrice: Math.min(...ALL_PRICES.map((o) => o.price)), highPrice: Math.max(...ALL_PRICES.map((o) => o.price)), offerCount: ALL_PRICES.length,
      offers: ALL_PRICES.map((o) => ({ "@type": "Offer", name: `${SITE.name} – ${PLAN_NAMES[lang][o.plan.id]}, ${deviceLabel(lang, o.connections)}`, price: o.price, priceCurrency: CURRENCY, availability: "https://schema.org/InStock", areaServed: "GB", url: abs(`${path(lang, "home")}#plans`.replace("/#", "#")), seller: { "@id": ORG_ID } })),
    },
  };
}
