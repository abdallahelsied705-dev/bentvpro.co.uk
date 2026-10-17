import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { Motion } from "@/components/motion";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { locales, type Lang } from "@/lib/i18n";
import { organizationLd, websiteLd } from "@/lib/seo";

const body = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin", "latin-ext"], display: "swap" });
const heading = Outfit({ variable: "--font-heading", subsets: ["latin", "latin-ext"], weight: ["500", "600", "700", "800"], display: "swap" });

/** Marks the page as JS-enabled before paint, so reveal animations never hide content for no-JS visitors or crawlers. */
const jsFlag = `document.documentElement.classList.add("js")`;

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={locales[lang].html} className={`${body.variable} ${heading.variable} h-full antialiased`} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- root layout in the App Router */}
      <head><script dangerouslySetInnerHTML={{ __html: jsFlag }} /></head>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-[#041016]">Skip to content</a>
        <Motion />
        <Header lang={lang} />
        <main id="main" className="flex flex-1 flex-col">{children}</main>
        <Footer lang={lang} />
        <WhatsAppFloat lang={lang} />
        <JsonLd data={[organizationLd, websiteLd]} />
      </body>
    </html>
  );
}
