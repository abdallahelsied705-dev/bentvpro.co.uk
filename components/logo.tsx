/** IPTV UK mark: a white-over-red tile (Polish colours) holding a navy TV screen. */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="44" height="44" rx="13" fill="#ffffff" stroke="#dde2ee" />
      <path d="M2 24 H46 V33 A13 13 0 0 1 33 46 H15 A13 13 0 0 1 2 33 Z" fill="#c8102e" />
      <rect x="11" y="13" width="26" height="17" rx="3.5" fill="#ffffff" stroke="#0a1633" strokeWidth="3" />
      <path d="M21 17.5 L28.5 21.5 L21 25.5 Z" fill="#c8102e" />
      <path d="M18 36 H30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Mark plus wordmark. Real text, so it always matches the site font. */
export function Logo({ size = 40, onDark = false, className = "" }: { size?: number; onDark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-bold ${onDark ? "text-white" : "text-header"}`}>IPTV <span className={onDark ? "text-accent" : "text-brand"}>UK</span></span>
        <span className={`mt-1 text-[0.6rem] font-extrabold tracking-[0.3em] ${onDark ? "text-white/70" : "text-ink-soft"}`}>POLSKA TV</span>
      </span>
    </span>
  );
}
