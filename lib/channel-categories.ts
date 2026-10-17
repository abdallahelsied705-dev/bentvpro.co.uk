import type { Lang } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";
import { CalendarClock, Clapperboard, Newspaper, Trophy, Tv, Users } from "lucide-react";

export type ChannelCategory = { icon: LucideIcon; title: string; text: string };

/** Category descriptions only, no channel counts or names claimed. Availability depends on plan. */
export const CHANNEL_CATEGORIES: Record<Lang, ChannelCategory[]> = {
  en: [
    { icon: Tv, title: "Live Polish TV", text: "Polish channels streamed as they air, so evenings in Manchester or Leeds feel like evenings at home." },
    { icon: Clapperboard, title: "Films and series on demand", text: "A library of Polish films and series you can start whenever your shift pattern allows." },
    { icon: Trophy, title: "Live sport", text: "Football, volleyball, ski jumping and other sport where it is included in your plan." },
    { icon: Newspaper, title: "News from Poland", text: "Polish news and current affairs, plus regional programmes from back home." },
    { icon: Users, title: "Children and family", text: "Cartoons and family viewing in Polish, which helps children growing up in the UK keep the language." },
    { icon: CalendarClock, title: "TV guide and catch-up", text: "An on-screen programme guide in supported apps, so you can see what is on now and next." },
  ],
};
