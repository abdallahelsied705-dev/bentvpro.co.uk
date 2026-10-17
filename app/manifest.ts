import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IPTV UK – IPTV Polska",
    short_name: "IPTV UK",
    description: "IPTV Polska for UK households: Polish live TV and on-demand programmes over your broadband, from £15 a month.",
    start_url: "/",
    display: "standalone",
    background_color: "#08070f",
    theme_color: "#08070f",
    lang: "en-GB",
  };
}
