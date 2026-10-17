import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() { return [{ lang: "en" }]; }

export async function GET() {
  return renderOg({ kicker: "IPTV UK", title: "Live TV & sport in 4K, no contract", footer: "Free trial · No contract · From £15 a month" });
}
