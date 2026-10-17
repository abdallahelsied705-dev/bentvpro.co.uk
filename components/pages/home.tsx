import type { Metadata } from "next";
import { Closing } from "@/components/closing";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Intro } from "@/components/intro";
import { JsonLd } from "@/components/json-ld";
import { LatestPosts } from "@/components/latest-posts";
import { PlanMatrix } from "@/components/plan-matrix";
import { Pricing } from "@/components/pricing";
import { Showcase } from "@/components/showcase";
import { StatsRibbon } from "@/components/stats-ribbon";
import { StickyCta } from "@/components/sticky-cta";
import { Testimonials } from "@/components/testimonials";
import { TrialSection } from "@/components/trial-section";
import { VsCable } from "@/components/vs-cable";
import { WhyUs } from "@/components/why-us";
import type { Lang } from "@/lib/i18n";
import { path, ROUTES } from "@/lib/routes";
import { pageMetadata, productLd, webPageLd } from "@/lib/seo";

const meta = {
  en: { title: "IPTV Polska UK – Polish TV in the UK from £15 | IPTV Poland", description: "IPTV Polska for Poles in the UK: Polish live TV, films and sport on Fire TV Stick, smart TV and phone. From £15 a month, 1–4 screens, no contract, free trial." },
} as const;

export const homeMetadata = (lang: Lang): Metadata => pageMetadata({ lang, ...meta[lang], paths: { ...ROUTES.home }, absolute: true });

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <JsonLd data={[webPageLd({ lang, path: path(lang, "home"), name: meta[lang].title, description: meta[lang].description }), productLd(lang)]} />
      <Hero lang={lang} />
      <StatsRibbon lang={lang} />
      <Intro lang={lang} />
      <Pricing lang={lang} />
      <Showcase lang={lang} />
      <TrialSection lang={lang} />
      <PlanMatrix lang={lang} />
      <VsCable lang={lang} />
      <HowItWorks lang={lang} />
      <WhyUs lang={lang} />
      <Testimonials lang={lang} />
      <LatestPosts lang={lang} />
      <Faq lang={lang} />
      <Closing lang={lang} />
      <StickyCta lang={lang} />
    </>
  );
}
