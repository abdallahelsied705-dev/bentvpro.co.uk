import type { Lang } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";
import { CalendarClock, Clapperboard, Newspaper, Trophy, Tv, Users } from "lucide-react";

export type ChannelCategory = { icon: LucideIcon; title: string; text: string };

/** Category descriptions only, no channel counts or names claimed. Availability depends on plan. */
export const CHANNEL_CATEGORIES: Record<Lang, ChannelCategory[]> = {
  en: [
    { icon: Tv, title: "UK & international live TV", text: "Entertainment, drama, documentaries and lifestyle channels streamed live as they air, with UK and international line-ups." },
    { icon: Clapperboard, title: "Films and box sets on demand", text: "A large library of films and complete series to start whenever suits you, no waiting for a broadcast." },
    { icon: Trophy, title: "Live sport", text: "Football every weekend, plus F1, boxing, cricket, rugby, golf and more, where included in your plan." },
    { icon: Newspaper, title: "24-hour news", text: "UK and world news, business and current affairs around the clock." },
    { icon: Users, title: "Children and family", text: "Cartoons, learning programmes and family films, with parental controls in supported apps." },
    { icon: CalendarClock, title: "TV guide and catch-up", text: "An on-screen programme guide in supported apps, so you can see what is on now and next." },
  ],
};
