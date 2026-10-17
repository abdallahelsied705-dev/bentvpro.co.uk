import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IPTV UK – Premium IPTV",
    short_name: "IPTV UK",
    description: "IPTV UK: live TV, sport, films and box sets over your UK broadband, from £15 a month.",
    start_url: "/",
    display: "standalone",
    background_color: "#08070f",
    theme_color: "#08070f",
    lang: "en-GB",
  };
}
