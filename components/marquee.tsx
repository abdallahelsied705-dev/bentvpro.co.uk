import { Tablet, Clapperboard, Flame, Laptop, MonitorSmartphone, Newspaper, Smartphone, Trophy, Tv, Users, type LucideIcon } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const items: Record<Lang, { icon: LucideIcon; label: string }[]> = {
  en: [
    { icon: Tv, label: "Polish live TV" }, { icon: Flame, label: "Fire TV Stick" }, { icon: Trophy, label: "Live sport" },
    { icon: MonitorSmartphone, label: "Samsung & LG TVs" }, { icon: Clapperboard, label: "Films & series" }, { icon: Tablet, label: "iPhone & iPad" },
    { icon: Newspaper, label: "News from Poland" }, { icon: Smartphone, label: "Android" }, { icon: Users, label: "Kids & family" }, { icon: Laptop, label: "Windows & Mac" },
  ],
};

/** Infinite ticker of genres and devices. Duplicated once so the loop is seamless; the copy is hidden from assistive tech. */
export function Marquee({ lang }: { lang: Lang }) {
  const list = items[lang];
  return (
    <section aria-label="Genres and supported devices" className="border-y border-border bg-[#0c0a16] py-5">
      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {list.map(({ icon: Icon, label }) => (
                <li key={label} className="mx-3 flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-white/85">
                  <Icon size={16} className="text-accent" aria-hidden="true" />{label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
