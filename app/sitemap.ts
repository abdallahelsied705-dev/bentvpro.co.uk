import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { blogPath, ROUTES, type RouteKey } from "@/lib/routes";
import { LAST_MODIFIED, abs } from "@/lib/seo";

const PRIORITY: Record<RouteKey, number> = { home: 1, guide: 0.8, channels: 0.7, blog: 0.8, contact: 0.7, about: 0.5, terms: 0.3, refunds: 0.3, privacy: 0.3, copyright: 0.4 };

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = (Object.keys(ROUTES) as RouteKey[]).map((key) => ({
    url: abs(ROUTES[key].en),
    lastModified: LAST_MODIFIED,
    changeFrequency: key === "home" || key === "blog" ? ("weekly" as const) : ("monthly" as const),
    priority: PRIORITY[key],
  }));
  const posts: MetadataRoute.Sitemap = getAllPosts("en").map((p) => ({ url: abs(blogPath("en", p.slug)), lastModified: p.updated ?? p.date, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...pages, ...posts];
}
