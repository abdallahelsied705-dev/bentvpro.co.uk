import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const Mark = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <rect x="2" y="2" width="44" height="44" rx="13" fill="#ffffff" />
    <path d="M2 24 H46 V33 A13 13 0 0 1 33 46 H15 A13 13 0 0 1 2 33 Z" fill="#c8102e" />
    <rect x="11" y="13" width="26" height="17" rx="3.5" fill="none" stroke="#0a1633" strokeWidth="3" />
    <path d="M21 17.5 L28.5 21.5 L21 25.5 Z" fill="#0a1633" />
    <path d="M18 36 H30" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export function renderOg({ title, kicker, footer }: { title: string; kicker: string; footer: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #0a1633 0%, #142650 60%, #5a0d1d 100%)", color: "#ffffff" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", marginRight: 20 }}><Mark size={76} /></div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>IPTV <span style={{ color: "#ff6b7a", marginLeft: 12 }}>UK</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ff6b7a", marginBottom: 18 }}>{kicker}</div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 56 : 70, fontWeight: 700, lineHeight: 1.12 }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c9d2e8" }}>{footer}</div>
      </div>
    ),
    OG_SIZE,
  );
}
