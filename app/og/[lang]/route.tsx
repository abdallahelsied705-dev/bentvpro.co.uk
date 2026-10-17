import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() { return [{ lang: "en" }]; }

export async function GET() {
  return renderOg({ kicker: "IPTV Polska for UK homes", title: "Polish TV on your UK broadband", footer: "Free trial · No contract · From £15 a month" });
}
