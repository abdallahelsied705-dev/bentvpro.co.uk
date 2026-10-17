import { useId } from "react";

/** IPTV UK mark: a rose-to-violet gradient tile holding a white TV with a play button. */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string; onDark?: boolean }) {
  const g = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e11d48" /><stop offset=".55" stopColor="#c026d3" /><stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${g})`} />
      <rect x="10" y="13" width="28" height="19" rx="4.5" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M21 18 L29 22.5 L21 27 Z" fill="#fff" />
      <path d="M18 37 H30" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="12" r="3.2" fill="#22d3ee" />
    </svg>
  );
}

/** Mark plus wordmark. Real text, so it always matches the site font. */
export function Logo({ size = 40, onDark = false, className = "" }: { size?: number; onDark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.4rem] font-extrabold text-white">IPTV <span className="text-grad">UK</span></span>
        <span className="mt-1 text-[0.58rem] font-bold tracking-[0.32em] text-ink-soft">PREMIUM IPTV</span>
      </span>
    </span>
  );
}
