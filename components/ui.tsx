import type { ReactNode } from "react";

export const card = "card";
export const cardHover = "card-hover";

type Tone = "paper" | "white" | "muted" | "dark";
const TONES: Record<Tone, string> = { paper: "bg-background", white: "bg-surface/40", muted: "bg-[#0c0a16]", dark: "band-dark on-dark" };

export function Section({ children, id, tone = "paper", className = "" }: { children: ReactNode; id?: string; tone?: Tone; className?: string }) {
  return (
    <section id={id} className={`relative overflow-hidden ${TONES[tone]} ${className}`}>
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub, align = "center", as: Tag = "h2", onDark = false }: { eyebrow: string; title: ReactNode; sub?: ReactNode; align?: "center" | "left"; as?: "h1" | "h2"; onDark?: boolean }) {
  const center = align === "center";
  return (
    <div data-reveal className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      <p className={`eyebrow ${center ? "eyebrow-center" : ""}`}>{eyebrow}</p>
      <Tag className="font-display mt-4 text-3xl font-bold leading-[1.1] text-header md:text-5xl">{title}</Tag>
      {sub && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${onDark ? "text-white/80" : "text-ink-soft"} ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}
