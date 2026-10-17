import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const Mark = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e11d48" /><stop offset=".55" stopColor="#c026d3" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs><rect x="2" y="2" width="44" height="44" rx="14" fill="url(#g)" /><rect x="10" y="13" width="28" height="19" rx="4.5" fill="none" stroke="#fff" strokeWidth="3" /><path d="M21 18 L29 22.5 L21 27 Z" fill="#fff" /><path d="M18 37 H30" stroke="#fff" strokeWidth="3" strokeLinecap="round" /><circle cx="36" cy="12" r="3.2" fill="#22d3ee" /></svg>
);

export function renderOg({ title, kicker, footer }: { title: string; kicker: string; footer: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "radial-gradient(circle at 85% 0%, #7c1d6f 0%, transparent 55%), radial-gradient(circle at 0% 100%, #6b0f2a 0%, transparent 55%), #08070f", color: "#ffffff" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", marginRight: 20 }}><Mark size={76} /></div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>IPTV <span style={{ color: "#e879f9", marginLeft: 12 }}>UK</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#e879f9", marginBottom: 18 }}>{kicker}</div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 56 : 70, fontWeight: 700, lineHeight: 1.12 }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a7a1bf" }}>{footer}</div>
      </div>
    ),
    OG_SIZE,
  );
}
