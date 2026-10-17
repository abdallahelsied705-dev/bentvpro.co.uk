import { getAllPosts, getPost } from "@/lib/blog";
import { renderOg } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ lang: "en", slug: p.slug }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug } = await ctx.params;
  const post = getPost("en", slug);
  return renderOg({ kicker: "Polish IPTV guide", title: post?.title ?? "IPTV Polska UK", footer: "IPTV UK · Polish TV in Britain" });
}
